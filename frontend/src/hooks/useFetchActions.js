import { useEffect, useState, useRef } from "react";

export const useFetchActions = (url,method,body) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data:null, loading:true, error:null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    },[]);
    useEffect(() => {
        setState({ data:null, loading:true, error:null });
        fetch( url, {
            method: method,
            body: JSON.stringify(body),
            headers: new Headers({ 'Content-type': 'application/json', 'Accept': 'application/json'})
            })
            .then( resp => resp.json() )
            .then( data => {
                if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            });
    }, [url]);

    return state;
};