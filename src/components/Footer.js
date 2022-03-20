import React from "react";

const Footer = () => {
  const currentYear = new Date(2022, 1, 20);
  const date = currentYear.getFullYear();
  const company = "Digital Mind Solutions";
  return (
    <div className="bg-slate-800 text-slate-300 text-center p-4 fixed bottom-0 left-0 right-0">
      <div>
        <p>
          &copy; {date} All rights reserved by {company}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
