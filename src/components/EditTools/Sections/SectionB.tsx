import React, { useContext } from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Expand from "../../Options/Expand";
import FormatSettingsContext from "../../../contexts/FormatSettingsContext";
import { SectionProps } from "./types";

const SectionB = ({ ...props }: SectionProps) => {
    const { settings } = useContext(FormatSettingsContext);

    return (
        <div {...props}>
            <div className="vertical-divider m-8" />
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Styles"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Expand text="Normal text" />
                </OptionWrapper>

                <OptionWrapper
                    title="Font"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Expand text={settings["font"]} />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionB;
