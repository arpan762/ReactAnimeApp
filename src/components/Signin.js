import React, { useState } from 'react'

export const Signin = () => {
  const [data,setData ] = useState({username: "", email: "", password: ""})
  const handleSubmit = (e) => {
   e.preventDefault()
   setData({username: "", email: "", password: ""})
  }
  return (
    <div className='formContainer'>
      <div className="formWrapper">
       <div><span className='title'>Sign in</span> <br/> <span className='title1'>to Continue to AnimeTube</span></div>
         <form onSubmit={handleSubmit}>
            <input className='txt' type="text" placeholder="username" value={data.username} onChange={e => setData({...data, username: e.target.value})} />
            <input className='txt' type="email" placeholder="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} />
            <input className='txt' type="password" placeholder="password" value={data.password} onChange={e => setData({...data, password: e.target.value})} />
            <button className='btn123' type="submit">Sign up</button>
         </form>
      </div>
      <div className='more'>
        English(USA) 
        <div className='Links'>
            <span className='foot'>Help</span>
            <span className='foot'>Privacy</span>
            <span className='foot'>Terms</span>
        </div>
        </div>
    </div>
  )
}
