import React from 'react'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { Video } from './Video'
import { Route, Routes } from "react-router-dom"
import { Signin } from './Signin'
export const Body = (props) => {
  return (
    <div className={props.darkMode ? 'dark1-theme':'light1-theme'}>
        <Navbar />
        <div className='wrapper1'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Signin' element={<Signin /> } />
            <Route path='/Videos/:userId' element={<Video /> } />
        </Routes>
        </div>
    </div>
  )
}
