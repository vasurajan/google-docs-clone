import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";
import { SectionProps } from "./types";

const SectionH = ({ ...props }: SectionProps) => {
    return (
        <div {...props}>
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Decrease indent"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_indent_decrease" />
                </OptionWrapper>
                <OptionWrapper
                    title="Increase indent"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_indent_increase" />
                </OptionWrapper>
                <OptionWrapper
                    title="Clear formatting"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_clear" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionH;
