import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center fixed top-0 left-0 right-0">
        <div className="w-16 p-2">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:grid md:gap-4 md:grid-cols-4 md:grid-rows-1">
          <div className="text-slate-400 underline">
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/">Offer</Link>
          </div>
          <div>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <button className="md:hidden lg:hidden">
          <DehazeIcon />
        </button>
      </div>
    </>
  );
};

export default Navbar;
