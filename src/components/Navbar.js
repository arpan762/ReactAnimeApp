import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

export const Navbar = () => {
  const {state,setState} = useContext(UserContext)
  return (
    <div className='container'>
      <div className='wrapper'>
        <input className="ip" type="text" placeholder='Search' /> 
        <button className='btn'><i class="fa-solid fa-magnifying-glass"></i></button>
        {state ? <button className='btn1' onClick={() => setState(!state)} style={{textDecoration:"none",color:"inherit"}}><i class="fa-solid fa-user"></i>SIGN IN</button>
        : <h4>Arpan Talukdar</h4>
        }
      </div>
    </div>
  )
}
