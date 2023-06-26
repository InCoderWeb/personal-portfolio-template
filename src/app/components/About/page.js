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
  "API",
  "JSON",
  "CURL",
  "Facrbook API",
  "Cron",
  "Zapier Integration",
  "Rest API",
  "Node.JS",
  "Express",
  "React.JS",
  "AJAX",
  "HTML",
  "Next.JS",
]

const Page = () => {
  const socialIcons = [
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/praduman.k.tiwari",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/+917828132331",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/pradumandev",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/praduman-tiwari-49910a174/",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/praduman1992",
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
              Feel free to reach out to me for collaborations, job
              opportunities, or any inquiries. You can connect with me via email
              at 
              <Link href="mailto:pradumantiwari@outlook.com">
                pradumantiwari@outlook.com
              </Link>
              , where I will be happy to discuss your project or answer any
              questions you may have.
              <br />
              <br />
              Additionally, you can follow me on social media to stay updated
              with my latest projects, articles, and insights. Find me on social
              media platforms for more engaging discussions and to explore my
              work further. I look forward to connecting with you!
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
