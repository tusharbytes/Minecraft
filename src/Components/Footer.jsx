import React from 'react'
import Container from './Common/Container'
import { BsTwitterX } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

function Footer() {

    const footerData = [
        {
            heading: "Company",
            menus: [
                { name: "1", link: "About us" },
                { name: "1", link: "FAQ" },
                { name: "1", link: "Why BisectHosting" },
                { name: "1", link: "Partners" },
                { name: "1", link: "Careers" },
                { name: "1", link: "Blog" },
                { name: "1", link: "Gaming Scholarship" },
                { name: "1", link: "Sitemap" }
            ]
        },
        {
            heading: "Services",
            menus: [
                { name: "1", link: "Minecraft" },
                { name: "1", link: "Game Servers" },
                { name: "1", link: "Game Panel" },
                { name: "1", link: "Dedicated" },
                { name: "1", link: "Web Hosting" },
                { name: "1", link: "Mumble Hosting" },
                { name: "1", link: "Discord Bot" },
                { name: "1", link: "Modpacks Directory" },
                { name: "1", link: "Selector" }
            ]
        },
        {
            heading: "Customers",
            menus: [
                { name: "1", link: "My Account" },
                { name: "1", link: "Knowledgebase" },
                { name: "1", link: "GET 24/7 SUPPORT" },
                { name: "1", link: "LEGAL" },
                { name: "1", link: "Privacy Policy" },
                { name: "1", link: "TOS" },
                { name: "1", link: "Cookie Settings" }
            ]
        },
        {
            heading: "Social",
            menus: [
                { name: "1", imageUrl: <BsTwitterX />, socialLink: "https://x.com/BisectHosting" },
                { name: "1", imageUrl: <FaTiktok />, socialLink: "https://www.tiktok.com/@bisecthosting" },
                { name: "1", imageUrl: <IoLogoYoutube />, socialLink: "https://www.youtube.com/channel/UCF85uKkzWkV1fz66QSm4m7Q" },
                { name: "1", link: "Instagram", socialLink: "https://www.instagram.com/BisectHosting" },
                { name: "1", link: "Facebook", socialLink: "https://www.facebook.com/BisectHosting" }
            ]
        }
    ];

    return (
        <footer className="bg-[#020525] text-white">
            <Container>
                {/* Grid Layout */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8 py-10">

                    {/* Logo & Payment Section */}
                    <div className="flex flex-col items-center sm:items-start">
                        <img src="./images/logo1.jpg" alt="Logo" className="w-[150px] mb-6" />
                        <img src="./images/payment.jpg" alt="Payment Methods" className="w-full max-w-[215px]" />
                    </div>

                    {/* Footer Menus */}
                    {footerData.map((item, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-xl mb-4">{item.heading}</h3>
                            <hr className="opacity-30 w-20 mb-4" />
                            <ul className="space-y-2">
                                {item.menus.map((menu, key) => (
                                    <li key={key}>
                                        {index === 3 ? (
                                            <a href={menu.socialLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#b307e3] transition">
                                                {menu.imageUrl} <span>{menu.link}</span>
                                            </a>
                                        ) : (
                                            <a href={menu.link} className="hover:text-[#b307e3] transition">
                                                {menu.link}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="text-center py-6 text-gray-400 text-sm border-t border-gray-700">
                    Copyright © 2024 Venture Node LLC. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
