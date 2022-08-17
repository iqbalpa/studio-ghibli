import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, title }) => {
    return (
        <Link to={`/film/${id}`} >
            <div className="w-[14rem] h-[21rem] m-5 flex items-center rounded-lg hover:scale-110 duration-100 hover:cursor-pointer">
                <img src={image} alt={title} className="rounded-md" />
            </div>
        </Link>
    )
}

export default Card;