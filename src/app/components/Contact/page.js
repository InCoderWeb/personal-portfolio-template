import React from "react";

const Page = () => {
  return (
    <>
      <div className="contactSection">
        <div className="topWrapper">
          <p>Contact With Me</p>
          <h3 className="title">Have an Project in Mind?</h3>
          <div className="desc">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </div>
        </div>
        <div className="contactForm">
          <div className="inputFields">
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Company (Optional)" />
          </div>
          <div className="inputFields">
            <input type="email" placeholder="Enter Your Email" />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="inputFields w-full flex">
            <textarea placeholder="Enter Your Message"></textarea>
          </div>
          <button className="btn primaryBtn mb-24">Contact Me</button>
        </div>
      </div>
    </>
  );
};

export default Page;
