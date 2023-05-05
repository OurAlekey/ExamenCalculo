import React, { useEffect, useRef, useState } from "react";
export const AppTopBar2 = () => {

  return (
    <div
      className="navbar navbar-expand-lg navbar-dark "
      style={{ background: "#343638" , height: "75px" }}

    >
      <div className="container-xl">
        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav mr-auto">
            <li
              style={{
                fontSize: "20px",
                borderRight: "0.5px  solid #F2F2F2",
                marginRight: "5px",
                color: "white",
              }}
            >
              <p
                style={{
                  marginRight: "50px",
                }}
                className="nav-item active"
              >
              Calculo 1 , parcial 2
              </p>
            </li>
            <li
              style={{
                fontSize: "20px",
                marginLeft: "15px",
                color: "white",
              }}
            >
              <p
                style={{
                  marginRight: "50px",
                }}
                className="nav-item active"
              >
            Angel Alberto Rancancoj Quijivix
              </p>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  );
};
