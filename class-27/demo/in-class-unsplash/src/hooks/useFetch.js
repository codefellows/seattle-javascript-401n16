import { useState, useEffect } from 'react';

function useFetch(initRequest) {
    // INPUTS (can change at any time)
    // { method
    //  url
    //  (optional) body
    //  (optional) headers
    // }

    const [url, setUrl] = useState('');
    const [request, setRequest] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    useEffect(() => {
        async function customFetch() {
            await setIsLoading(true);
            await setError(null);
            await setResponse(null);
            let res = await fetch(url, {
                method: request.method || 'GET',
                body: request.body || null,
                headers: { ...request.headers, Accept: 'application/json' },
            });

            await setIsLoading(false);

            if (res.status >= 300) {
                await setError(res);
                return;
            }

            await setResponse(await res.json());
        }

        if (request) customFetch();
    }, [request, url]);

    // external components will need:
    // -- some way to SET the request
    // -- some way to GET if request is loading
    // -- some way to GET response
    // -- some way to GET errors

    return {
        setUrl,
        setRequest,
        isLoading,
        error,
        response,
    };
}

export default useFetch;
