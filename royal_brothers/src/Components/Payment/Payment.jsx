import React from "react"
import { useState } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { CreditCard } from "./CreditCard"
import { DebitCard } from "./DebitCard"
import { Netbanking } from "./Netbanking"
import "./Payment.css"
import { Paytm } from "./Paytm"
import { useParams } from "react-router-dom"
import { Upi } from "./Upi"

export const Payment = () => {

    const [show, setShow] = useState("")
    // console.log('show:', show)

    let { total } = useParams()
    const amount = +total
    // console.log('amount:', amount)

    return <div>
        <div className="main">
          
          {/* card option */}
            <div id="cards" >
                <p className="choose-method">CHOOSE PAYMENT METHOD</p>
                <div className="card main-card">
                  <div className="child-card">
                        <a onClick={() => setShow("creditcard")} className="card-option credit-card" href="#">Credit Card</a>
                        <a onClick={() => setShow("debitcard")} className="card-option credit-card" href="#">Debit Card</a>                        
                        <a onClick={() => setShow("netbanking")} className="card-option credit-card" href="#">Net Banking</a>                        
                        <a onClick={() => setShow("upi")} className="card-option credit-card" href="#">UPI Payment</a>                        
                        <div style={{width:'227px', borderBottom:'1px solid lightgrey', padding:'10px 0'}}><img onClick={() => setShow("paytm")} style={{ width: "30%", margin: "auto" }} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/paytm_logo-fa816f9adc5494b20bd1d42dde2a740ecf907e3514f3a3ffab3f680fe0e80256.png" alt="test" /></div>
                  </div>              
                  <div className="child-card-2" >
                  {show === "creditcard" ? <CreditCard /> : show === "debitcard" ? <DebitCard /> : show === "paytm" ? <Paytm />  : show === "upi" ? <Upi /> : <CreditCard />}
                  </div>
                </div>
            </div>

          {/* summary */}
            <div className="second">
                <div className="secondry-card" >
                    <div className="choose-method">
                        SUMMERY
                    </div>
                    <div className="second-child">
                        <p>Total Payable Amount</p>
                        <p><b>₹{amount}.00</b></p>
                    </div>
                </div>
                <div className="count-down">
                    <CountdownCircleTimer
                        isPlaying
                        duration={180}
                        colors={[
                        ['#838383', 0.33],
                        ['#838383', 0.33],
                        ['#838383', 0.33],
                        ]}
                        strokeWidth={4}
                        size={100}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                </div>
            </div>


        </div>

        <div style={{ padding: "2%" , fontSize: "13px"}}>
            <p><b>NOTE : </b>
                Making Payments on RoyalBrothers.com is 100% safe. Your transaction is processed through a secure
                https internet connection based on secure socket layer technology.
                Your payment details are only used for processing the transaction and never stored.
            </p>
        </div>



    </div>
}