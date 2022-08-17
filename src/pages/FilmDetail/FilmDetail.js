import React, { useEffect, useState } from "react";
import API from "../../api/api";
import { useParams } from "react-router";

const FilmDetail = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const film = await API.fetchFilm(id);
                setData(film);
            } catch (error) {
                console.log("error");
            }
        }

        fetchFilm();
    }, [data]);

    return (
        <>
            { data && 
                <div>
                    <img src={data.movie_banner} alt={data.title} />
                    <p>{data.title}</p>   
                    <p>{data.original_title}</p>  
                    <p>{data.original_title_romanised}</p>  
                    <p>{data.director}</p>  
                    <p>{data.producer}</p>  
                    <p>{data.release_date}</p>  
                    <p>{data.running_time}</p>
                    <p>{data.rt_score}</p>
                    <p>{data.description}</p>  
                </div>
            }
        </>
    )
}

export default FilmDetail;