import React, { useContext } from "react";
import './userDashboard.css';
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSelectOption }) => {

  const {token, setToken}=useContext(StoreContext);
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token")
    setToken("");
    navigate("/");
  } 
 
  return (
    <nav className="dashboard-navbar">
      <ul>
        <li>
          <button onClick={() => onSelectOption("myDonations")}>My Donations</button>
        </li>
        <li>
          <button onClick={() => onSelectOption("editProfile")}>Edit Profile</button>
        </li>
        <li onClick={logout}>
          <button onClick={() => onSelectOption("logout")} className="logout-button">Logout</button>
        </li> 
      </ul>
    </nav>
  ); 
};

export default Navbar;
