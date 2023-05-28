import React, { useEffect, useRef, useState } from "react";
import useDebouncedCallback from "../../../../hooks/useDebouncedCallback";

const options = [
    "File",
    "Edit",
    "View",
    "Insert",
    "Format",
    "Tools",
    "Extensions",
    "Help",
];

const Tools = () => {
    const toolsContainerRef = useRef<HTMLDivElement>(null);
    const moreToolsRef = useRef<HTMLButtonElement>(null);
    const [overflow, setOverflow] = useState(false);

    // Handle the overflowing tools on resize

    // Resize handler
    const handleResize = useDebouncedCallback(() => {
        if (!toolsContainerRef.current) return;

        // Find the right point of the overflowing container
        const containerRight =
            toolsContainerRef.current.offsetLeft +
            toolsContainerRef.current.offsetWidth;

        // The number of sections it has (includes more tools)
        const nChildren = toolsContainerRef.current.children.length;

        let i = 0;
        let flag = false;
        let moreToolsWidth = moreToolsRef.current?.offsetWidth;

        // Find a section which overflows behind the container
        for (; i < nChildren; i++) {
            const child = toolsContainerRef.current.children[
                i
            ] as HTMLDivElement;
            child.style.display = "block";
            const childRight =
                child.offsetLeft + child.offsetWidth + (moreToolsWidth ?? 0);
            if (childRight > containerRight) break;
        }

        // Do not display the next sections unless it it more tools
        for (; i < nChildren; i++) {
            const child = toolsContainerRef.current.children[
                i
            ] as HTMLDivElement;
            if (child.classList.contains("more-option")) continue;
            flag = true;
            child.style.display = "none";
        }

        // Set the overflow state of container
        setOverflow(flag);
    });

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={toolsContainerRef} className="document-tools flex mt-4">
            {options.map((option, idx) => (
                <button key={idx}>{option}</button>
            ))}
            {overflow && (
                <button ref={moreToolsRef} className="more-option">
                    ...
                </button>
            )}
        </div>
    );
};

export default Tools;
