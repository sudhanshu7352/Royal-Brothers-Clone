import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className="login">
      <p className="head">Rent . Ride . Explore</p>

      <div className="box">

        <div className="flex1">
          <p><Link to="/login" style={{textDecoration:'none',color:'black'}}>LOGIN</Link></p>
          <p>SIGN UP</p>
        </div>

        <input className="inp" type="text" placeholder="Name as per Aadhaar/Passport"/>
        <input className="inp" type="email" placeholder="Email"/>

        <p className="ph">Mobile</p>
        <div className="phone">
          <input type="number" placeholder="+91" />
          <input type="number" />
        </div>
        
        <input className="inp" type="password" placeholder="Password"/>

        <button className="btn">Sigh Up</button>

      </div>
    </div>
  )
}
