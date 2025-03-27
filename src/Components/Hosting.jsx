import React from 'react'
import Container from './Common/Container'

function Hosting() {
    return (
  
      <Container>
                <div className='grid sm:grid-cols-2 gap-3   '>
                    <div className='text-left'>
                        <h1 className='font-serif text-[30px]   '>SERVER HOSTING FOR </h1>
                        <h2 className='font-serif text-[30px]   '>MINECRAFT & TOP GAMES </h2>
                        <h2 className='font-serif text-[30px]  '>MADE EASY </h2>

                        <div className='opacity-0.05 text-gray-500'>
                            <p>We’ve been in the Minecraft server hosting world for over a decade, committed to making sure that hosting your own server is easy, fun, and affordable! Since we started, we’ve branched out and now offer server hosting for 60+ other titles and counting.</p>
                            <p >Our customized gaming server control panel makes changing server settings and installing plugins a breeze. But if you’re ever feeling stuck, see our <a href='#' className='text-white hover:text-[#b307e3] font-semibold '>library of tutorials</a> or send in a support ticket and expect a response within about 15 minutes.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.bisecthosting.com/static/img/common/minecraft-world-starting-dark.svg" />
                    </div>
                </div>
                </Container>
    )
}

export default Hosting
