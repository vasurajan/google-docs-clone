import { useEffect, useRef } from "react";

const DEFAULT_TIMEOUT = 300;

/**
 * Debounces a callback for a timeout
 * @param callback The callback that will be called after timeout
 * @param timeout The timeout after which the callback is invoked
 */
const useDebouncedCallback = (
    callback: (...args: any[]) => void,
    timeout: number = DEFAULT_TIMEOUT
) => {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            timer.current && clearTimeout(timer.current);
        };
    }, []);

    return (...args: any[]) => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => callback(...args), timeout);
    };
};

export default useDebouncedCallback;
