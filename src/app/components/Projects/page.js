"use client";
import React, { useState } from "react";
import Card from '@/app/components/Card/page'

const Page = () => {
  return (
    <>
      <div className="projectsSection" id="projects">
        <div className="topWrapper">
          <p>Check out some of</p>
          <h3 className="title">My Recent Projects</h3>
          <div className="desc">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </div>
        </div>
        <div className="projectsGallery">
            <div className="projects">
                <Card type={"project"} />
                <Card type={"project"} />
                <Card type={"project"} />
                <Card type={"project"} />
                <Card type={"project"} />
                <Card type={"project"} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Page;
