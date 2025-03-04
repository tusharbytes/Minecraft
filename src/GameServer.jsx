import React from 'react'
import Container from './Components/Common/Container';

const cards = [
    {
        id: 1,
        image: "https://www.bisecthosting.com/static/img/servers/Minecraft.webp",
        title: "MINECRAFT",
    },
    {
        id: 2,
        image: "https://www.bisecthosting.com/static/img/servers/Palworld.webp",
        title: "Valheim"
    },
    {
        id: 3,
        image: "https://www.bisecthosting.com/static/img/servers/Enshrouded.webp",
        title: "Enshrouded"
    },
    {
        id: 4,
        image: "https://www.bisecthosting.com/static/img/servers/Terraria.webp",
        title: "Terraria"
    },
    {
        id: 5,
        image: "https://www.bisecthosting.com/static/img/servers/ARK.webp",
        title: "Ark: Survival Evolved"
    },
    {
        id: 6,
        image: "https://www.bisecthosting.com/static/img/servers/Valheim.webp",
        title: "Valheim"
    },
    {
        id: 7,
        image: "https://www.bisecthosting.com/static/img/servers/ProjectZomboid.webp",
        title: "Project Zomboid"
    },
    {
        id: 8,
        image: "https://www.bisecthosting.com/static/img/servers/Arma_3.webp",
        title: "ARMA 3"
    }

]

const feature = [
    {
        id: 1,
        images: "https://www.bisecthosting.com/static/svg/dark-theme/icon-msg.svg",
        heading: "24/7/365 Support",
        detail: "Get the best customer support of any Minecraft server host. Our average support ticket reply time is under 15 minutes. Our passionate specialists will help get your server up and running."
    },
    {
        id: 2,
        images: "https://www.bisecthosting.com/static/svg/dark-theme/icon-planet.svg",
        heading: "SERVERS WORLDWIDE FOR LOWER LATENCY",
        detail: "We offer game server hosting at 20 locations worldwide so that you can have a low latency wherever you’re located."
    },
    {
        id: 3,
        images: "https://www.bisecthosting.com/static/svg/dark-theme/icon-download.svg",
        heading: "AUTOMATED MODPACK INSTALLATION",
        detail: "Our Minecraft server hosting plans include automatic installation, making modpack server hosting a breeze with hundreds of mods and modpacks just a few clicks away."
    },
    {
        id: 4,
        images: "https://www.bisecthosting.com/static/svg/dark-theme/icon-ddos.svg",
        heading: "DDoS PROTECTION",
        detail: "All of our gaming servers are outfitted with DDoS protection to help you avoid downtime, including intentional DDoS attacks.   "
    },
    {
        id: 5,
        images: "https://www.bisecthosting.com/static/svg/dark-theme/icon-ip.svg",
        heading: "FREE DEDICATED SERVER IP",
        detail: "When you choose our premium Minecraft server hosting option, your server is on port 25565 by default, so there’s no need to enter extra port numbers after your server IP.."
    },
    {
        id: 6,
        images: "https://www.bisecthosting.com/static/svg/dark-theme/icon-backup.svg",
        heading: "2+ YEARS OF BACKUPS",
        detail: "We’ll keep server data for nearly three years, letting you go back and resume playing with the same world, settings, and data."
    }


]

function GameServer() {
    return (
        <div className='bg-[#020525]'> 
                   <Container>
        <div className='container text-white bg-[#020525]'>
            
            <div>
                <h1 className='p-0 text-left text-[30px] font-lakehurst'>Game Server</h1>

                <div className=' grid grid-cols-4 gap-4 p-4'>
                    {cards?.map((ele) => (
                        <>
                            <div className='text-center ' key={ele.id}>
                                <a className='hover:scale-110 ease-in-out ' href='#'><img src={ele?.image} /></a>
                                <h3 className='p-2 hover:text-[#b307e3]'>{ele?.title}</h3>
                            </div>

                        </>
                    ))}
                </div>
                <div className='text-center'>
                    <div>
                <button className="m-2  bg-blue-600 hover:bg-[#b307e3]  hover:text-white font-semibold rounded-lg text-sm px-5 py-2.5  " type="button">SEE ALL 60+ GAMES                </button></div></div>
                <h2 className='p-0 text-left text-[30px] font-lakehurst'>OUR features</h2>
                <div className='grid sm:grid-cols-3 gap-3 p-4 '>
                    {feature?.map((e) => (
                        <>
                            <div key={e.id}>
                                <img className='py-6' src={e.images} />
                                <h2 className='py-2 font-semibold'>{e.heading}</h2>
                                <p className='opacity-0.05 text-gray-500'>{e.detail}</p>

                            </div>
                        </>
                    ))

                    }

                </div>
               

            </div>
            
        </div>
        </Container>
        </div>
  
    )
}

export default GameServer;
