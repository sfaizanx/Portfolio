import React from "react";

const Header = ({ title }) => {
  return <div className="text-[20px] md:text-[80px] lg:text-[100px] font-extrabold" style={{
          WebkitTextStroke: "1px white",
          color: "black",
        }}>{title}</div>;
};

export default Header;

{
  /* <div
        className="text-[100px] font-extrabold text-transparent"
        style={{ WebkitTextStroke: "1px black" }}
      >
        TECH STACK  
      </div> */
}
