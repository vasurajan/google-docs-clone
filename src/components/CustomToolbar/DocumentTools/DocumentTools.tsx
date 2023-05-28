import React, { useEffect, useState } from "react";
import "./DocumentTools.css";
import Tools from "./Tools/Tools";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";

// Default title of the document
const DEFAULT_TITLE = "Untitled document";

// Types
interface DocumentToolsProps extends React.HTMLAttributes<HTMLDivElement> {}

// Document Related Tools
const DocumentTools = (props: DocumentToolsProps) => {
    const [title, setTitle] = useState(DEFAULT_TITLE);

    // Handle the changing input for document title
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value);

    // Validate that the title does not remain empty
    const validateTitleChange = () => {
        if (!title) setTitle(DEFAULT_TITLE);
    };

    // Update the title of the tab
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div {...props}>
            <div
                className="flex"
                style={{
                    whiteSpace: "nowrap",
                    alignItems: "center",
                }}
            >
                <div className="document-title">
                    <span className="document-title-hidden document-title-input-and-hidden">
                        {title}
                    </span>
                    <input
                        value={title}
                        onChange={handleTitleChange}
                        onBlur={validateTitleChange}
                        className="document-title-input document-title-input-and-hidden"
                        data-tip="Rename"
                    />
                </div>
                <div className="flex">
                    <OptionWrapper
                        title="Start"
                        buttonClass="small-icon-button"
                        className="mr-4 ml-4"
                    >
                        <Generic icon="star" iconSize={18} />
                    </OptionWrapper>
                    <OptionWrapper
                        title="Move"
                        buttonClass="small-icon-button"
                        className="mr-4"
                    >
                        <Generic icon="drive_file_move" iconSize={18} />
                    </OptionWrapper>
                    <OptionWrapper
                        title="See document status"
                        buttonClass="small-icon-button"
                    >
                        <Generic icon="cloud_done" iconSize={18} />
                    </OptionWrapper>
                </div>
            </div>
            <Tools />
        </div>
    );
};

export default DocumentTools;
