import React from 'react'
import Container from './Common/Container'

function WorldServer() {
    return (
        <Container>
            <div className='flex justify-center'>
                <h1 className='  text-left text-[30px] font-lakehurst tracking-widest '>Worldwide Server Hosting Locations</h1>
            </div>
            <div className='flex justify-center '>
                <p className='opacity-0.05 text-gray-500'>Click on a location for more detailed info.
                </p>
            </div>
            <img className='px-12' src='./images/server.jpg' />
            </Container>
    )
}

export default WorldServer
