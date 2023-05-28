import React from "react";
import "./Editor.css";
import HorizontalRuler from "./Ruler/HorizontalRuler";
import EditorCanvas from "./EditorCanvas";

// Editing space
const Editor = () => {
    // Considering A4 size values
    const editorSizeInches = { width: 8.3, height: 11.7 };
    const editorWidthInPixel = 794;

    return (
        <div className="editor-container">
            <HorizontalRuler
                width={editorWidthInPixel}
                spread={editorSizeInches.width}
            />
            <EditorCanvas
                sizesInch={editorSizeInches}
                widthPixel={editorWidthInPixel}
            />
        </div>
    );
};

export default Editor;
