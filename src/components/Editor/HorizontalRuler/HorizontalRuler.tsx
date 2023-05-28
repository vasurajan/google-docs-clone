import React from "react";
import "./HorizontalRuler.css";

interface HorizontalRulerProps {
    width: number;
    spread: number;
}

// Spread the inches over horizontal ruler
const HorizontalSpread = ({ width, spread }: HorizontalRulerProps) => {
    const inchDivisions = 8;
    const unit = width / (inchDivisions * spread);
    const nLines = Math.floor(width / unit);

    return (
        <div
            className="flex"
            style={{
                position: "relative",
                paddingTop: 5,
                alignItems: "flex-end",
            }}
        >
            {Array.from(Array(nLines)).map((_, idx) => (
                <div key={idx} className="flex">
                    {(idx + 1) % 8 === 0 && (
                        <span
                            style={{
                                position: "absolute",
                                left: (idx + 1) * unit - 3,
                                fontSize: 12,
                                top: -2,
                            }}
                        >
                            {(idx + 1) / 8}
                        </span>
                    )}
                    <div
                        style={{
                            marginLeft: Math.floor(unit),
                            height:
                                (idx + 1) % 4 === 0 && (idx + 1) % 8 !== 0
                                    ? 10
                                    : 5,
                            width: 1,
                            background: "black",
                        }}
                    ></div>
                </div>
            ))}
        </div>
    );
};

// Horizontal Ruler Main Component
const HorizontalRuler = ({ width, spread }: HorizontalRulerProps) => {
    return (
        <div className="horizontal-ruler-container">
            <div
                className="horizontal-ruler"
                style={{
                    width,
                }}
            >
                <HorizontalSpread width={width} spread={spread} />
            </div>
        </div>
    );
};

export default HorizontalRuler;
