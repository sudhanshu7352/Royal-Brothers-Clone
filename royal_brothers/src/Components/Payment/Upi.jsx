export const Upi = ()=>{
    return <div>
    
    <div style={{padding:"20px"}}>
          <div >
          <span style={{fontSize: "13px"}}>Enter your VPA</span>
          <br/>
          <br/>
          <input style={{padding:"20px", border:"1px solid lightgray" , height: "35px" , borderRadius:'4px'}} type="text" placeholder="yourname@bankname" />
          </div>
           <br/>
          <button className="make-payment" variant="contained" size="medium">
           pay now
          </button>

    </div>

    </div>
}