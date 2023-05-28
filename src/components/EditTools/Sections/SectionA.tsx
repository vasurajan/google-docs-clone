import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";
import Expand from "../../Options/Expand";
import { SectionProps } from "./types";

const SectionA = ({
    settings,
    handleSettingChange,
    ...props
}: SectionProps) => {
    return (
        <div {...props}>
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Undo"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="undo" iconSize={18} />
                </OptionWrapper>
                <OptionWrapper
                    title="Redo"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="redo" iconSize={18} />
                </OptionWrapper>
                <OptionWrapper
                    title="Print"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="print" iconSize={18} />
                </OptionWrapper>
                <OptionWrapper
                    title="Spelling and grammar check"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                    active={
                        settings
                            ? settings["spelling_and_grammar_check"]
                            : false
                    }
                    onClick={() =>
                        handleSettingChange &&
                        handleSettingChange("spelling_and_grammar_check")
                    }
                >
                    <Generic icon="spellcheck" iconSize={18} />
                </OptionWrapper>
                <OptionWrapper
                    title="Paint format"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                    active={settings ? settings["paint_format"] : false}
                    onClick={() =>
                        handleSettingChange &&
                        handleSettingChange("paint_format")
                    }
                >
                    <Generic icon="imagesearch_roller" iconSize={18} />
                </OptionWrapper>
                <OptionWrapper
                    title="Zoom"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Expand text="100%" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionA;
