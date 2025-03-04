import React from 'react'
import Container from './Common/Container'

function SignUp() {
    return (
        <div className='bg-[#020525] py-28 '
      >
            <Container >

                <div className='bg-[#171B33]   border-blue-600 border-[2px] text-white  py-4 rounded-xl p-4'  style={{
            backgroundImage: `url("https://www.bisecthosting.com/_ipx/q_100&s_2372x684/static/img/SignUpForm_bg.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>

                    <div className='sm:flex  '>
                        <div>
                            <div>
                                <h2 className='font-lakehurst font-semibold text-3xl p-4 '>WANT THE INSIDE SCOOP?</h2>
                                <p className='text-gray-600 font-sans opacity-0.05 sm:px-4'>Join our email list and be the first to know about the latest fun updates, hot new releases, and insider tips.</p>
                            </div>
                            <div className=' rounded-lg sm:px-4 py-4' >
                                <div className='flex gap-4 pb-2'>
                                    <input className='rounded-xl bg-[#171B33] border px-4 py-4 ' type='text' placeholder='First Name' />
                                    <input className='rounded-xl bg-[#171B33] border px-4 py-4  ' type="email" placeholder='Email' />
                            </div>
                            <button className=" px-[6rem] py-4  bg-blue-600 hover:bg-[#b307e3]  hover:text-white font-semibold rounded-xl   " type="button">SIGN UP
                            </button>   
                            </div>
                            


                        </div>
                        <div className=' relative'>
                            <div className="relative sm:absolute lg:right-[-300px] w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] sm:h-auto sm:right-2 sm:top-[-40px]">
                                <img
                                    src="./images/subscribe.png"
                                    className="w-[281px] h-[259px] object-contain"
                                    alt="Subscribe"
                                />
                            </div>


                        </div>
                    </div>

                </div>


            </Container>


        </div>
    )
}

export default SignUp
