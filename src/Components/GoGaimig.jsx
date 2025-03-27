import React from 'react'
import Container from './Common/Container'




const Gaming =[{
    id:1,
    title:"Web hosting",
    image:"https://www.bisecthosting.com/static/img/selector/Webhosting_Server.webp"
},
{
    id:2,
    title:"Voice servers",
    image:"https://www.bisecthosting.com/static/img/selector/Voice_Server.webp"
}
,{
    id:3,
    title:"VPS servers",
    image:"https://www.bisecthosting.com/static/img/selector/Vps_Server.webp"
}
,{
    id:4,
    title:"Dedicated servers",
    image:"https://www.bisecthosting.com/static/img/selector/Dedicated_Server.webp"
}
]

function GoGaimig() {
  return (
        <Container>
            <div>
                <h2 className='font-lakehurst font-semibold text-3xl'>GO BEYOND GAMING</h2>
                <p  className='font-sans opacity-0.5 text-gray-600 font-semibold'>BisectHosting offers more than just Minecraft hosting and gaming servers — We also have Dedicated Servers for VPS, Web, Discord Bots, and Mumble! With our unbeatable customer support and global reach, we can offer server hosting for any need.</p>
            </div>
            <div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-4  justify-center bg-[#020525] text-center'>
                {Gaming.map((game)=>(
                    <div key={game.id} >
                        <img src={game.image}/>
                        <h2 className='font-serif text-2xl text-white items-center sm:py-4'>{game.title}</h2>

                    </div>
 
                ))} 
            </div>
        </Container>
      
  )
}

export default GoGaimig
