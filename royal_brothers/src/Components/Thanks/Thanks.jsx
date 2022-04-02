import "./Thanks.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Thanks = () => {
  const navigate = useNavigate();

  const checkoutDetails = JSON.parse(localStorage.getItem("checkoutDetails"));

  // useEffect(()=>{
  //     const pick = JSON.parse(localStorage.getItem("pick"))
  //     const drop = JSON.parse(localStorage.getItem("drop"));
  //     const ids = JSON.parse(localStorage.getItem("id"));
  //     const pic = Number(drop.end.split(":")[0])-12;
  //     setPick(pick);
  //     setDrop(drop)
  //     setDt(pic)
  //     axios.get(`https://royal-brother.herokuapp.com/bike/${ids}`)
  //     .then((res)=>{
  //         setBike(res.data)
  //     })

  // },[])
  const [bike, setBike] = useState({});
  const [pick, setPick] = useState({});
  const [drop, setDrop] = useState({});
  const [dt, setDt] = useState();
  return (
    <div className="Main1">
      <p>Thanks for your booking!</p>

      <div className="Main2">
        <div className="Parent1">
          <img alt="" src={checkoutDetails.image} />
          <p>{checkoutDetails.name}</p>
        </div>
        <div className="Parent2">
          <p className="bookD">Booking Details</p>
          <div className="Child1">
            <div className="first_container">
              <div className="consta">
                <p>
                  <span className="timez">{checkoutDetails.pickUpTime}</span>
                  <br />
                  {checkoutDetails.pickUpDate}
                </p>
              </div>
              <div className="tosa">to</div>
              <div className="timesa">
                <p>
                  <span className="timez">{checkoutDetails.dropOffTime}</span>
                  <br />
                  {checkoutDetails.dropOffDate}
                </p>
              </div>
            </div>

            <div className="second_container">
              <p>
                Marathalli CG Clinic(Karthik Nagar)
                <br />
                No. 98 Karthik LRTE Layout Outer Ring Road, <br />
                Marathalli, Banglore-560037
              </p>
            </div>
            <div className="third_container">
              <p className="p1">Total Amount Paid</p>
              <p className="p2">₹{checkoutDetails.netPaybleAmmount}</p>
            </div>
          </div>
          <div className="child2">
            <p> Payment Done Through Credit Card</p>
          </div>
          <div className="child3">
            <img
              src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(6).png"
              alt="tick"
            ></img>
            <p>BOOKING CONFIRMED</p>
          </div>
          <div className="child4">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Book Another Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
