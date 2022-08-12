import React, { useState, useEffect } from "react";
import API from "../../api/api";

const Main = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                setLoading(true);
                setError(false);
                const films = await API.fetchAllFilms();
                setData(films);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }
    });
    console.log(data);

    return (
        <div>
            { error 
                ? <div>Something went wrong...</div>  
                : <p>not error</p>
            }
            { data  
                ? <p>{data}</p>
                : <p>failed to fetch the data</p>
            }
        </div>
    )
}

export default Main;