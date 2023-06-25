"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Page = () => {
  const skillData = [
    {
      name: "JavaScript",
      percent: "80%",
    },
    {
      name: "React.JS",
      percent: "75%",
    },
    {
      name: "NODE.JS",
      percent: "70%",
    },
    {
      name: "PHP",
      percent: "90%",
    },
    {
      name: "Mongo DB",
      percent: "70%",
    },
    {
      name: "NEXT.JS",
      percent: "80%",
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
            Feel free to reach out to me for collaborations, job opportunities, or any inquiries. You can connect with me via email at <Link href="mailto:pradumantiwary2014@gmail.com">pradumantiwary2014@gmail.com</Link>, where I'll be happy to discuss your project or answer any questions you may have.<br/><br/>

            Additionally, you can follow me on social media to stay updated with my latest projects, articles, and insights. Find me on [insert social media platforms] using the handle [your handle] for more engaging discussions and to explore my work further. I look forward to connecting with you!
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
