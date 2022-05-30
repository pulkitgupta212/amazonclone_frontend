import React from "react";
import Header from "./Headers/header";
import Header1 from "./Headers/subheader";
import Fotter from "./Fotter";

export default function Cart() {
  return (
    <>

<Header />
      <div>
       
        <Header1 />
        <div
          style={{
            backgroundColor: "white",
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flexlex",
              justifyContent: "center",
              height: "auto",
              width: "100%",
            }}
          >
            <img style={{ height: "200px", width: "200px" }} />
            <h1>
              {" "}
              <b>Price: </b>
            </h1>
          </div>
          <div
            style={{ paddingTop: "20px", marginLeft: "200px", height: "100%" }}
          >
            <button>Delete</button>
          </div>
          <div style={{ width: "300px", height: "100px" }}>
            <button style={{ width: "100px" }}>-</button>
            <button style={{ width: "100px" }}>+</button>
          </div>
          ) 
        </div>
      </div>
      <Fotter />
    </>
  )
}
