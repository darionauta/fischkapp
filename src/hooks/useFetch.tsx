import { useState, useMemo } from 'react';
import { URL } from '../data/config';
import { FetchProps } from './types';
import { SaveCardProps } from '../layouts/Card/types';

const headers = {
    'Content-Type': 'application/json'
}

function getHeaders(method: string){
    if(method.toUpperCase() === 'GET' ) return headers;
    return {
        ...headers,
        'Authorization': import.meta.env.VITE_API_KEY
    }
}

function getUrl(url: string, id?: string){
    return id ? `${url}/${id}` : url;
}

function getParams(method: string, body?:SaveCardProps){
    const headers = getHeaders(method);
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
        return result;
    }, []);

    const saveCard = useMemo(() => async (body: SaveCardProps) => {
        const result = await fetchApi({ method: 'POST', body: body});
        if(result?.error) { setError('Save card error'); return {};}
        return result;
    }, []);

    const deleteCard = useMemo(() => async (id: string) => {
        const result = await fetchApi({ method: 'DELETE', id});
        if(result?.error) { setError('Delete card error'); return {};}
        return result;
    }, []);

    return { error, loading, getAll, saveCard, deleteCard };
};