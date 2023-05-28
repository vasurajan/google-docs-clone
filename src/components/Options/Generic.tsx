import React from "react";

interface GenericProps {
    icon: string;
    iconSize?: number;
}

const Generic = ({ icon, iconSize }: GenericProps) => {
    return (
        <span
            className="material-symbols-outlined icon"
            style={{ fontSize: iconSize }}
        >
            {icon}
        </span>
    );
};

export default Generic;
