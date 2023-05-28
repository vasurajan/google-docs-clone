import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Expand from "../../Options/Expand";
import Generic from "../../Options/Generic";
import { SectionProps } from "./types";

const SectionF = ({ ...props }: SectionProps) => {
    return (
        <div {...props}>
            <div className="vertical-divider m-8" />
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Align & indent"
                    className="edit-tool"
                    buttonClass="edit-tool-button close-expand-button"
                >
                    <Expand icon="format_align_left" />
                </OptionWrapper>
                <OptionWrapper
                    title="Line $ paragraph spacing"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_line_spacing" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionF;
