import React from 'react'
import './DropDown2.css'

export  const DropDown2 = () => {
  return (
   <div>
     <div class="dropdown" style={{marginLeft:'35px'}}>
        <button class="dropbtn">Partner with us<img style={{height:"8px",marginTop:"11px",marginLeft:"20px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img> </button>
        <div class="dropdown-content">
          <a href="#">Earn with us</a>
          <a href="#">Own a franchise</a>
        </div>
     </div>
   </div>
  )
}
