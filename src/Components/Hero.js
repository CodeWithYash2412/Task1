const Hero = () => {
    return (
        <div className=" bg-[url('/images/HeroImage.png')] w-full h-[658px] flex md:flex-row flex-col justify-between items-center md:px-40 ">
            <div className=" w-[498px] ">
                <h1 className=" md:text-[47px] text-[37px] leading-[62.4px] text-white fontTypeHeroH1 uppercase ">Harbour Lights <br />
                    de <span className="text-[#17ABFF] "> GRESOGONO </span></h1>
                <p className=" mt-5 font-['Poppins', sans-serif] font-[700] leading-[33px] text-[25px] text-white ">1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</p>
            </div>
            <div>
                <div className=" relative w-[306px] h-[321.5px] backdrop-blur-sm py-7 ">
                    <p className=" tracking-[1.5px] mx-7 text-[#FCFCFC] font-['Poppins', sans-serif] font-[400] uppercase text-[13px] leading-[19.5px] ">prizing starts from</p>
                    <p className=" fontTypeHeroH1 mx-7 text-[48px] text-white leading-[62.4px] font-[500] "> $ 425,000 </p>
                    <p className=" oswald400 mx-7 text-[24px] leading-[35.57px] text-white "> AED 1.3 MILLION </p>
                    <button className=" mx-7 font-['Poppins', sans-serif] font-[700] text-[13px] leading-[19.5px] my-5 w-[248px] h-[48px] py-[15px] px-[40px] bg-[#17ABFF] rounded-[5px] text-white ">GET PRESENTATION</button>
                    <div className=" absolute bottom-0 left-0 heroRightQuote w-[306px] h-[61px] flex justify-center items-center ">
                        <p className=" text-center text-[#98C5E8] text-[13px] leading-[17px] font-['Poppins', sans-serif] font-[300] ">Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero