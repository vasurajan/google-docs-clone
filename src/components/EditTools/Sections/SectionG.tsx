import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";
import { SectionProps } from "./types";

const SectionG = ({ ...props }: SectionProps) => {
    return (
        <div {...props}>
            <div className="edit-tools-section">
                <div className="flex">
                    <OptionWrapper
                        title="Checklist"
                        className="edit-tool"
                        buttonClass="edit-tool-button"
                    >
                        <Generic icon="checklist" />
                    </OptionWrapper>
                    <OptionWrapper
                        title="Checklist menu"
                        className="edit-tool"
                        buttonClass="edit-tool-button expand"
                    >
                        <Generic icon="arrow_drop_down" />
                    </OptionWrapper>
                </div>
                <div className="flex">
                    <OptionWrapper
                        title="Bulleted list"
                        className="edit-tool"
                        buttonClass="edit-tool-button"
                    >
                        <Generic icon="format_list_bulleted" />
                    </OptionWrapper>
                    <OptionWrapper
                        title="Bulleted list menu"
                        className="edit-tool"
                        buttonClass="edit-tool-button expand"
                    >
                        <Generic icon="arrow_drop_down" />
                    </OptionWrapper>
                </div>
                <div className="flex">
                    <OptionWrapper
                        title="Numbered list"
                        className="edit-tool"
                        buttonClass="edit-tool-button"
                    >
                        <Generic icon="format_list_numbered" />
                    </OptionWrapper>
                    <OptionWrapper
                        title="Numbered list menu"
                        className="edit-tool"
                        buttonClass="edit-tool-button expand"
                    >
                        <Generic icon="arrow_drop_down" />
                    </OptionWrapper>
                </div>
            </div>
        </div>
    );
};

export default SectionG;
