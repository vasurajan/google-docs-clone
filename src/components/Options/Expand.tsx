import React from "react";

interface ExpandProps {
    icon?: string;
    text?: string;
}

const Expand = ({ icon, text }: ExpandProps) => {
    return (
        <>
            {icon ? (
                <span className="material-symbols-outlined icon">{icon}</span>
            ) : (
                <span className="text">{text}</span>
            )}
            <span className="material-symbols-outlined icon">
                arrow_drop_down
            </span>
        </>
    );
};

export default Expand;
