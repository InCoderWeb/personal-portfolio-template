"use client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const Page = ({ type, className, postURL }) => {
  console.log(postURL);
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
        <div className={`postCard ${className}`}>
          <div className="cardImage">
            <Link href={postURL}><img
              src={
                "https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-1.jpg"
              }
            /></Link>
          </div>
          <Link href={postURL}><div className="title">Startup landing page</div></Link>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae dolor ultrices libero.
          </div>
          <Link href={postURL} className="readMore">Read More</Link>
        </div>
      </>
    );
  }
};

Page.defaultProps = {
  postURL: "/post/",
}

export default Page;
