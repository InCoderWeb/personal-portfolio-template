"use client";
import React, { useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Page = () => {

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        document.querySelector(".backToTop").classList.add("active");
      } else {
        document.querySelector(".backToTop").classList.remove("active");
      }
    })
  }, []);

  return (
    <>
        <button className='backToTop' title='Back to top' onClick={() => window.scrollTo(0,0)}><FaArrowUpLong/></button>
    </>
  )
}

export default Page