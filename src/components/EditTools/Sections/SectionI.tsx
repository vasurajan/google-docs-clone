import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Expand from "../../Options/Expand";
import { SectionProps } from "./types";

const SectionI = ({ ...props }: SectionProps) => {
    return (
        <div {...props}>
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Editing mode"
                    className="edit-tool"
                    buttonClass="edit-tool-button rounded-button"
                >
                    <Expand icon="edit" />
                </OptionWrapper>
            </div>
            <div className="vertical-divider m-8" />
        </div>
    );
};

export default SectionI;
