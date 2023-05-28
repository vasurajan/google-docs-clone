import { useEffect, useState } from "react";

/**
 *
 * @param breakpoint
 * Determine if the viewport width is less than the specified breakpoint
 */
const useMediaQuery = (breakpoint: "xs" | "sm" | "md" | "lg") => {
    const [width, setWidth] = useState<number | null>(null);

    // Default breakpoints
    const breakpoints = {
        xs: 400,
        sm: 600,
        md: 900,
        lg: 1200,
    };

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width && width < breakpoints[breakpoint];
};

export default useMediaQuery;
