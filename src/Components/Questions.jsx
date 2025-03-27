import React, { useState } from 'react'
import Container from './Common/Container'
import { IoIosArrowDown } from "react-icons/io";

const questionAns = [{
    id: 1,
    title: "HOW QUICK IS YOUR SUPPORT?"
    , content: "Our average ticket reply time is 15 minutes or less, day or night! We built our support team to be the quickest and best in the industry because we understand that server hosting can be complicated and want to be there when you need help."
},
{
    id: 2,
    title: "ARE YOUR MINECRAFT AND GAMING SERVERS ON 24/7?"
    , content: "Yes, all of our services run 24 hours per day, 7 days per week, and 365 days per year, so that you can connect with your friends any time."
},
{
    id: 3,
    title: "CAN I SWITCH BETWEEN MODPACKS ON MY MINECRAFT SERVER WHENEVER I WANT?"
    , content: "Yes! When you choose for hosting your Minecraft server, you get the ability to switch between modpacks as often as you'd like with only a few clicks."
},
{
    id: 5,
    title: "ARE THE PLAYER SLOTS UNLIMITED/ADJUSTABLE?"
    , content: "On our Premium and Budget Minecraft servers, you can adjust the player slots as needed in order to suit your server directly from your control panel. This includes adding and subtracting player slots, depending on how many players you want on your Minecraft server."
},
{
    id: 6,
    title: "DO YOU PROVIDE DDOS PROTECTION?"
    , content: "Yes, we provide DDoS protection of up to 1.3Tb/s at no additional cost."
},
{
    id: 7,
    title: "WHAT IS THE DIFFERENCE BETWEEN PREMIUM AND BUDGET MINECRAFT SERVER HOSTING?"
    , content: "There is no difference in performance or support between the two different plan types—only in included features. We designed the Premium Minecraft Server for the easiest and best experience possible. You get all the features, including unlimited player slots, dedicated IP addresses, automatic modpack installation and updates, 7 days of data backups, and 5 more locations to choose from than our Budget Minecraft Server plans. With the Budget Minecraft Server plans, you can pick and choose what features you'd like to add to your service."
},
{
    id: 8,
    title: "DO YOU ALLOW CUSTOM JARS/MODS TO BE UPLOADED?"
    , content: "Yes! You can upload any files/configs/mods to your server using our online file manager or your favorite FTP client."
},
]

function Questions() {

   
    const [show, setShow] = useState(null);

    const handleShow = (id) => {
        setShow((prev) => (prev === id ? null : id));
  
    }
    return (
            <Container>
                <div className='pt-29.5 pb-32 xl:pt-20 xl:pb-[90px] lg:pt-18 lg:pb-19.5 md:pt-16.5 md:pb-16.5 '>
                    <h2 className='font-lakehurst font-semibold text-3xl'>FREQUENTLY ASKED QUESTIONS</h2>
                    <p className='font-sans opacity-0.5 text-gray-600 '>Click on each question for the answer.</p>
                </div>
                <div className='grid grid-cols-1 gap-4 py-4'>
                    {questionAns.map((item) =>
                    (
                        <div key={item.id}>
                            <div className='flex items-center justify-between cursor-pointer pb-4' onClick={() => handleShow(item.id)}>
                                <h2 className='font-semibold py-5 m-0'>{item.title}</h2>
                                <IoIosArrowDown />
                            </div>
                            {show === item.id && <p className='font-sans opacity-0.5 text-gray-600 font-semibold py-5 pb-4'>{item.content}</p>}
                            <hr className='text-gray-600 opacity-0.5 ' />
                        </div>
                    )
                    )}
                </div>
            </Container>

    )

}
export default Questions

