"use client";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="homeSection">
        <div className="left">
          <span>Hey There 👋 I am</span>
          <h3>Jhon Deo</h3>
          <h4>
            Professional <span>Web Developer</span>
          </h4>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi earum quasi quos eaque deleniti ratione molestiae et quaerat quas?
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
          <img src={"https://drive.google.com/uc?id=1DXKOaZJ72G-FG07apoiXRDZXQ9KUNuLp&export=view"} width={450} height={450} />
        </div>
      </div>
    </>
  );
};

export default Page;
