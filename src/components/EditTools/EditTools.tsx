import React, {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import "./EditTools.css";
import SectionA from "./Sections/SectionA";
import SectionB from "./Sections/SectionB";
import SectionC from "./Sections/SectionC";
import SectionD from "./Sections/SectionD";
import SectionE from "./Sections/SectionE";
import SectionF from "./Sections/SectionF";
import FormatSettingsContext from "../../contexts/FormatSettingsContext";
import { FormatSettings } from "../../types/formatSettings";
import OptionWrapper from "../Options/OptionWrapper/OptionWrapper";
import Generic from "../Options/Generic";
import SectionH from "./Sections/SectionH";
import SectionI from "./Sections/SectionI";
import SectionG from "./Sections/SectionG";
import useDebouncedCallback from "../../hooks/useDebouncedCallback";

// Types
interface EditToolsProps {
    isOpen: boolean;
    toggleVisibility: () => void;
}

// All the tools related to editing the document
const EditTools = ({ isOpen, toggleVisibility }: EditToolsProps) => {
    const toolsContainerRef = useRef<HTMLDivElement>(null);
    const moreToolsRef = useRef<HTMLDivElement>(null);
    const { settings, updateSetting } = useContext(FormatSettingsContext);
    const [overflow, setOverflow] = useState(false);

    // Change the settings for a particular key
    const handleSettingChange = (key: keyof FormatSettings) => {
        updateSetting(key, !settings[key]);
    };

    // Resize handler
    const handleResize = useDebouncedCallback(() => {
        if (!toolsContainerRef.current) return;

        // Find the right point of the overflowing container
        const containerRight =
            toolsContainerRef.current.offsetLeft +
            toolsContainerRef.current.offsetWidth;

        // The number of sections it has (includes more tools)
        const nChildren = toolsContainerRef.current.children.length;

        let i = 0;
        let flag = false;
        let moreToolsWidth = moreToolsRef.current?.offsetWidth;

        // Find a section which overflows behind the container
        for (; i < nChildren; i++) {
            const child = toolsContainerRef.current.children[
                i
            ] as HTMLDivElement;
            child.style.display = "flex";
            const childRight =
                child.offsetLeft + child.offsetWidth + (moreToolsWidth ?? 0);
            if (childRight > containerRight) break;
        }

        // Do not display the next sections unless it it more tools
        for (; i < nChildren; i++) {
            const child = toolsContainerRef.current.children[
                i
            ] as HTMLDivElement;
            if (child.classList.contains("more-option")) continue;
            flag = true;
            child.style.display = "none";
        }

        // Set the overflow state of container
        setOverflow(flag);
    });

    // Handle window resize to display tools effectively
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="edit-tools-container">
            <div className="edit-tools-wrapper">
                <div
                    ref={toolsContainerRef}
                    className="edit-tools"
                    style={{ width: "100%", overflow: "hidden" }}
                >
                    <SectionA
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-a"
                        settings={settings}
                        handleSettingChange={handleSettingChange}
                    />
                    <SectionB
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-b"
                    />
                    <SectionC
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-c"
                    />
                    <SectionD
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-d"
                        settings={settings}
                        handleSettingChange={handleSettingChange}
                    />
                    <SectionE
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-e"
                    />
                    <SectionF
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-f"
                    />
                    <SectionG
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-g"
                    />
                    <SectionH
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-h"
                    />
                    {overflow && (
                        <div
                            ref={moreToolsRef}
                            className="edit-tools-section-wrapper more-option"
                        >
                            <div className="vertical-divider m-8" />
                            <div className="">
                                <OptionWrapper
                                    title={"More tools"}
                                    className="edit-tool"
                                    buttonClass="edit-tool-button"
                                >
                                    <Generic icon="more_vert" />
                                </OptionWrapper>
                            </div>
                        </div>
                    )}
                </div>

                <div className="edit-tools">
                    <SectionI
                        className="edit-tools-section-wrapper"
                        id="edit-tools-section-i"
                    />
                    <OptionWrapper
                        title={isOpen ? "Hide the menus" : "Show the menus"}
                        className="edit-tool"
                        buttonClass="edit-tool-button"
                        onClick={toggleVisibility}
                    >
                        <Generic
                            icon={isOpen ? "expand_less" : "expand_more"}
                        />
                    </OptionWrapper>
                </div>
            </div>
        </div>
    );
};

export default EditTools;
