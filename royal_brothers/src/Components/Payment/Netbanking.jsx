export const Netbanking = ()=>{
    return(
    
        <div>
                <div className="credit-card-logo" >
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <img className="credit-card-img"  src="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png" 
                    alt="test"/>
                    <input style={{marginLeft:"4%"}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <img className="credit-card-img" src="https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.png" 
                    alt="test"/>
                    <input style={{marginLeft:"4%"}}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <img className="credit-card-img" src="https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png" 
                    alt="test"/>
                    <input style={{marginLeft:"4%"}}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <img className="credit-card-img" src="https://www.clipartmax.com/png/middle/183-1838364_additional-5-discount-a-minimum-spend-of-rs-axis-bank-logo-png.png"
                    alt="test"/>
                </div>
        
                <div style={{padding:"3%"}}>
                    <p>or select any other Bank:</p>
                    <select>
                        <option style={{}}>Select Bank</option>
                        <option value="Punjab & Sind Bank">Punjab & Sind Bank</option>
                        <option value="UCO Bank">UCO Bank</option>
                        <option value="Canara Bank">Canara Bank</option>
                        <option value="IDBI Bank Limited">IDBI Bank Limited</option>
                    </select>
                    <br/>
                    <br/>
                    <br/>
                    <p style={{fontSize:"12px"}}><b>NOTE:</b>In the next step you will we redirected to your bank's website to verify yourself</p>
                    <button  style={{background:"#FFC600", color:"black"}} variant="contained" size="medium">
                        pay now
                    </button>

                </div>

        </div>

   )
}