import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extended , setExtended] = useState(false);

  return (
    <div className='sidebar'>
        <div className='top'>
          <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.Menu} alt="" />
          <div className='newChat' >
            <img src={assets.Chat} alt="" />
           {extended ? <p>New Chat</p> : null } 
          </div>
          {extended ? <div className='recent'>
            <p className='title' >Recent</p>
            <div className='recent-entry'>
                <img src={assets.Message} alt="" />
                <p>What is React......</p>
            </div>
          </div> : null }
        </div>
        <div className='bottom' >
            <div className="bottom-item recent-entry">
                <img src={assets.Question} alt="" />
               {extended ? <p>help</p> : null } 
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.History} alt="" />
               {extended ? <p>Activity</p> : null  } 
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.Setting} alt="" />
              {extended ?  <p>Settings</p> : null } 
            </div>
        </div>
    </div>
  )
}

export default Sidebar