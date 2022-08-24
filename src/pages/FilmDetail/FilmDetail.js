import React, { useEffect, useState } from "react";
import API from "../../api/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

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
                <div className="flex flex-col justify-center items-center">
                    <img src={data.movie_banner} alt={data.title} className="w-[35rem] mt-10 mb-5 rounded-xl hover:scale-110 hover:cursor-pointer duration-200" />
                    
                    <div className="bg-red-400 mt-3 mb-10 w-[40rem] flex flex-col justify-center items-center rounded-lg">
                        <div className="px-3 pt-3 w-full flex flex-row justify-between hover:bg-red-700 hover:rounded-t-lg">
                            <p>Title : </p>
                            <p>{data.title}</p>
                        </div>   
                        <div className="px-3 w-full flex flex-row justify-between hover:bg-red-700">
                            <p>Original Title : </p>
                            <p>{data.original_title}</p> 
                        </div> 
                        <div className="px-3 w-full flex flex-row justify-between hover:bg-red-700">
                            <p>Original Title Romanised : </p>
                            <p>{data.original_title_romanised}</p> 
                        </div> 
                        <div className="px-3 w-full flex flex-row justify-between hover:bg-red-700">
                            <p>Director : </p>
                            <p>{data.director}</p>
                        </div>  
                        <div className="px-3 w-full flex flex-row justify-between hover:bg-red-700">
                            <p>Producer : </p>
                            <p>{data.producer}</p>  
                        </div>
                        <div className="px-3 w-full flex flex-row justify-between hover:bg-red-700">
                            <p>Release Date : </p>
                            <p>{data.release_date}</p>
                        </div>
                        <div className="px-3 w-full flex flex-row justify-between hover:bg-red-700">
                            <p>Running Time : </p>
                            <p>{data.running_time} Minutes</p>
                        </div>
                        <div className="px-3 w-full flex flex-row justify-between hover:bg-red-700">
                            <p>Rotten Tomatoes : </p>
                            <p>{data.rt_score}</p>
                        </div>
                        <div className="px-3 pb-5 w-full flex flex-col hover:bg-red-700 hover:rounded-b-lg">
                            <p>Description : </p>
                            <p className="text-justify indent-12">{data.description}</p>
                        </div>
                    </div> 
                </div>
            }
            <Link to="/">
                <div className="absolute top-5 left-5 bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-500">
                    <IoIosArrowBack />
                </div>
            </Link>
        </>
    )
}

export default FilmDetail;