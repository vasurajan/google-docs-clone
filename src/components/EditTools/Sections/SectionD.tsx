import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";
import { SectionProps } from "./types";

const SectionD = ({
    settings,
    handleSettingChange,
    ...props
}: SectionProps) => {
    return (
        <div {...props}>
            <div className="vertical-divider m-8" />
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Bold"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                    active={settings ? settings["bold"] : false}
                    onClick={() =>
                        handleSettingChange && handleSettingChange("bold")
                    }
                >
                    <Generic icon="format_bold" />
                </OptionWrapper>
                <OptionWrapper
                    title="Italics"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                    active={settings ? settings["italics"] : false}
                    onClick={() =>
                        handleSettingChange && handleSettingChange("italics")
                    }
                >
                    <Generic icon="format_italic" />
                </OptionWrapper>
                <OptionWrapper
                    title="Underline"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                    active={settings ? settings["underline"] : false}
                    onClick={() =>
                        handleSettingChange && handleSettingChange("underline")
                    }
                >
                    <Generic icon="format_underlined" />
                </OptionWrapper>
                <OptionWrapper
                    title="Text color"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_color_text" />
                </OptionWrapper>
                <OptionWrapper
                    title="Highlight color"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_ink_highlighter" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionD;
