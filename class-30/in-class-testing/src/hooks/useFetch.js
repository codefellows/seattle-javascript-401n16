import { useState, useEffect } from 'react';

function useFetch(initRequest) {
    const [request, setRequest] = useState(initRequest);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    useEffect(() => {
        async function customFetch() {
            await setIsLoading(true);
            await setError(null);

            let res = await fetch(request.url, {
                method: request.method || 'GET',
                body: JSON.stringify(request.body) || null,
                headers: {
                    ...request.headers,
                    'content-type': 'application/json',
                    Accept: 'application/json',
                },
            });

            await setIsLoading(false);

            if (res.status >= 300) {
                await setError(res);
                return;
            }

            await setResponse(await res.json());
        }

        if (request) customFetch();
    }, [request]);

    return {
        setRequest,
        request,
        isLoading,
        error,
        response,
    };
}

export default useFetch;
