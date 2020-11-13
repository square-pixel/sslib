/**
 * Returns a new function that will call the provided function after
 * the specified delay in milliseconds. The delay is restarted if the
 * returned function is called again before the time elapses. A max
 * parameter may be specified to enforce that the provided function is
 * called within a maximal threshold.
 * 
 * @param func 
 * @param ms 
 * @param max 
 * @returns {(...args:any) => void}
 */
export function debounce(func: Function, ms: number, max: number = 0) {
    let timerId: any = null,
        maxTimerId: any = null;

    const reset = () => {
        clearTimeout(maxTimerId);
        clearTimeout(timerId);
        maxTimerId = null;
        timerId = null;
    };

    return (...args: any) => {
        const fulfill = () => {
            reset();
            func.apply(null, args);
        };
        if (max && !maxTimerId) {
            maxTimerId = setTimeout(fulfill, max);
        }
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(fulfill, ms);
    }
}
