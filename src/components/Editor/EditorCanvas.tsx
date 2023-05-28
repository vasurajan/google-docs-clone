import React, { useContext, useEffect, useRef, useState } from "react";
import FormatSettingsContext from "../../contexts/FormatSettingsContext";

// Types
interface EditorCanvasProps {
    widthPixel: number;
    sizesInch: {
        width: number;
        height: number;
    };
}

// Main Canvas for editing
const EditorCanvas = ({ widthPixel, sizesInch }: EditorCanvasProps) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const { settings } = useContext(FormatSettingsContext);
    const [content, setContent] = useState<string>(
        "Click on the editor and start typing"
    );
    const [isEditorActive, setIsEditorActive] = useState(false);

    // Handle focus and blur on the canvas editor
    const handleClick = (e: MouseEvent) => {
        const elementsClicked = document.elementsFromPoint(
            e.clientX,
            e.clientY
        );
        let flag = false;
        for (let i = 0; i < elementsClicked.length; i++) {
            if (elementsClicked[i].id === "editor") {
                flag = true;
                break;
            }
        }

        setIsEditorActive(flag);
    };

    // Handle when user presses character keys
    const handleKeyPress = (e: KeyboardEvent) => {
        e.preventDefault();
        // Create new line
        if (e.key === "Enter") {
            setContent((prev) => prev + "\n");
        }
        // Enter new character
        else {
            setContent((prev) => prev + e.key);
        }
    };

    // Remove last character when backspace is pressed
    // TODO
    // Buggy right now - Fires multiple times
    const handleBackspace = (e: KeyboardEvent) => {
        if (e.key === "Backspace") {
            setContent((prev) =>
                prev.length === 0 ? "" : prev.slice(0, prev.length - 1)
            );
        }
    };

    // Draw the canvas
    const draw = () => {
        // Get font related format settings
        const fontStyle = settings["italics"] ? "italic" : "normal";
        const fontWeight = settings["bold"] ? "bold" : "normal";

        // Canvas context
        const ctx = ref.current?.getContext("2d");
        if (!ctx) return;

        // Font setting for canvas
        ctx.font = `${fontWeight} ${fontStyle} ${settings.font_size}px ${settings.font}`;

        // Clear the canvas before drawing
        ctx.clearRect(0, 0, ref.current?.width ?? 0, ref.current?.height ?? 0);

        // Paint text content
        let startX = settings["horizontal_margin"],
            startY = settings["vertical_margin"] + settings["font_size"];

        let currentX = startX,
            currentY = startY;

        let between_line_space =
            settings["line_height"] + settings["font_size"];

        content.split("").forEach((char) => {
            if (char === "\n") {
                currentX = startX;
                currentY = currentY + between_line_space;
            } else {
                if (
                    currentX + ctx.measureText(char).width >
                    (ref.current?.width ?? 0) - settings["horizontal_margin"]
                ) {
                    currentX = startX;
                    currentY += between_line_space;
                }
                ctx.fillText(char, currentX, currentY);
                currentX += ctx.measureText(char).width;
            }
        });

        // Paint cursor if the editor is active
        if (isEditorActive) {
            const height = settings["font_size"];
            const cursorOffsetX = 3;
            ctx.beginPath();
            ctx.moveTo(currentX + cursorOffsetX, currentY);
            ctx.lineTo(currentX + cursorOffsetX, currentY - height);
            ctx.stroke();
        }
    };

    // Check if the editor is active or not
    useEffect(() => {
        if (ref.current) {
            ref.current.width = widthPixel;
            ref.current.height =
                (widthPixel * sizesInch.height) / sizesInch.width;
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Check for text input when the editor is active
    useEffect(() => {
        draw();
        if (isEditorActive && ref.current) {
            document.addEventListener("keypress", handleKeyPress);
            document.addEventListener("keydown", handleBackspace);
        }
        return () => {
            document.removeEventListener("keypress", handleKeyPress);
            document.removeEventListener("keydown", handleBackspace);
        };
    }, [isEditorActive]);

    // Update the canvas when content or format settings
    useEffect(() => {
        draw();
    }, [settings, content]);

    return (
        <canvas
            ref={ref}
            id="editor"
            style={{
                width: widthPixel,
                height: (widthPixel * sizesInch.height) / sizesInch.width,
            }}
        />
    );
};

export default EditorCanvas;
