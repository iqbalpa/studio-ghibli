import React from "react";

const Card = ({ image, title }) => {
    return (
        <a href="#" className="w-[14rem] h-[21rem] m-5 flex items-center rounded-lg hover:scale-110 duration-100 hover:cursor-pointer">
            <img src={image} alt={title} className="rounded-md" />
        </a>
    )
}

export default Card;