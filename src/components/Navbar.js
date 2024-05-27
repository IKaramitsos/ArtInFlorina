import React, {useState} from "react";
import Logo from  "../assets/ArtInFlorinaLogo.jpg";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  // State to manage the visibility of the navbar in mobile view
  const [openLinks, setOpenLinks] = useState(false);
 
  // Function to toggle the visibility of the navbar links
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to ="/">
        <img src={Logo} />
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/event"> Events </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/event"> Events </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;