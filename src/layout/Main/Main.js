import React, { useState, useEffect } from "react";
import API from "../../api/api";
import Card from "../../components/Card/Card";

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
        <div className="my-6 flex justify-center flex-wrap">
            {data && 
                data.map(film => (
                    <Card key={film.id} {...film} />
                ))
            }
        </div>
    )
}

export default Main;