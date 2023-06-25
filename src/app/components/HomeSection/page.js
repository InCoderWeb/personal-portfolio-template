"use client";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="homeSection">
        <div className="left">
          <span>Hey There 👋 I am</span>
          <h3>Praduman Tiwari</h3>
          <h4>
            Professional <span>Mern Stack Developer</span>
          </h4>
          <p>
          Experienced MERN stack developer crafting seamless web solutions with expertise in JavaScript, React, Node.js, and MongoDB.
          </p>
          <div className="actionsButtons">
            <button
              className="btn primaryBtnLite"
              onClick={() => {
                window.innerWidth <= 890
                  ? window.scrollTo(0, 3430)
                  : window.scrollTo(0, 3230);
              }}
            >
              Contact Me
            </button>
            <button className="btn primaryBtnDark">Hire Me</button>
          </div>
        </div>
        <div className="right">
          <img src={"/heroImage.png"} width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default Page;
