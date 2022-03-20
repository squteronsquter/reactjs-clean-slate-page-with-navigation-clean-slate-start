import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const company = "Digital Mind Solutions";
  return (
    <div className="bg-slate-800 text-slate-300 text-center p-4 fixed bottom-0 left-0 right-0">
      <div>
        <p>
          &copy; {year} All rights reserved by {company}. Latest update on
          {" " + day + " " + month + ", " + year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
