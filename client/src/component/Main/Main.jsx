import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main' >
        <div className='nav' >
            <p>Gemini</p>
            <img src={assets.Usericon} alt="" />
        </div>
        <div className='main-container'>
            <div className='greet' >
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className='cards' >
                <div className='card' >
                   <p>Suggest beautiful places to see on an upcoming road trip</p>
                   <img src={assets.Compass} alt="" />
                </div>
                <div className='card' >
                   <p>Briefly summarize this concept: urban planning</p>
                   <img src={assets.Light} alt="" />
                </div>
                <div className='card' >
                   <p>Brainstorm team bonding activities for our work retreat</p>
                   <img src={assets.Message} alt="" />
                </div>
                <div className='card' >
                   <p>Tell me about React js and React native</p>
                   <img src={assets.Arrow} alt="" />
                </div>
            </div>
            <div className='main-bottom' >
               <div className='search-box' >
                <input type="text" placeholder='Enter the Prompt here' />
                <div>
                    <img src= {assets.Gallary}lt="" />
                    <img src={assets.Mic} alt="" />
                    <img src={assets.Send} alt="" />
                </div>
               </div>
               <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Main