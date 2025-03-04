import React from 'react';
import Container from './Common/Container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaCheck } from "react-icons/fa";

function Main(props) {
    return (
        <div className=' bg-[#020525] relative  py-28' >
            <Container>
                <div className='sm:flex'>
                    <div className=' sm:w-[48%] py-4 font-bold pt-8  '>
                        <h1 className=' heading text-white  text-4xl p-2 tracking-widest  font-serif'>MINECRAFT SERVER</h1>
                        <h2 className='text-white  text-4xl p-2 tracking-widest font-serif'>HOSTING</h2>
                        <h3 className='text-white  text-3xl p-2 font-serif '>AND 60+ TOP ONLINE GAMES</h3>
                        <ul className='text-[#A9ABC7]  ml-2 text-[18px] py-8 opacity-0.05 font-bold '>
                            <li className='flex font-thin leading-2 '  >
                                <svg viewBox="0 0 512 512  " className=" size-4    relative top-1.5 " > <path className='fill-sky-400' d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56zM371.8 211.8c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L224 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.9 10.9-10.9 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z"></path></svg>

                                <p className='ml-2 font-semibold'>Server hosting for<a href='#' className='text-white hover:text-[#b307e3] '> 60+ games</a></p></li>
                            <li className='flex font-thin leading-2'  >    <svg viewBox="0 0 512 512  " className=" size-4    relative top-1.5 " > <path className='fill-sky-400' d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56zM371.8 211.8c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L224 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.9 10.9-10.9 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z"></path></svg>
                                <p className='ml-2'>Pre-install <a href='#' className='text-white hover:text-[#b307e3]'> 2,000+ Minecraft modpacks automatically</a></p></li>

                            <li className='flex font-thin'  >   <svg viewBox="0 0 512 512  " className=" size-4    relative top-1.5 " > <path className='fill-sky-400' d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56zM371.8 211.8c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L224 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.9 10.9-10.9 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z">
                            </path>
                            </svg>

                                <p className='ml-2'>24/7/365 support troubleshooting your server and mods</p> </li>


                            <li className='flex font-thin'  >   <svg viewBox="0 0 512 512  " className=" size-4    relative top-1.5 " > <path className='fill-sky-400' d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56zM371.8 211.8c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L224 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.9 10.9-10.9 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z">
                            </path>
                            </svg>
                                <p className='ml-2'>Full file access</p>
                            </li>
                            <li className='flex font-thin'  >   <svg viewBox="0 0 512 512  " className=" size-4    relative top-1.5 " > <path className='fill-sky-400' d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56zM371.8 211.8c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L224 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.9 10.9-10.9 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z">
                            </path></svg>
                                <p className='ml-2'>20 Locations across the globe</p></li>


                            <li className='flex font-thin'  >    <svg viewBox="0 0 512 512  " className=" size-4    relative top-1.5 " > <path className='fill-sky-400' d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56zM371.8 211.8c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L224 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.9 10.9-10.9 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z">

                            </path>
                            </svg>
                                <p className='ml-2'>Advanced DDOS protection</p>
                            </li>


                        </ul>
                        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className=" text-white m-2  bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center    hover:bg-[#b307e3] dark:focus:ring-blue-800" type="button">CREATE SERVERS
                        </button>
                        <div className="hidden sm:block mt-20 -ml-1.5 cursor-pointer xl:mt-18 lg:mt-11">
                            <svg viewBox="0 0 38 38" xmlns="&quot;http://www.w3.org/2000/svg&quot;" class="animate-pulse" width="38px" height="38px"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.206 25.438a1.333 1.333 0 0 1 0 1.884l-9.42 9.42a1.332 1.332 0 0 1-1.885 0l-9.42-9.42a1.332 1.332 0 0 1 1.884-1.884l8.478 8.478 8.478-8.478a1.333 1.333 0 0 1 1.884 0Z" fill="#565981"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.843.554a1.332 1.332 0 0 1 1.334 1.333V35.8a1.334 1.334 0 0 1-2.668 0V1.887A1.332 1.332 0 0 1 18.843.554Z" fill="#565981"></path>
                            </svg>
                        </div>

                    </div>
                    <div className='sm:w-[48%] pt-10 mx-4 '  >
                        <img className='rounded-[45px] pt-9' src='./images/mine1.jpg' />

                    </div>
                </div>
            </Container>

        </div>
    );
}

export default Main;