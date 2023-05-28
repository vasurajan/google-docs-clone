import { PropsWithChildren } from "react";

// Types
interface OptionProps extends PropsWithChildren {
    title: string;
    background?: string; // color
    className?: string;
    buttonClass?: string;
    disabled?: boolean;
    active?: boolean;
    onClick?: () => void;
}

// Wrapper
const OptionWrapper = ({
    title,
    buttonClass,
    className,
    children,
    disabled,
    active,
    onClick,
}: OptionProps) => {
    return (
        <div className={`option-wrapper ${className} tooltip-parent`}>
            <button
                onClick={onClick}
                className={`icon-button ${buttonClass} ${
                    active ? "active-button" : ""
                }`}
                disabled={disabled}
            >
                {children}
            </button>
            <span className="tooltip-wrapper">
                <span className="tooltip">{title}</span>
            </span>
        </div>
    );
};

export default OptionWrapper;
