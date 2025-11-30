import React from "react";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="InternBoys Logo" className="sm:h-10 h-8 w-auto" />
    </div>
  );
}
