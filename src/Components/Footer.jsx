import React from 'react'
import Container from './Common/Container'

function Footer() {

    const footerData = [
        {
            heading: "Company",
            menus: [
                {
                    name: "1",
                    link: "About us"
                },
                {
                    name: "1",
                    link: "FAQ"
                },
                {
                    name: "1",
                    link: "Why BisectHosting"
                },
                {
                    name: "1",
                    link: "Partners"
                }
                ,
                {
                    name: "1",
                    link: "Careers"
                },
                {
                    name: "1",
                    link: "Blog"
                },
                {
                    name: "1",
                    link: "Gaming Scholarship"
                },
                {
                    name: "1",
                    link: "Sitemap"
                }
            ]
        },
        {
            heading: "Services",
            menus: [
                {
                    name: "1",
                    link: "minecraft"
                },
                {
                    name: "1",
                    link: "Game servers"
                },
                {
                    name: "1",
                    link: "Game Panel"
                },
                {
                    name: "1",
                    link: "Dedicated"
                },
                {
                    name: "1",
                    link: "Web Hosting"
                },
                {
                    name: "1",
                    link: "Mumble Hosting"
                },
                {
                    name: "1",
                    link: "Discord Bot"
                },
                {
                    name: "1",
                    link: "Modpacks Directory"
                },
                {
                    name: "1",
                    link: "Selector"
                }
            ]
        },
        {
            heading: "Customers",
            menus: [
                {
                    name: "1",
                    link: "My Account"
                },
                {
                    name: "1",
                    link: "knowleadgebase"
                },
                {
                    name: "1",
                    link: "GET 24/7 SUPPORT"
                },
                {
                    name: "1",
                    link: "LEGAL"
                },
                {
                    name: "1",
                    link: "Privacy Policy"
                },
                {
                    name: "1",
                    link: "tos"
                },
                {
                    name: "1",
                    link: "Cookie Settings"
                }
            ]

        },
        {
            heading: "Social",
            menus: [
                {
                    name: "1",
                    imageUrl: `https://www.bisecthosting.com/static/svg/dark-theme/twit.svg`,
                    link: "",
                    socialLink: "https://x.com/BisectHosting"
                },
                {
                    name: "1",
                    imageUrl: `https://www.bisecthosting.com/static/svg/dark-theme/discord.svg`,
                    link: "knowleadgebase",
                    socialLink: "https://discord.com/invite/zb8vZap"
                },
                {
                    name: "1",
                    imageUrl: `https://www.bisecthosting.com/static/svg/dark-theme/tik.svg`,
                    link: "GET 24/7 SUPPORT",
                    socialLink: "https://www.tiktok.com/@bisecthosting"
                },
                {
                    name: "1",
                    imageUrl: `https://www.bisecthosting.com/static/svg/dark-theme/youtube.svg`,
                    link: "LEGAL",
                    socialLink: "https://www.youtube.com/channel/UCF85uKkzWkV1fz66QSm4m7Q"
                },
                {
                    name: "1",
                    imageUrl: `https://www.bisecthosting.com/static/svg/dark-theme/insta.svg`,
                    link: "Privacy Policy",
                    socialLink: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2FBisectHosting%2F&is_from_rle"
                },
                {
                    name: "1",
                    imageUrl: `https://www.bisecthosting.com/static/svg/dark-theme/fb.svg`,
                    link: "tos",
                    socialLink: "https://www.facebook.com/BisectHosting"
                }
            ]

        }

    ];

    return (
        <div className='bg-[#020525]  text-white '>
            <Container>
                <div className='grid grid-cols-5 gap-2 bg-[#020525]    '>
                    <div>
                        <img src='./images/logo1.jpg' />
                        <img className='h-[215px]' src='./images/payment.jpg' />
                    </div>
                    {footerData?.map((item, index) =>
                    (
                        <div key={index}>
                            <h3 className=' font-bold text-xl py-2'>{item.heading}</h3>
                            <hr className='opacity-[.3] w-20 py-2'></hr>
                            <ul>
                                {item.menus?.map((menu, key) => (
                                    <li key={key} className='py-1.5'>
                                        {index === 3 ? <>
                                            <a href={menu.socialLink}> <img className='py-1' src={menu.imageUrl} /></a>
                                        </> :
                                            <a className='font-serif  hover:text-[#b307e3] py-2' href={menu.link}>
                                                {menu.link}


                                            </a>
                                        }

                                    </li>
                                ))}
                            </ul>

                        </div>
                    )
                    )}

                </div>
                <div className='text-center'>

                    <div className='py-8 opacity-0.5 text-gray-600 '>Copyright © 2024 Venture Node LLC. All Rights Reserved.</div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
