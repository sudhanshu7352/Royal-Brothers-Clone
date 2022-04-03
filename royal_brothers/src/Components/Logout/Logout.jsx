import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {logoutRequest} from "../../Redux/Login/action"
import { useDispatch } from 'react-redux';

export const Logout = ({name}) => {

    const dispatch = useDispatch()

    const handleLogout =() => {
        localStorage.removeItem("userDetailsRoyalBrothers")
        dispatch(logoutRequest())
    }

    return (
      <div>
        <div
          className="dropdown"
          style={{ marginLeft: "35px", cursor: "pointer" }}
        >
          <button style={{ width: "150px" }} className="dropbtn">
            {name}
            <img
              style={{ height: "8px", marginTop: "11px", marginLeft: "20px" }}
              src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png"
              alt="arrow"
            ></img>
          </button>

          <div style={{ textAlign: "left" }} className="dropdown-content">
            <a href="#">
              <SportsMotorsportsIcon />
              My Rides
            </a>
            <a href="#">
              <PersonIcon />
              My Profile
            </a>
            <a href="#" onClick={handleLogout}>
              <LogoutIcon />
              Logout
            </a>
          </div>
        </div>
      </div>
    );
}