import React from 'react'
import Container from './Common/Container'

function SignUp() {
    return (

        <Container >

<div 
  className="bg-[#171B33] border-blue-600 border-[2px] text-white py-8 px-6 rounded-xl"
  style={{
    backgroundImage: `url("https://www.bisecthosting.com/_ipx/q_100&s_2372x684/static/img/SignUpForm_bg.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
    
    {/* Text Section */}
    <div className="lg:w-2/3">
      <h2 className="font-lakehurst font-semibold text-3xl p-4">
        WANT THE INSIDE SCOOP?
      </h2>
      <p className="text-gray-400 font-sans sm:px-4 leading-relaxed">
        Join our email list and be the first to know about the latest fun updates, hot new releases, and insider tips.
      </p>

      {/* Form */}
      <div className="rounded-lg sm:px-4 py-4">
        <div className="flex flex-col sm:flex-row gap-4 pb-4">
          <input 
            className="rounded-xl bg-[#171B33] border px-4 py-3 w-full sm:w-auto" 
            type="text" 
            placeholder="First Name" 
          />
          <input 
            className="rounded-xl bg-[#171B33] border px-4 py-3 w-full sm:w-auto" 
            type="email" 
            placeholder="Email" 
          />
        </div>
        
        <button 
          className="w-full sm:w-auto px-[4rem] py-3 bg-blue-600 hover:bg-[#b307e3] hover:text-white font-semibold rounded-xl transition"
          type="button"
        >
          SIGN UP
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="hidden md:flex justify-center md:justify-end lg:justify-end w-full lg:w-1/3">
  <img 
    src="./images/subscribe.png"
    className="w-[200px] md:w-[250px] lg:w-[300px] h-auto object-contain"
    alt="Subscribe"
  />
</div>


  </div>
</div>



        </Container>

    )
}

export default SignUp
