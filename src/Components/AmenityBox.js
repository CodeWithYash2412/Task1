
const AmenityBox = ({ img, title }) => {
    return (
        <div className=" w-[227px] h-[271px] rounded-[20px] p-5 flex justify-center items-center flex-col shadow-[9px_10px_32px_-3px_rgba(0,0,0,0.1)] ">
            <img src={`/images/${img}`} className=" border-[5px] border-gray-300 rounded-full " alt="" />
            <div className=" w-full h-full flex justify-center items-center ">
                <p className=" font-['Poppins', sans-serif] font-[600] text-[14px] leading-[20px] text-center text-[#00357B] "> {title} </p>
            </div>
        </div>
    )
}

export default AmenityBox