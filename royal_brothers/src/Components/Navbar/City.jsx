import React from "react";
import "./City.css";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import Popup from "reactjs-popup";
import { BsChevronDown } from "react-icons/bs";
import InputBase from "@mui/material/InputBase";

const contentStyle = {
  maxWidth: "800px",
  width: "100%",
  background: "white",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  height: "530px",
  marginTop: "80px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  overflow: "scroll",
  overflowX: "hidden",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const City = () => {
  return (
    <div>
      <Popup
        trigger={
          <div>
            <div
              className="dropdown"
              style={{ marginLeft: "35px", cursor: "pointer" }}
            >
              <button className="citybtn">
                <img
                  style={{
                    height: "100%",
                    marginRight: "15px",
                    paddingTop: "10%",
                  }}
                  src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(2).png"
                  alt="location"
                ></img>

                <span>Delhi</span>
                <BsChevronDown
                  style={{
                    marginLeft: "7px",
                    paddingTop: "2%",
                  }}
                />
              </button>
            </div>
          </div>
        }
        modal
        contentStyle={contentStyle}
      >
        {(close) => (
          <div className="modal">
            <a
              className="close"
              style={{
                float: "right",
                marginRight: "5px",
                cursor: "pointer",
                fontSize: "25px",
              }}
              onClick={close}
            >
              &times;
            </a>
            <div className="royalHead">
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/logo-b03af389c15608bf4fa52378f448a48a9c8f92f70242cc88340e971e7599d6ae.png"
                alt="royal brothers"
                width={125}
              />
              <div className="pipe"></div>
              <p className="bikeP">Bike Rentals</p>
            </div>

            <Search style={{ backgroundColor: "white", marginTop: "10px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search or type city" />
            </Search>
            <div className="citiesName">
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/039/original/Agra_new.jpg?1558599458"
                    alt="Agra"
                    width={160}
                  />
                  <p className="cityName">Agra</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_b8d1eb5783c996a077aff887d35e4168.jpg?1558599488"
                    alt="Ahmedabad"
                    width={160}
                  />
                  <p className="cityName">Ahmedabad</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/101/original/Amritsar.jpg?1568037649"
                    alt=" Amritsar"
                    width={160}
                  />
                  <p className="cityName">Amritsar</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/017/original/Andaman-_-Nicobar_b5a3ba5c464968f274dfb7a98bcc4dbc.jpg?1558599551"
                    alt=" Andaman Nicobar"
                    width={160}
                  />
                  <p className="cityName">Andaman Nicobar</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/001/original/Bangalore_1cf1aa53741a94edc3532f7b2b583c52.jpg?1558599565"
                    alt="Bangalore"
                    width={160}
                  />
                  <p className="cityName">Bangalore</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/028/original/Bankok_efd1b11328e1ac61488cac98a15dc584.jpg?1558599580"
                    alt=" Bangkok"
                    width={160}
                  />
                  <p className="cityName">Bangkok</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/024/original/Chandigarh_72374d6c6de8b70d5b4ea5c05c59ba32.jpg?1558599669"
                    alt="  Chandigarh"
                    width={160}
                  />
                  <p className="cityName"> Chandigarh</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/018/original/Chennai_e20539d5200238901011bdc1bb2e5a7f.jpg?1558599681"
                    alt=" Chennai"
                    width={160}
                  />
                  <p className="cityName">Chennai</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/020/original/Coimbatore_0916e4a9a1cbd3a31eaa15b3a54cc7d2.jpg?1558599789"
                    alt="Coimbatore"
                    width={160}
                  />
                  <p className="cityName">Coimbatore</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/034/original/Delhi_21f83b0bf9a5a2c816623238b7628e52.jpg?1558599930"
                    alt="Delhi"
                    width={160}
                  />
                  <p className="cityName">Delhi</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/046/original/Goa_2509358334abe698322e4f7523b3356b.jpg?1558599985"
                    alt=" Goa"
                    width={160}
                  />
                  <p className="cityName">Goa</p>
                </a>
              </div>
              <div className="Container">
                <a>
                  <img
                    className="citiesDiv"
                    src="https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/042/original/Kolkata_656fd6c811baa1db3af9c01e0a1c29f8.jpg?1558600283"
                    alt=" Kolkata"
                    width={160}
                  />
                  <p className="cityName"> Kolkata</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
