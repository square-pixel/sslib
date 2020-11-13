import {useEffect, useState} from 'react';

/**
 * Count starting from zero every number of milliseconds
 * @param ms
 */
export function useCounter(ms:number) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const id = setInterval(
            () => setValue(prev => prev + 1), ms
        );
        return () => clearInterval(id);
    }, [ms]);
    return value;
}
