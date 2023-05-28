import { PropsWithChildren, createContext, useState } from "react";
import { FormatSettings } from "../types/formatSettings";

// The default settings for format
const baseSettings = {
    spelling_and_grammar_check: false,
    paint_format: false,
    bold: false,
    italics: true,
    underline: false,
    font_size: 13,
    font: "Arial",
    line_height: 3,
    vertical_margin: 20,
    horizontal_margin: 20,
} as FormatSettings;

// Format Settings Context
const FormatSettingsContext = createContext({
    settings: baseSettings,
    updateSetting: (key: string, value: any) => {},
});

// Format Settings Provider
export const FormatSettingsProvider = ({ children }: PropsWithChildren) => {
    const [settings, setSettings] = useState(baseSettings);

    // Update a setting key with a value
    const updateSetting = (key: string, value: any) =>
        setSettings((prev) => ({ ...prev, [key]: value }));

    return (
        <FormatSettingsContext.Provider value={{ settings, updateSetting }}>
            {children}
        </FormatSettingsContext.Provider>
    );
};

export default FormatSettingsContext;
