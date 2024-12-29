'use client'
import Link from "next/link";
import React from "react";
import { Youtube } from "./icons";

export default function FooterLearn() {
  return (
    <section className=" bg-black px-6 sm:px-8 md:px-12 py-6 flex flex-col items-center justify-between gap-y-4  w-full md:w-1/2 ">
      <h4 className="text-2xl  xs:text-4xl sm:text-4xl lg:text-5xl font-semibold text-white uppercase ">
        <span className="text-white font-bold">Become a diva <br/></span>
        &nbsp;Join Us for FREE
      </h4>
      <Link
        href={"https://www.youtube.com/"}
        target="_blank"
        className=" bg-black text-white px-6 py-3 text-xl shadow-md shadow-gray-300  rounded-xl  hover:bg-white hover:text-black font-semibold w-auto text-center uppercase flex items-center gap-x-2 "
      >
        Watch on <Youtube className={"w-8 h-8 inline"} />
      </Link>
    </section>
  );
}
