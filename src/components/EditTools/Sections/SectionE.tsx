import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";
import { SectionProps } from "./types";

const SectionE = ({ ...props }: SectionProps) => {
    return (
        <div {...props}>
            <div className="vertical-divider m-8" />
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Insert link"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="link" />
                </OptionWrapper>
                <OptionWrapper
                    title="Add comment"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                    disabled
                >
                    <Generic icon="add_comment" />
                </OptionWrapper>
                <OptionWrapper
                    title="Insert image"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="image" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionE;
