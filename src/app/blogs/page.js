"use client";
import React, { useState, useRef } from "react";
import Card from "@/app/components/Card/page";
import ScrollToTop from "@/app/components/ScrollToTop/page";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import Link from "next/link";

const filterData = [
  {
    title: "React.JS",
    count: 50,
  },
  {
    title: "Node.JS",
    count: 75,
  },
  {
    title: "MERN Stack",
    count: 65,
  },
  {
    title: "PHP",
    count: 75,
  },
  {
    title: "Laravel",
    count: 75,
  },
  {
    title: "Python",
    count: 75,
  },
  {
    title: "Django",
    count: 75,
  },
  {
    title: "Laravel",
    count: 75,
  },
];

export default function Page() {
  const [focus, setFocus] = useState(false);
  const [clearSearch, setClearSearch] = useState(false);
  const searchRef = useRef("");
  return (
    <>
      <ScrollToTop />
      <div className="allBlogsSection">
        <div className={`searchBoxWrapper ${focus ? "active" : ""}`}>
          <div className="searchBox" onClick={() => {searchRef.current.focus()}}>
            <FaMagnifyingGlass />
            <input
              type="text"
              ref={searchRef}
              placeholder="Search Blogs"
              onBlur={() => {
                setFocus(false);
              }}
              onFocus={() => {
                !focus ? setFocus(true) : "";
              }}
              onKeyUp={() => {
                searchRef.current.value != ""
                  ? setClearSearch(true)
                  : setClearSearch(false);
              }}
            />
            {clearSearch ? (
              <FaXmark
                onClick={() => {
                  searchRef.current.value = "";
                  setClearSearch(false);
                }}
                className="cursor-pointer ml-2"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="postsSection">
          <div className="filterSidebar">
            <div className="title">Filters</div>
            <div className="filters">
              {filterData.map((item, index) => {
                return (
                  <Link href="/blogs" className="filter" key={index}>
                    <p>{item.title}</p>
                    <span>{item.count}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="posts">
            <Card type={"post"} className="scale-95" postURL="/post/15792486" />
            <Card type={"post"} className="scale-95" postURL="/post/15792486" />
            <Card type={"post"} className="scale-95" postURL="/post/15792486" />
            <Card type={"post"} className="scale-95" postURL="/post/15792486" />
            <button className="btn primaryBtn">Load More</button>
          </div>
        </div>
        {/* <Card type={"post"} /> */}
      </div>
    </>
  );
}
