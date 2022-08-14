import React from "react";

const Card = ({ image, title }) => {
    return (
        <a href="#" className="w-[14rem] h-[21rem] flex items-center rounded-lg hover:scale-110 duration-100 hover:cursor-pointer">
            <img src={image} alt={title} className="rounded-md" />
        </a>
    )
}

export default Card;