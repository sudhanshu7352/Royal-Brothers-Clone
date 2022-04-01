import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [captcha, setCaptcha] = React.useState(false);

  const [userDetails, setUserDetails] = React.useState({
    email: "",
    name: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(userDetails);
    setUserDetails({
      email: "",
      name: "",
      number: "",
      password: "",
    });
  };

  const handleCaptcha = () => {
    setCaptcha(true);
  };

  return (
    <div className="login">
      <p className="head">Rent . Ride . Explore</p>

      <div className="box">
        <div className="flex1">
          <p>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              LOGIN
            </Link>
          </p>
          <p>SIGN UP</p>
        </div>

        <input
          className="inp"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name as per Aadhaar / Passport"
        />
        <input
          className="inp"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />

        <p className="ph">Mobile</p>
        <div className="phone">
          <input type="number" placeholder="+91" />
          <input type="number" name="number" onChange={handleChange} />
        </div>

        <input
          className="inp"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />

        <button onClick={handleSubmit} className="btn">
          Sign Up
        </button>
      </div>
    </div>
  );
};
