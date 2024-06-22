import AmenityBox from './AmenityBox'
import Carousel from './Carousel'

const Amenities = () => {
    return (
        <>
            <div className='py-10 flex justify-center items-center flex-col'>
                <h2 className='font-["Montserrat Alternates", sans-serif] font-[500] text-center uppercase text-[48px] text-[#00357B] '>Harbour <br />Lights</h2>
                <p className=' text-[13px] text-center '> de Grisogono </p>
            </div>
            <div className=' px-96 '>
                <h2 className=' oswald500 text-[36px] leading-[47px] text-center text-[#00357B] '>Features & Amenities</h2>
                <p className=' mt-3 text-[#343434] font-["poppins", sans-serif] font-[400] text-[16px] leading-[24px] text-center '>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
            </div>
            <div className=' h-[256px] flex justify-between items-center px-40 mt-7 '>
                <AmenityBox img="pools.png" title="Floating Pools" />
                <AmenityBox img="spacious.png" title="Spacious Cabins Like Rooms" />
                <AmenityBox img="seafacing.png" title="Sea Facing Swimming Pools" />
                <AmenityBox img="gymnasium.png" title="Gymnasium & FItness" />
            </div>
            <div className=' flex justify-center items-end flex-col px-40 mt-5 '>
                <p className=" font-['Poppins', sans-serif] font-[300] text-[10px] leading-[47px] text-right ">*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
                <div className=' flex '>
                    <button className=' w-[153px] h-[48px] bg-[#00357B] rounded-[5px] font-["Poppins", sans-serif] font-[700] text-[13px] leading-[19px] tracking-[0.7px] text-[#FCFCFC] '>EXTERIORS</button>
                    <button className=' w-[153px] h-[48px] border-[3px]  border-[#00357B] rounded-[5px] font-["Poppins", sans-serif] font-[700] text-[13px] leading-[19px] tracking-[0.7px] text-[#00357B] ml-3 '>INTERIORS</button>
                </div>
                <div className='w-full'>
                    <Carousel />
                </div>
            </div>
        </>
    )
}

export default Amenities