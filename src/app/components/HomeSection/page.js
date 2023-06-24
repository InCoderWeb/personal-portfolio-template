import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="homeSection">
        <div className="left">
          <span>Hey There 👋 I am</span>
          <h3>Praduman Tiwari</h3>
          <h4>Professional <span>Graphic Designer</span></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum consequat convallis.</p>
          <div className="actionsButtons">
            <button className="btn primaryBtnLite">Contact Me</button>
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

export default page;
