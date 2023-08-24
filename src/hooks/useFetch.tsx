import { useState, useMemo } from 'react';
import { URL } from '../data/config';
import { FetchProps } from './types';
import { CardType } from '../layouts/Card/types';

const headers = {
    'Content-Type': 'application/json'
}

function getUrl(url: string, id?: string){
    return id ? `${url}/${id}` : url;
}

function getParams(method: string, body?:CardType){
    return {
        headers,
        method,
        body: body ? JSON.stringify(body) : undefined
    };
}

async function fetchApi({method, body, id}: FetchProps) {
    try {
        const response = await fetch(getUrl(URL, id), getParams(method, body));
        if(!response.ok ) return { error: 'Fetch error'}
        const result = await response.json();
        return result;
    } catch(error) {
        return { error };
    } 
}

export default function(){
    const [ error, setError ] = useState<string | null>(null);
    const [ loading, setLoading ] = useState(false);

    const getAll = useMemo(() => async () => {
        setLoading(true);
        const result = await fetchApi({ method: 'GET'});
        if(result?.error) { setError('Fetch error'); return [];}
        setLoading(false);
        console.log(result);
        return result;
    }, []);

    return { error, loading, getAll };
};