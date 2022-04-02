import "./Payment.css"

export const DebitCard = () =>{
    return <div>
    <div>
   
    <div style={{marginTop:'20px', width:'475px'}}>
      <p style={{width:'410px'}}>Enter your debit card details</p>
      <br/>
      <select  style={{border:"1px solid lightgray",height:'30px' , width:'270px' , borderRadius:'4px'}}>
        <option>Choose your debit card type</option>
        <option>Visa card</option>
        <option>Master card</option>
        <option>SBI meastro</option>
        <option>Rupay card</option>
      </select>  
    </div>

    <br/>
    <div className="card card-header credit-card-model">
       <label style={{display: "block", width:'165px'}} className="cardnum">Card Number</label>
       <input type="text" className="credit-card-inp" placeholder="Enter your card number"/>
       <br/>
       <label style={{display: "block", width:'190px'}} className="cardnum">Name on the card</label>
       <input type="text" className="credit-card-inp" placeholder="Enter Name on the card"/>
       <br/>
    
       <div>
          <div style={{width: '300px'}}>
              <label className="cardnum">Expire</label>
              <lable className="cardnum" style={{marginLeft:"30%"}}>CVV</lable><br/>
              
              <input type="text"  maxLength={2} placeholder="M" className="month" />
              <input type="text" maxLength={2} placeholder="Y" className="year" />
              <input type="text" maxLength={3} placeholder="CVV" className="cvv"/>
          </div>
       
       </div>
     
    
       </div>
       <br/>
       <div  style={{width: '350px'}}>
          <button className="make-payment" variant="contained" size="medium">
              Make Payment
          </button>
       </div>
    </div>
    </div>
}