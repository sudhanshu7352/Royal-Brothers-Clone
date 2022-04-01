import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./checkout.css";


export const Checkout = () => {
  
  let date = JSON.parse(localStorage.getItem("date"));
  let time = JSON.parse(localStorage.getItem("time"));
  let ddate = JSON.parse(localStorage.getItem("ddate"));
  let dtime = JSON.parse(localStorage.getItem("dtime"));


  const [product, setProduct] = useState("")
  const [coupan, setCoupan] = useState("")
  const [text, setText] = useState("")
  const [show, setShow] = useState("")

  const [helmate, setHelmate] = useState(false)

  let x = Date.parse(date);
  let y = Date.parse(ddate);

  let hour1 = time;
  let hour2 = dtime;
  // change into minutes
  let hour1Min = hour1.split(":")[0];
  let hour2Min = hour2.split(":")[0];
  let ans = Math.abs(hour1Min - hour2Min);
  if (hour1Min !== hour2Min && hour1.split(":")[1] === hour2.split(":")[1]) {
     ans = ans + 1;

  }

  let t = Math.abs((x - y) / 3600000) + ans

  const { id } = useParams()

  // useEffect(() => {
  //    fetch(`https://bikeapis.herokuapp.com/bikes/${id}`).then((d) => d.json()).then((res) => {
  //       console.log('res:', res)
  //       setProduct(res)
  //    }).catch((err) => {
  //       console.log('err:', err)
  //    })
  // }, [id])

  const handleCoupan = (e) => {
     e.preventDefault()

     if (coupan === "brothers40") {
        setText("brothers40")
        alert("Congratulations!🎉 Your Coupan Is Applied")
     }
     else {
        alert("Invalid Coupan😞")
     }
  }
  let total = 0
  let price = +product.hourPrice
  if (text === "brothers40") {
     total += Math.abs(price - Math.floor((price * 40) / 100) * t)
  }
  else {
     total += (product.hourPrice) * t
  }

  useEffect(() => {
     let helmateText = +show
     if (helmateText === 2) {
        setHelmate(true)
     }
     else {
        setHelmate(false)
     }
  }, [show])

  return (
    <div className="main_box">
      <div className="left_div">
        <div className="img_div">
          <h4 className="summary">SUMMARY</h4>
          <img
            src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/Honda_activa_5G.png?1532687566"
            alt=""
          />
          <h2>Honda Activa 5G</h2>
          
        </div>
        <div className="info_div">
          <div>
          <div className="time">
            <div className="start_time">
              <p>08:00 pm</p>
              <p>31 Mar 2022</p>
            </div>
           

            <p className="to">to</p>
            <div className="end_time">
              <span>10:00 am</span><br />
              <span>01 Apr 2022</span>
            </div>
           
          </div>
          
            
          <div className="addres">
           <div>

            <p>Yeshwanthpur (BMTC Bus Station)</p>
            <p>
              Parking level 1 , public tv building ,yeshvanthpur ttmc, behind
              Gayathri Temple Rd, Dr.Ambedkar Nagar, Yeswanthpur, Bengaluru,
              Karnataka 560022
            </p>
           </div>
          
          </div>
          <div className="minimum">
            <span>Minimum 24.0 hour charges applicable</span>
            <span className="price">₹ 456</span>
          </div>

          <div className="total">
            <span>Total</span>
            <span className="price">₹ 456</span>
          </div>

          <div className="helmet">
          <span>Number of Helmet (?)</span>
          <span>
          <select className="op" onChange={(e) => setShow(e.target.value)}  >
                           <option value="1">1</option>
                           <option value="2">2</option>
                        </select>
          </span>
          </div>
          <div >
                     <div style={{ display: "flex" }}>
                        <input onChange={(e) => setCoupan(e.target.value)} style={{ width: "70%", verticalAlign: "bottom" }} className="no-outline" type="text"
                           placeholder="Coupan Code"
                        />
                        <button variant="contained" size="medium"
                           type="button"
                           style={{ border:"0",borderRadius:"10px",width: "28%", background: "#FFC600", color: "black", height: "32px", marginTop: "20px" }}
                           onClick={handleCoupan}
                        >Apply</button>
                     </div>
                     <div>
                        <span  style={{ marginTop: "-30px",marginRight:"260px" }}>Km limit (?)</span>
                        <span style={{ float: "right",marginRight:"20px" }}>343 km</span>
                     </div>
                     <div className="km_div" >
                        <span style={{ marginTop: "-30px",marginRight:"180px" }}>Excess km charges (?)</span>
                        <span style={{ float: "right",marginRight:"20px" }}>4.0/km</span>
                     </div>
                  </div>
          </div>
          
       
         
        </div>
      </div>


      <div className="right_div">
      <h3 className="check">CHECKOUT</h3>
            <div className="display-checkout">
               <div>
                  <span className="garage-title">Booking Fee</span>
                  <br />
                  <br />
                  <span className="garage-title">IGST (28%)</span>
                  <br />
                  <br />
                  <span style={{ marginTop: "-80px" }} className="garage-title ef" >Refundable Deposit</span>
                  <br />
                  <br />
                  <span style={{ marginTop: "-60px" }} className="garage-title">{helmate ? "Extra Helmet" : null}</span>
                  <h6 className="garage-title amount ref" id="ref">Total Payable Amount</h6>
               </div>
               <div style={{ marginLeft: "12%" }}>
                  <span>&#x20B9;{total}.00</span>
                  <br />
                  <br />
                  <span>&#x20B9;285.00</span>
                  <br />
                  <br />
                  <span>&#x20B9;1500.00</span>
                  <br />
                  <br />
                  <span style={{ marginTop: "5px" }}>{helmate ? "₹" + 70 + ".00" : null}</span>
                  <h3 style={{ marginTop: "-3px" }}>₹{helmate ? total + 70 + 4350 : total + 4350}.00</h3>
               </div>
            </div>
            <Link to={`/checkout/paymentpage/${helmate ? total + 700 + 4350 : total + 4350}`} style={{ textDecoration: "none" }}>
               <button className="make" style={{ background: "#FFC600", color: "black", width: "80%",border:"0",borderRadius:"10px" }} variant="contained" size="medium">
                  Make Payment
               </button>
            </Link>
      </div>
    </div>
  );
};
