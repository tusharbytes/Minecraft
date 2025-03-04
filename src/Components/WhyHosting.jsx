import React from 'react'
import Container from './Common/Container'

const data = [{
    id: 1,
    image: "https://www.bisecthosting.com/static/img/common/steve-helping-players.webp",
    title: "OUR SUPPORT TEAM IS AVAILABLE 24/7/365",
    content: "When you run into an issue with a mod, modpack, plugin, or setting on your server, our support team is here to help within 15 minutes on average. From Minecraft to Garry’s mod server hosting, our team does it all. Spend more time playing with your friends instead of troubleshooting your server."
}
    , {
    id: 2,
    image: "https://www.bisecthosting.com/static/img/common/steve-using-control-panel.webp",
    title: "POWERFUL CONTROL PANEL FOR EASY SERVER MANAGEMENT",
    content: "Our easy-to-use control panel allows you to take charge of all aspects of your hosted Minecraft and gaming servers. From stopping and starting your server to adding modpacks with a few clicks, editing config files, or adjusting player slots, the interface is easy to navigate for new players and includes the powerful tools and features you need."
},
{
    id: 3,
    image: "https://www.bisecthosting.com/static/img/common/steve-helping-players.webp",
    title: "OUR SUPPORT TEAM IS AVAILABLE 24/7/365",
    content: "When you run into an issue with a mod, modpack, plugin, or setting on your server, our support team is here to help within 15 minutes on average. From Minecraft to Garry’s mod server hosting, our team does it all. Spend more time playing with your friends instead of troubleshooting your server."
}, {
    id: 4,
    image: "https://www.bisecthosting.com/static/img/common/steve-using-control-panel.webp",
    title: "POWERFUL CONTROL PANEL FOR EASY SERVER MANAGEMENT",
    content: "Our easy-to-use control panel allows you to take charge of all aspects of your hosted Minecraft and gaming servers. From stopping and starting your server to adding modpacks with a few clicks, editing config files, or adjusting player slots, the interface is easy to navigate for new players and includes the powerful tools and features you need."
}
]

function WhyHosting() {
    return (

        <div className='bg-[#0D1129] text-white '>
            <Container>
                <h2 className='p-0 text-left text-[30px] font-lakehurst py-8'>WHY BISECTHOSTING?</h2>
                <div className=''>
                    {data?.map((ele, index) => (
                        <div key={index} className={`${index % 2 == 0 ? "flex-row-reverse" : ""}  sm:flex justify-between gap-2 pb-12 items-center`}>
                            <div className='w-full sm:w-[48%]'>
                                <img src={ele.image} className='w-full' />
                            </div>
                            <div className='w-full sm:w-[48%]'>
                                <h2 className='text-[20px] pb-2 font-semibold'>{ele.title}</h2>
                                <p>{ele.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default WhyHosting
