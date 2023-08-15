import { useState, useEffect } from 'react';

export type LocalStorageProps = {
    key: string,
    initialState: {}
}

export default function({ key, initialState}: LocalStorageProps) {
    const storageValue = localStorage.getItem(key)
    const [ value, setValue ] = useState(storageValue ? JSON.parse(storageValue) : initialState);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [ value, setValue ]);

    return [ value, setValue ] as const;
}