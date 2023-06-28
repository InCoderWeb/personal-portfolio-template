"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

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

const keySkils = [
  "MongoDB",
  "FFmpeg",
  "PHP",
  "Codeigniter",
  "JQuery",
  "Ajax",
  "Javascript",
  "Web Services",
]

const Page = () => {
  const socialIcons = [
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/incoderweb",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/incoderweb",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/incoderweb",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/incoderweb",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse ab nostrum quidem molestias porro voluptate repudiandae cumque. Dolorum laudantium eos necessitatibus blanditiis nam nobis?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptates deleniti dicta laborum amet. Quis iure vel velit perferendis sapiente fugit, cumque laudantium? Maxime, ex.
            </p><br/>
            <h3 className="title">Here are some of my tools:</h3>
            <div className="keySkills">
              {keySkils.map((skill, index) => (
                <div className="chip" key={index}>{skill}</div>
              ))}
            </div>
            <div className="socialLinks">
              {socialIcons.map((socialIcon, index) => (
                <Link
                  className="icon"
                  target="_blank"
                  key={index}
                  href={socialIcon.href}
                >
                  {socialIcon.icon}
                </Link>
              ))}
            </div><br/>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Page;
