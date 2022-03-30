import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      Navbar
    <Link to={"/store"}>Store</Link>  
    <Link to={"/login"}>Login</Link>
    <Link to={"/register"}>SignUp</Link>  
    </div>
  )
}
