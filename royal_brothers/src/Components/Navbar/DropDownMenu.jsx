import React from 'react'
import './DropDownMenu.css'

export  const DropDownMenu = () => {
  return (
   <div>
     <div class="dropdown" style={{marginLeft:'35px'}}>
        <button class="dropbtn">What's New? <img style={{height:"8px",marginTop:"11px",marginLeft:"20px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img> </button>
        <div class="dropdown-content">
          <a href="#">Store</a>
        </div>
     </div>
   </div>
  )
}
