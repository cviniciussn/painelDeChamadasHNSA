/* import { useState, useEffect } from 'react'

const useFetch = url => {
    const [state, setState] = useState([null, false]);

    useEffect(() => {
        setState([null, true]);

        (async () => {
            const response = await fetch(url)
                .then(res => res.json());

            setState([response, false]);
        })();
    }, [url]);

    return state;
};

export default useFetch; */