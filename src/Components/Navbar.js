'use client'

import { useEffect, useState } from "react"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    }, []);



    return (
        <nav className={`flex justify-between items-center z-50 fixed w-full p-5 px-40 ${navbar ? 'bg-[#00357B]' : 'bg-transparent'}`} >
            <img src="/images/Logo.png" className=" h-[20.86px] w-[165.84px] " alt="" />

            <button className={`text-[#17ABFF] w-[184px] h-[48[x] border-[#17ABFF] border-[2px] border-r-2 p-2 bg-transparent hover:font-extrabold ${navbar ? 'border-white text-white' : 'border-[#17ABFF] text-[#17ABFF] '}`} >ENQUIRE NOW</button>
        </nav>




    )
}

export default Navbar