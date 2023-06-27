import React from "react";
import Card from "@/app/components/Card/page";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="blogsSection" id="blogs">
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
          <Link href="/blogs#"><button className="btn primaryBtn">Read More</button></Link>
        </div>
      </div>
    </>
  );
};

export default Page;
