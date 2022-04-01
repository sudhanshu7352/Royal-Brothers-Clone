import React from 'react'
import './DropDownMenu.css'

export  const DropDownMenu = () => {
  return (
   <div>
     <div className="dropdown" style={{marginLeft:'35px' , cursor: "pointer"}}>
        <button className="dropbtn">What's New? <img style={{height:"8px",marginTop:"11px",marginLeft:"20px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img> </button>
        <div className="dropdown-content">
          <a href="#">Store</a>
        </div>
     </div>
   </div>
  )
}
