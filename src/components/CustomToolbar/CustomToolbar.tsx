import React from "react";
import DocumentTools from "./DocumentTools/DocumentTools";
import "./CustomToolbar.css";
import OptionWrapper from "../Options/OptionWrapper/OptionWrapper";
import Generic from "../Options/Generic";
import Profile from "../Options/Profile";
import Expand from "../Options/Expand";
import useMediaQuery from "../../hooks/useMediaQuery";

// Types
interface CustomToolbarProps {
    isOpen: boolean;
}

// Main Toolbar
const CustomToolbar = ({ isOpen }: CustomToolbarProps) => {
    const isSmall = useMediaQuery("sm");

    if (!isOpen) return null;

    return (
        <nav className="pt-8 pl-16 pr-16">
            <div style={{ display: "flex" }}>
                {/* Branding */}
                <img
                    src="/images/brand.png"
                    alt="Google Docs Brand"
                    className="brand"
                    style={{
                        alignSelf: "center",
                    }}
                />

                {/* Document Related Tools */}
                <DocumentTools className="document-tools-container mr-32" />

                {/* Share and other options */}
                <div style={{ display: "flex" }}>
                    <OptionWrapper
                        title={"Last edit was 1 minute ago"}
                        className="mr-8"
                    >
                        <Generic icon={"history"} />
                    </OptionWrapper>
                    <OptionWrapper
                        title={"Open Comment History"}
                        className="mr-8"
                    >
                        <Generic icon={"comment"} />
                    </OptionWrapper>
                    <OptionWrapper
                        title={
                            "Join a call here or present this tab to the call"
                        }
                        className="mr-8"
                        buttonClass="expand-icon-button"
                    >
                        <Expand icon={"videocam"} />
                    </OptionWrapper>
                    <OptionWrapper
                        title={"Private to only me"}
                        className="mr-8"
                        buttonClass={`share-icon-button ${!isSmall ? "share-button-big" : ""
                            }`}
                    >
                        {isSmall ? (
                            <Generic icon={"person_add"} iconSize={20} />
                        ) : (
                            <>
                                <Generic icon="lock" iconSize={18} />
                                <strong>Share</strong>
                            </>
                        )}
                    </OptionWrapper>
                    <OptionWrapper
                        title={"Profile"}
                        buttonClass="p-4"
                        className="ml-8"
                    >
                        <Profile
                            image="/images/vasurajan.jpeg"
                            name={"Vasu Rajan"}
                        />
                    </OptionWrapper>
                </div>
            </div>
        </nav>
    );
};

export default CustomToolbar;
