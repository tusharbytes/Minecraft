import React, { useState } from 'react';
import { FaBars, FaSortDown, FaTimes } from "react-icons/fa";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { GiConsoleController } from 'react-icons/gi';
import { BiMessageAltError } from 'react-icons/bi';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { SlCreditCard } from 'react-icons/sl';
import Container from './Common/Container';

const games = [
  "7 DAYS TO DIE", "ABIOTIC FACTOR", "AMERICAN TRUCK SIMULATOR",
  "ALOFT", "ARK SURVIVAL EVOLVED", "ARMA3", "ARMA REFORGER", "ASKA"
];

const support = ["Knowledgebase", "Get 24/7 Support", "Sales", "FAQ"];
const panels = ["GAMES CONTROL PANEL", "WEB HOSTING PANEL", "VPS HOSTING PANEL", "DISCORD BOT", "MUMBLE CONTROL PANEL"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Container>
      <div className="bg-[#020525] text-white sticky top-0 left-0 right-0 z-30">

        {/* Main Navbar */}
        <div className="flex justify-between items-center w-full px-6 py-4">

          {/* Logo on the left */}
          <div className="flex items-center">
            <img className="w-[205px] rounded-lg" src="/images/logo1.jpg" alt="Logo" />
          </div>

          {/* Desktop Menu on the right */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium">

            {/* Dropdown: Minecraft */}
            <div className="relative group">
              <p className="cursor-pointer flex items-center hover:text-[#03DDFF] transition">
                MINECRAFT <FaSortDown className="ml-1" />
              </p>
              <div className="absolute left-0 mt-2 bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                <a href="#" className="flex items-center px-4 py-2 hover:text-[#B307E3]"><MdOutlineDesktopWindows /> JAVA</a>
                <a href="#" className="flex items-center px-4 py-2 hover:text-[#B307E3]"><GiConsoleController /> BEDROCK</a>
              </div>
            </div>

            {/* Dropdown: Game Servers */}
            <div className="relative group">
              <p className="cursor-pointer flex items-center hover:text-[#03DDFF] transition">
                GAME SERVERS <FaSortDown className="ml-1" />
              </p>
              <ul className="absolute w-64 p-4 bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                {games.map((game, index) => (
                  <li key={index} className="px-4 py-2 hover:text-[#B307E3] cursor-pointer">{game}</li>
                ))}
              </ul>
            </div>

            {/* Dropdown: Support */}
            <div className="relative group">
              <button className="flex items-center hover:text-[#03DDFF] transition">
                <BiMessageAltError className="mr-2" /> Support
              </button>
              <ul className="absolute w-48 bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                {support.map((item, index) => (
                  <li key={index} className="px-4 py-2 hover:text-[#B307E3] cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* Dropdown: Panels */}
            <div className="relative group">
              <button className="flex items-center hover:text-[#03DDFF] transition">
                <SlCreditCard className="mr-2" /> Panels
              </button>
              <ul className="absolute w-64 bg-[#171B33] shadow-lg rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                {panels.map((panel, index) => (
                  <li key={index} className="px-4 py-2 hover:text-[#03DDFF] cursor-pointer">{panel}</li>
                ))}
              </ul>
            </div>

            {/* My Account */}
            <div className="flex items-center gap-2 hover:text-[#03DDFF] cursor-pointer transition">
              <RiAccountPinBoxLine size={20} />
              <span>My Account</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

        </div>


        {/* Mobile Menu with Overlay */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              className={`fixed inset-y-0 right-0 w-[75%] max-w-xs bg-[#171B33] z-30 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <FaTimes size={24} />
                </button>
              </div>

              <ul className="text-white">
                <li className="px-4 py-3 border-b hover:text-[#03DDFF]">MINECRAFT</li>
                <li className="px-4 py-3 border-b hover:text-[#03DDFF]">GAME SERVERS</li>
                <li className="px-4 py-3 border-b hover:text-[#03DDFF]">DEDICATED</li>
                <li className="px-4 py-3 border-b hover:text-[#03DDFF]">OTHER SERVERS</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
