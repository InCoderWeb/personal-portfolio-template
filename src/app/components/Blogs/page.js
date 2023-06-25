import React from "react";
import Card from "@/app/components/Card/page";

const Page = () => {
  return (
    <>
      <div className="blogsSection">
        <div className="topWrapper">
          <p>Recent Posts</p>
          <h3 className="title">From The Blog</h3>
          <div className="desc">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </div>
        </div>
        <div className="blogPosts">
          <Card type={"post"} />
          <Card type={"post"} />
          <Card type={"post"} />
        </div>
        <div className="action flex w-full justify-center">
          <button className="btn primaryBtn">Load More</button>
        </div>
      </div>
    </>
  );
};

export default Page;
