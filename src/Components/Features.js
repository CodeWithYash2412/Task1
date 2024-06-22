import FeatureBox from "./FeatureBox"

const Features = () => {
    return (
        <>
            <div className=" h-[147.81px] py-7 bg-[#F4F9FF] flex justify-center items-center ">
                <div className=" w-[1021px] h-[124px] flex justify-evenly items-center ">
                    <FeatureBox img="bookwith.png" title1="BOOK WITH" title2="ONLY 20%" />
                    <FeatureBox img="payment.png" title1="PAYMENT PLAN" title2="EASY 70/30" />
                    <FeatureBox img="handover.png" title1="HANDOVER ON" title2="Q2 2027" />
                    <FeatureBox img="area.png" title1="AREA STARTS FROM" title2="700 SQMT" />
                </div>
            </div>
        </>
    )
}

export default Features