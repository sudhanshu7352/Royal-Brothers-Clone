import { Link } from "react-router-dom"

export const Tariff = () =>{
    return (
      
        <Link style={{textDecoration:"none",color:"black"}} to="/tariff">
          <p style={{ color: "black", marginLeft: "40px" }}>Tariff</p>
        </Link>
      
    );
}