import React, { useState } from "react";

const Header = () => {
    const [value, setValue] = useState("");

    const handleChange = e => { setValue(e.target.value) };

    return (
        <div className="bg-gray-800 text-white h-20 flex flex-row justify-between items-center">
            {/* <p className="ml-4 text-xl font-bold">STUDIO GHIBLI</p> */}
            <img src="/topImage.png" alt="studio ghibli" className="ml-5 w-40" />
            <input value={value} onChange={handleChange} type="text" className="h-8 w-96 rounded-2xl p-2 text-black" />
            <a href="https://github.com/iqbalpa" target="_blank" className="mr-4 text-lg font-semibold hover:text-gray-300 duration-75">IQBAL</a>
        </div>
    )
}

export default Header;