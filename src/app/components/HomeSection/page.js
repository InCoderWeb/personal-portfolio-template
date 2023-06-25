"use client";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="homeSection">
        <div className="left">
          <span>Hey There 👋 I am</span>
          <h3>Praduman Tiwari</h3>
          <h4>
            Professional <span>Graphic Designer</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            interdum consequat convallis.
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
          <Image src={"/heroImage.png"} width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default Page;
