import React, { useState } from "react";
import "./App.css";
import "./Helper.css";
import CustomToolbar from "./components/CustomToolbar/CustomToolbar";
import EditTools from "./components/EditTools/EditTools";
import Editor from "./components/Editor/Editor";
import Drawer from "./components/Drawer/Drawer";
import { FormatSettingsProvider } from "./contexts/FormatSettingsContext";
import { ComponentVisibility } from "./types/componentVisibility";

function App() {
    const [isComponentVisible, setIsComponentVisible] =
        useState<ComponentVisibility>({
            mainToolbar: true,
            sidebar: true,
        });

    // Toggle the visibility of a component by key
    const toggleComponentVisibility = (key: keyof ComponentVisibility) => {
        setIsComponentVisible((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // Toggle the visibility of both components together
    const toggleVisibilityTogether = () => {
        const newValue = !isComponentVisible["mainToolbar"];
        setIsComponentVisible({
            mainToolbar: newValue,
            sidebar: newValue,
        });
    };

    return (
        <div className="container">
            <CustomToolbar isOpen={isComponentVisible["mainToolbar"]} />
            <div className="inner-container">
                <FormatSettingsProvider>
                    <div className="edit-tools-and-editor">
                        <EditTools
                            isOpen={isComponentVisible["mainToolbar"]}
                            toggleVisibility={toggleVisibilityTogether}
                        />
                        <Editor />
                    </div>
                </FormatSettingsProvider>
                <Drawer
                    isOpen={isComponentVisible["sidebar"]}
                    toggleVisibility={() =>
                        toggleComponentVisibility("sidebar")
                    }
                />
            </div>
        </div>
    );
}

export default App;
