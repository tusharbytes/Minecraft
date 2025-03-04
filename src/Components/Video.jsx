import React, { useState } from 'react'
import Container from './Common/Container'
import { IoMdClose } from "react-icons/io";

function Video() {

    const [view, setView] = useState(false)

    const handleChange = () => {
        setView(true)
    }
    const handlepopupClose = () => {
        setView(false)
    }


    return (
        <>
            <div className='bg-[#020525] relative py-10'>
                <Container>
                    <div className='bg-[#020525] text-white sm:flex justify-center gap-6'>
                        <div onClick={handleChange} >
                            <img className="border-blue-600 border-[2px]  rounded-lg"   src="https://www.bisecthosting.com/static/img/common/BH_WebVids_Homepage.png" />
                        </div>
                        <div><h2 className='font-lakehurst font-semibold text-3xl p-4'>WELCOME TO BISECTHOSTING</h2>
                            <p className='text-gray-600 font-sans opacity-0.05'>Here at BisectHosting we offer premier game server hosting services with international locations to keep latency low, a custom-built control panel to help give you full control over your server, and a customer support department that’s available 24/7 to help you through it all. Not to mention free DDOS protection and thousands of modpacks available with just one click!</p>

                        </div>
                    </div>
                </Container>

                {/* popup */}
                {view ?
                    <div className='fixed flex items-center justify-center left-0 right-0 h-full  top-0 bottom-0 p-12'>

                        <div className='p-3 relative rounded-xl '>
                        <button onClick={handlepopupClose} className='absolute right-4 text-[#1A53BC] bg-black rounded-xl  text-4xl '><IoMdClose /></button>

                        <iframe className='gap-2 rounded-2xl ' width="900px" height="520px" src="https://www.youtube.com/embed/NoOtdmKBlQM?si=utZUv0FzHPaKq47z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                        </div>

                    </div>
                    : ""}
            </div>

        </>
    )
}

export default Video
