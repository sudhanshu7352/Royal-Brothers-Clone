import React from 'react'
import {useNavigate} from 'react-router-dom'

export const BookedBike = (props) => {

    const navigate = useNavigate()

   

   const bikeScheduleDetails = JSON.parse(
     localStorage.getItem("bikeScheduleDetails")
   );

   const bikeDetails = props.item || JSON.parse(localStorage.getItem("bikeDetails")) ;

//    console.log(bikeScheduleDetails, 22);

   const convertDateTime = (time) => {

       return (
           new Date(time).getHours() +
         ":" +
         new Date(time).getMinutes() +
         " " +
         (new Date(time).getHours() > 12
           ? "PM"
           : "AM")
       )
       
   }

    const DateFormula = (date1, date2) => {
      return (
        (Math.abs(new Date(date1) - new Date(date2)) / (1000 * 3600 )) *
        bikeDetails.hourly_rate
      );
    };

    const handleBookedBike = () => {
      const bookedBikeDetails = {
        pickUpDate: new Date(bikeScheduleDetails.pickUpDate).toDateString(),
        pickUpTime: convertDateTime(bikeScheduleDetails.pickUpTime),
        dropOffDate: new Date(bikeScheduleDetails.dropOffDate).toDateString(),
        dropOffTime: convertDateTime(bikeScheduleDetails.dropOffTime),
        totalPrice: DateFormula(
          bikeScheduleDetails.pickUpDate,
          bikeScheduleDetails.dropOffDate
        ),
        bikeId: bikeDetails._id,
        image: bikeDetails.image,
        name: bikeDetails.name,
        hourly_rate: bikeDetails.hourly_rate,
        kilometer_limit:bikeDetails.kilometer_limit
      };

      console.log(bookedBikeDetails);

      localStorage.setItem("bookedBikeDetails", JSON.stringify(bookedBikeDetails));
      navigate("/checkout")


      
    };


  return (
    <>
      <div className="mapbikes" key={bikeDetails._id}>
        <div>
          <img
            className="imgData"
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/zero-deposit-8bf3350f651efc75cb1e263459707c81cdd271347d2ba925cd2eb740243474d5.png"
            alt=""
            width={"26px"}
          />
          <span className="spanZero">zero deposit</span>
        </div>
        <br />
        <h6>{bikeDetails.name}</h6>
        <div className="imbikes">
          {" "}
          <img
            src={bikeDetails.image}
            alt=""
            width={bikeDetails.name === "Pulsar" ? "80%" : "auto%"}
          />{" "}
        </div>
        <br />
        <p className="available">Available at</p> <br />
        {/* { <select>
                    <option value="">Location</option>
                    {bikeDetails.locations.map((s) => {
                      return <option value="">{s.name}</option>;
                    })}
                  </select> } */}
        <div className="timingbike">
          <div>
            <p className="arrivetime" style={{fontSize:"11px"}}>
              {convertDateTime(bikeScheduleDetails.pickUpTime)}
            </p>
            <p className="arrivetime" style={{fontSize:"11px"}}>
              {new Date(bikeScheduleDetails.pickUpDate).toDateString()}
            </p>
          </div>
          <div className="timingTo">to</div>
          <div>
            <p className="arrivetime" style={{fontSize:"11px"}}>
              {convertDateTime(bikeScheduleDetails.dropOffTime)}
            </p>
            <p className="arrivetime" style={{fontSize:"11px"}}>
              {new Date(bikeScheduleDetails.dropOffDate).toDateString()}
            </p>
          </div>
        </div>
        <div className="prizebike">
          <div>
            <p>
              ₹
              {DateFormula(
                bikeScheduleDetails.dropOffDate,
                bikeScheduleDetails.pickUpDate
              )}
            </p>
            <span>{bikeDetails.kilometer_limit + " km included"}</span>
          </div>
          {/* <Link to="/checkout">
                      </Link> */}
          <div>
            <button onClick={handleBookedBike} className="Boo">
              Book{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
