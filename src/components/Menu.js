import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = (props) => {
  
  return (
    <div className={props.darkMode ? 'dark-theme':'light-theme'}>
    <Link to='/' style={{textDecoration:"none",color:"inherit"}}>
    <div className='nav'>
    <i class="fa-brands fa-youtube fa-2x"></i>
      <span>AnimeTube</span>
    </div>
    </Link>
    <div className='items'>
    <i class="fa-solid fa-house"></i>
        Home
    </div>
    <div className='items'>
    <i class="fa-brands fa-wpexplorer"></i>
      Explore
    </div>
    <div className='items'>
    <i class="fa-solid fa-video"></i>
    Subscriptions
    </div>
    <hr/>
    <div className='items'>
    <i class="fa-solid fa-bars"></i>
    Last Updated
    </div>
    <div className='items'>
    <i class="fa-solid fa-clock-rotate-left"></i>
    History
    </div>
    <hr/>
    <div className='login'>
    <p className='p2'>Sign in to like videos,<br/>
      comment and Subscribe</p>
    </div>
    <hr/>
    <div className='items'>
    <i class="fa-solid fa-clapperboard"></i>
    Movies
    </div>
    <div className='items'>
    <i class="fa-solid fa-newspaper"></i>
    News
    </div>
    <div className='items'>
    <i class="fa-solid fa-music"></i>
     Music
    </div>
    <div className='items'>
    <i class="fa-solid fa-gamepad"></i>
     Gaming
    </div>
    <div className='items'>
    <i class="fa-solid fa-tv"></i>
     Live
    </div>
    <hr/>
    <div className='items'>
    <i class="fa-solid fa-gear"></i>
     Settings
    </div>
    <div className='items'>
    <i class="fa-regular fa-flag"></i>
     Report
    </div>
    <div className='items'>
    <i class="fa-solid fa-circle-question"></i>
     Help
    </div>
    <div className='items' onClick={() => {props.setDarkMode(prev => !prev)}}>
    <i class="fa-solid fa-toggle-on"></i>
    {props.darkMode ? 'Dark':'Light'} Mode
    </div>
    </div>
  )
}
