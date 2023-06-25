"use client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const Page = ({ type }) => {
  if (type === "project") {
    return (
      <>
        <div className="projectCard">
          <div className="cardImage">
            <img
              src={
                "https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg"
              }
            />
          </div>
          <div className="title">Startup landing page</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae dolor ultrices libero.
          </div>
        </div>
      </>
    );
  } else if (type === "post") {
    return (
      <>
        <div className="postCard">
          <div className="cardImage">
            <Link href={"#"}><img
              src={
                "https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-1.jpg"
              }
            /></Link>
          </div>
          <Link href={"#"}><div className="title">Startup landing page</div></Link>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae dolor ultrices libero.
          </div>
          <Link href={"#"} className="readMore">Read More</Link>
        </div>
      </>
    );
  }
};

export default Page;
