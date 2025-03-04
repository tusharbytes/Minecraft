import React from 'react'
import Container from './Common/Container'

function SignUp() {
    return (
        <div className='bg-[#020525] py-28 '
      >
            <Container >

                <div className='bg-[#171B33]  border-blue-600 border-[2px] text-white  py-4 rounded-md'  style={{
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
                            <div className='flex gap-4 rounded-lg sm:px-4 py-4' >
                                <div className=''>
                                    <input className='rounded-lg bg-[#171B33] ' type='text' placeholder='name' />

                                </div>
                                <div>
                                    <input className='rounded-lg bg-[#171B33] ' type="email" placeholder='email' />
                                </div>
                            </div>
                            <button className="m-2  bg-blue-600 hover:bg-[#b307e3]  hover:text-white font-semibold rounded-lg text-sm px-5 py-2.5  " type="button">SIGN UP
                            </button>


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
