import React, { useContext } from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";
import FormatSettingsContext from "../../../contexts/FormatSettingsContext";
import { SectionProps } from "./types";

const SectionC = ({ ...props }: SectionProps) => {
    const { settings, updateSetting } = useContext(FormatSettingsContext);
    const key = "font_size";

    // Handle the input for font size when given by typing
    const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateSetting(key, Number(e.target.value));
    };

    // Validate the changed font size to be always positive
    const validateFontSize = () => {
        updateSetting(key, Math.max(1, settings[key]));
    };

    // Increase the font size by 1
    const increaseFontSize = () => updateSetting(key, settings[key] + 1);

    // Decrease the font size by 1
    const decreaseFontSize = () =>
        updateSetting(
            key,
            settings[key] > 1 ? settings[key] - 1 : settings[key]
        );

    return (
        <div {...props}>
            <div className="vertical-divider m-8" />
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Decrease font size"
                    className="edit-tool mr-8"
                    buttonClass="edit-tool-button small-icon-button"
                    onClick={decreaseFontSize}
                >
                    <Generic icon="remove" />
                </OptionWrapper>
                <input
                    type="number"
                    className="font-size-input"
                    value={settings[key]}
                    onChange={handleFontSizeChange}
                    onBlur={validateFontSize}
                />
                <OptionWrapper
                    title="Increase font size"
                    className="edit-tool ml-8"
                    buttonClass="edit-tool-button small-icon-button"
                    onClick={increaseFontSize}
                >
                    <Generic icon="add" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionC;
