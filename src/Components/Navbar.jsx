import React, { useState } from 'react';
import { FaBars, FaCaretDown, FaSortDown, FaTimes } from "react-icons/fa";
import Container from './Common/Container';
import { MdOutlineDesktopWindows } from "react-icons/md";
import { GiConsoleController } from 'react-icons/gi';
import { BiMessageAltError } from 'react-icons/bi';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { SlCreditCard } from 'react-icons/sl';


const games = [

  "7 DAYS TO DIE",
  "ABIOTIC FACTOR",
  "AMERICAN TRUCK SIMULATOR",
  "ALOFT",
  "ARK SURVIVAL EVOLVED",
  "ARMA3",
  "ARMA REFORGER",
  "ASKA"
]
const support = [
  "Knowledgebase",
  "Get 24/7 Support",
  "Sales",
  "FAQ"
]
const panels = [
  "GAMES CONTROL PANEL",
  "WEB HOSTING PANEL",
  "VPS HOSTING PANEL",
  "DISCORD BOT",
  "MUMBLE CONTROL PANEL"
]

function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (


    <Container className=''>
      <nav className=" fixed md:w-[818px] lg:w-full w-max z-10 top-0 left-0 font-montserrat text-[12px] bg-[#020525] shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4 text-white">

          <div className="flex items-center gap-2">
            <img className=" h-12 rounded-lg" src="/images/logo1.jpg" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center lg:gap-10 font-semibold">
            {/* Dropdown Example */}
            <div className="relative group">
              <p className="cursor-pointer flex hover:text-[#03DDFF]">
                MINECRAFT <span className='text-[#03DDFF]'><FaSortDown /> </span>

              </p>
              <div className="absolute   p-4 left-0 mt-2 border px-4 text-white bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible   max-h-60 overflow-y-auto">
                <a href="#" className="  hover:text-[#B307E3] px-4 py-2 flex items-center gap-2 "> <MdOutlineDesktopWindows />JAVA</a>
                <a href="#" className="  hover:text-[#B307E3] px-4 py-2 flex items-center gap-2 "><GiConsoleController />BEDROCK </a>
              </div>
            </div>


            <div className="relative group   ">
              <button className="hover:bg-[#171B33] flex text-white px-4 py-2 rounded-md w-full text-left">
                GAME SERVERS <span className='text-[#03DDFF]'><FaSortDown /> </span>
              </button>
              <ul className="absolute w-[250px] p-4 left-0 mt-2 border px-4 text-white bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible   max-h-60 overflow-y-auto">
                {games.map((game, index) => (
                  <li key={index} className="block px-4 py-2 hover:text-[#B307E3] text-sm cursor-pointer">
                    {game}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <p className=" cursor-pointer flex  hover:text-[#03DDFF] ">
                DEDICATED <span className='text-[#03DDFF]'><FaSortDown /> </span>
              </p>
              <div className="absolute w-[250px] p-4 left-0 mt-2 border px-4 text-white bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible   max-h-60 overflow-y-auto">
                <a href="#" className="block px-4 py-2 hover:text-[#B307E3]">DEDICATED SERVERS</a>
                <a href="#" className="block px-4 py-2 hover:text-[#B307E3]">VPS SERVERS</a>
              </div>
            </div>

            <div className="relative group">
              <p className=" cursor-pointer flex hover:text-[#03DDFF] ">
                OTHER SERVERS <span className='text-[#03DDFF]'><FaSortDown /> </span>
              </p>
              <div className="absolute w-[250px] p-4 left-0 mt-2 border px-4 text-white bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible   max-h-60 overflow-y-auto">
                <a href="#" className="block  hover:text-[#B307E3] px-4 py-2 ">MUMBLE HOSTING</a>
                <a href="#" className="block hover:text-[#B307E3] px-4 py-2 ">WEB HOSTING</a>
                <a href="#" className="block hover:text-[#B307E3] px-4 py-2 ">DISCORD BOT</a>
              </div>
            </div>

            {/* support */}
            <div className='flex sm:'>

              <div className="relative group   ">
                <button className="hover:bg-[#171B33]  text-center hover:text-[#03DDFF]  text-white px-4 py-2 rounded-md    ">
                  <BiMessageAltError /> Support
                </button>
                <ul className="absolute  p-4 left-0 mt-2 border px-4 text-white bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible   max-h-60 overflow-y-auto">
                  {support.map((game, index) => (
                    <li key={index} className="block px-4 py-2 hover:text-[#B307E3] text-sm cursor-pointer">
                      {game}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group   ">
                <button className="hover:bg-[#171B33] hover:text-[#03DDFF] text-center px-2  text-white   rounded-md    ">
                  <span className=' text-[15px]'><SlCreditCard /> </span> Panels
                </button>
                <ul className="absolute w-[250px] p-4 left-0 mt-2 border px-4 text-white bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible   max-h-60 overflow-y-auto">
                  {panels.map((panels, index) => (
                    <li key={index} className="block px-4 py-2 hover:text-[#03DDFF] text-sm cursor-pointer">
                      {panels}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group hover:text-[#03DDFF] text-center  ">
                <div className='text-center'>
                  <p className='  text-[18px] ' ><RiAccountPinBoxLine /></p> </div>
                <button className="hover:bg-[#171B33]  rounded-md  hover:text-[#03DDFF]    ">
                  MY Account
                </button>
              </div>







            </div>
          </div> {/* Mobile Menu Toggle */}
          <div className='md:hidden w-[250px]  sm:w-[500px] text-end'>
          <button className=" text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button></div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#020525] text-white p-4">
            <a href="#" className="block py-2">MINECRAFT</a>
            <a href="#" className="block py-2">GAME SERVERS</a>
            <a href="#" className="block py-2">DEDICATED</a>
            <a href="#" className="block py-2">OTHER SERVERS</a>
        
          </div>
        )}
      </nav>



    </Container>



  );
}

export default Navbar;