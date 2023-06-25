"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Page = () => {
  const skillData = [
    {
      name: "HTML",
      percent: "80%",
    },
    {
      name: "CSS",
      percent: "90%",
    },
    {
      name: "JavaScript",
      percent: "50.5%",
    },
    {
      name: "React",
      percent: "20%",
    },
  ];

  const socialIcons = [
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/incoderweb",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://www.facebook.com/incoderweb",
    },
    {
      icon: <FaGithub />,
      href: "https://www.github.com/incoderweb",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/incoderweb",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 575) {
        document.querySelectorAll(".progressBar").forEach((el, index) => {
          el.style.width = skillData[index].percent;
        });
      }
    });
  }, []);

  return (
    <>
      <div className="aboutSection" id="about">
        <div className="title">About Me</div>
        <div className="wrapper">
          <div className="left">
            <h3>My Skills & Tools</h3>

            <div className="skills">
              {skillData.map((skill, index) => (
                <div className="progressWrapper" key={index}>
                  <p>{skill.name}</p>
                  <div className="progress">
                    <div
                      className="progressBar"
                      data-percent={skill.percent}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="title">Connect With Me</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              reiciendis quisquam, consequuntur quod cumque harum. Veniam et
              explicabo facere accusantium, necessitatibus tempora architecto
              nihil veritatis aut fuga atque, facilis molestiae.
            </p>
            <div className="socialLinks">
              {socialIcons.map((socialIcon, index) => (
                <Link className="icon" key={index} href={socialIcon.href}>
                  {socialIcon.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
          <hr />
      </div>
    </>
  );
};

export default Page;
