import React from "react";
import { FaCode, FaObjectGroup, FaUser, FaUsers } from "react-icons/fa6";

const Page = () => {
  const cards = [
    {
      icon: <FaUser />,
      title: "User Research",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
    },
    {
      icon: <FaObjectGroup />,
      title: "Visual Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
    },
    {
      icon: <FaUsers />,
      title: "User Testing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
    }
  ];

  return (
    <>
      <div className="ServicesSection">
        <div className="topWrapper">
          <p>What I Offer?</p>
          <h3 className="title">My Services</h3>
          <div className="desc">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </div>
        </div>
        <div className="serviceCards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="icon">{card.icon}</div>
              <div className="title">{card.title}</div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
