'use client'
import Link from "next/link";
import React from "react";
import FooterContactForm from "./FooterContactForm";
import FooterLearn from "./FooterLearn";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" w-full bg-black  mt-12">
      <section className="flex flex-col md:flex-row">
        <FooterLearn />
        <FooterContactForm />
      </section>
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 ">

      <div className="flex justify-center items-center gap-x-2 text-sm text-white">
          <p className="">
            Developed
            <span>&nbsp;💖&nbsp;with&nbsp;</span>
          </p>
          <Link href={"https://nextjs.org/"} target="_blank">
            <Image src="/next1.png" alt="next.js 14" width={24} height={24} className="shadow-md shadow-gray-300"/>
          </Link>
          <span className="text-white">&nbsp;&&nbsp;</span>
          <Link href={"https://sanity.io/"} target="_blank">
            <Image src="/sanity.png" alt="sanity" width={24} height={24} className="shadow-md shadow-gray-300" />
          </Link>
        </div>
      
        <div>
          <p className="text-xs text-white">
            © 2024 <span className="text-white font-bold">&nbsp;Gloss&</span>
            <span className="text-white font-bold">
              Grit&nbsp;
            </span>{" "}
            All rights reserved.
          </p>
        </div>



      </section>

    </footer>
  );
}
