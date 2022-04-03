import { FormatColorResetRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useParams , useNavigate } from "react-router-dom";
import "./checkout.css";

export const Checkout = () => {

   const navigate = useNavigate()


  const bookedBikeDetails = JSON.parse(
    localStorage.getItem("bookedBikeDetails")
  );

  const [helmetNo, sethelmetNo] = useState(1);

  const handleHelmet = (event) => {
    sethelmetNo(event.target.value);
  };

  const [Coupon, setCoupon] = useState("");

  const [Applied, setApplied] = useState(false);

  const totalPaybleAmmount = () => {
    const total = bookedBikeDetails.totalPrice;
    const IGST = total * 0.28;
    const Deposit = 1500;
    const helmetPrice = helmetNo == 2 ? 100 : 0;
    const discount = Applied ? 10 : 1;

    const netPaybleAmmount =
      total + IGST + Deposit + helmetPrice - (total * discount) / 100;

    return netPaybleAmmount.toFixed(2);
  };

  const handleCheckout = () => {

   const checkoutDetails = {
         pickUpDate: bookedBikeDetails.pickUpDate,
         pickUpTime: bookedBikeDetails.pickUpTime,
         dropOffDate: bookedBikeDetails.dropOffDate,
         dropOffTime: bookedBikeDetails.dropOffTime,
         totalPrice: bookedBikeDetails.totalPrice,
         bikeId: bookedBikeDetails.bikeId,
         image: bookedBikeDetails.image,
         name: bookedBikeDetails.name,
         hourly_rate: bookedBikeDetails.hourly_rate,
         kilometer_limit: bookedBikeDetails.kilometer_limit,
         helmetNo: helmetNo,
         coupon: Coupon,
         discount: Applied ? 10 : 1,
         netPaybleAmmount: totalPaybleAmmount(),
         deposit: 1500,
         IGST: totalPaybleAmmount() * 0.28,
         helmetPrice: helmetNo == 2 ? 100 : 0 
   }

   localStorage.setItem("checkoutDetails", JSON.stringify(checkoutDetails));
   navigate("/payment")

  }



  const handleCoupon = (e) => {
    e.preventDefault();

    if (Coupon === "royal10") {
      setApplied(true);
      alert("Congratulations!🎉 Your Coupon Is Applied");
    } else {
      setApplied(false);

      alert("Invalid Coupon😞");
    }
  };
  

  return (
    <div className="main_box">
      <div className="left_div">
        <div className="img_div">
          <h4 className="summary">SUMMARY</h4>
          <img src={bookedBikeDetails.image} alt="" />
          <h2>{bookedBikeDetails.name}</h2>
        </div>
        <div className="info_div">
          <div>
            <div className="time">
              <div className="start_time">
                <p>{bookedBikeDetails.pickUpTime}</p>
                <p>{bookedBikeDetails.pickUpDate}</p>
              </div>

              <p className="to">to</p>
              <div className="end_time">
                <span>{bookedBikeDetails.dropOffTime}</span>
                <br />
                <span>{bookedBikeDetails.dropOffDate}</span>
              </div>
            </div>

            <div className="addres">
              <div>
                <p>Yeshwanthpur (BMTC Bus Station)</p>
                <p>
                  Parking level 1 , public tv building ,yeshvanthpur ttmc,
                  behind Gayathri Temple Rd, Dr.Ambedkar Nagar, Yeswanthpur,
                  Bengaluru, Karnataka 560022
                </p>
              </div>
            </div>
            <div className="minimum">
              <span>Minimum 24.0 hour charges applicable</span>
              <span className="price">
                ₹ {bookedBikeDetails.hourly_rate * 24}
              </span>
            </div>

            <div className="total">
              <span>Total</span>
              <span className="price">₹ {bookedBikeDetails.totalPrice}</span>
            </div>

            <div className="helmet">
              <span>Number of Helmet (?)</span>
              <span>
                <select className="op" onChange={handleHelmet}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </span>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <input
                  onChange={(e) => setCoupon(e.target.value)}
                  style={{ width: "70%", verticalAlign: "bottom" }}
                  className="no-outline"
                  type="text"
                  placeholder="Coupon Code"
                />
                <button
                  variant="contained"
                  size="medium"
                  type="button"
                  className="coupon_button"
                  style={{
                    border: "0",
                    borderRadius: "10px",
                    width: "28%",
                    background: "#FFC600",
                    color: "black",
                    height: "32px",
                    marginTop: "20px",
                  }}
                  onClick={handleCoupon}
                >
                  Apply
                </button>
              </div>
              <div>
                <span style={{ marginTop: "-30px", marginRight: "260px" }}>
                  Km limit (?)
                </span>
                <span style={{ float: "right", marginRight: "20px" }}>
                  {bookedBikeDetails.kilometer_limit} km
                </span>
              </div>
              <div className="km_div">
                <span style={{ marginTop: "-30px", marginRight: "180px" }}>
                  Excess km charges (?)
                </span>
                <span style={{ float: "right", marginRight: "20px" }}>
                  4.0/km
                </span>
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
            {helmetNo == 2 ? (
              <>
                <span className="garage-title">Extra Helmet</span>
                <br />
                <br />
              </>
            ) : null}
            <span className="garage-title">IGST (28%)</span>
            <br />
            <br />
            <span style={{ marginTop: "-80px" }} className="garage-title ef">
              Refundable Deposit
            </span>
            <br />
            <br />

            <h6 className="garage-title amount ref" id="ref">
              Total Payable Amount
            </h6>
          </div>
          <div style={{ marginLeft: "12%" }}>
            <span>&#x20B9;{bookedBikeDetails.totalPrice}.00</span>
            <br />
            <br />
            {helmetNo == 2 ? (
              <>
                <span>&#x20B9;100.00</span>
                <br />
                <br />
              </>
            ) : null}
            <span>
              &#x20B9;{Math.round((bookedBikeDetails.totalPrice / 100) * 28)}.00
            </span>
            <br />
            <br />
            <span>&#x20B9;1500.00</span>
            <br />
            <br />

            <h3 style={{ marginTop: "-3px" }}>₹{totalPaybleAmmount()}</h3>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="make"
          style={{
            background: "#FFC600",
            color: "black",
            width: "80%",
            border: "0",
            borderRadius: "10px",
          }}
          variant="contained"
          size="medium"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};
