import React, { useState, useEffect } from "react";
import API from "../../api/api";

const Main = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchAllFilms = async () => {
            try {
                setLoading(true);
                const films = await API.fetchAllFilms();
                setData(films);
                console.log(data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }

        fetchAllFilms();
    }, []);

    return (
        <div>
            { error 
                ? <div>Something went wrong...</div>  
                : <p>not error</p>
            }
            { data  
                ? <p>{data[0].title}</p>
                : <p>failed to fetch the data</p>
            }
        </div>
    )
}

export default Main;