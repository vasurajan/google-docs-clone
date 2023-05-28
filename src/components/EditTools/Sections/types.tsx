import { HTMLProps } from "react";
import { FormatSettings } from "../../../types/formatSettings";

export interface SectionProps extends HTMLProps<HTMLDivElement> {
    settings?: FormatSettings;
    handleSettingChange?: (key: keyof FormatSettings) => void;
}
