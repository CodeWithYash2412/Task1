import React from 'react'

const FeatureBox = ({ img, title1, title2 }) => {
    return (

        <div className="flex justify-center items-center flex-col">
            {/* <img src="images/bookwith.png" className=" w-[50px] h-[48px] " alt="" /> */}
            <img src={`images/${img}`} className=" w-[50px] h-[48px] " alt="" />
            <p className=" font-['Poppins', sans-serif] font-[300] text-[13px] mt-2 "> {title1} </p>
            <p className=" oswald500 text-[30px] leading-[30px] text-[#00357B] "> {title2} </p>
            <hr className=" w-[73px] h-[5px] bg-blue-300 mt-2 " />
        </div>
    )
}

export default FeatureBox