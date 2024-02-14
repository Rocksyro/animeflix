import { useState, useEffect } from 'react';

//Pasamos por parámetro la url para poder hacer fetch a distintos endpoints
export function useFetch(url) {
    const [data, setData] = useState(null);

//Agregar un estado que controle si la petición se está realizando o finalizó
    const [loading, setLoading] = useState(true);

//Un estado para dar feedback si ocurre un error
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
        fetch(url, {signal : abortController.signal})
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error)=> setError(error))
            .finally(()=> setLoading(false));

        return () => abortController.abort();
    }, []);
    return {data, loading, error};
}