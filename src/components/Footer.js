import React from "react";

export const Footer = () => {
  let footerSyle = {
    position: "absolute",
    top: "95vh",
    width: "100%",
  };

  return (
    <div
      className="bg-dark text-light mx-200 text-center bottom py-3"
      style={footerSyle}
    >
      All rights reserved 2021
    </div>
  );
};
