'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "../components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (

    // TODO: If you activate 3 or more social icons, make sure to update the Navbar styling accordingly.

    // Social Icons
    <nav className="flex gap-2 ">
      <Link href={"http://https://www.youtube.com/"} target="_blank">
        <Youtube className={`w-6 h-6`} />
      </Link>
      <Link href={"http://linkedin.com/in/maryam-faizan-b86965323"} target="_blank">
        <Linkedin className={`w-6 h-6`} />
      </Link> 
      {/* <Link href={"http://www.twitter.com"} target="_blank">
        <Twitter className={`w-4 h-4 `} fill="light" />
      </Link> */}
      {/* <Link href={"http://www.facebook.com"} target="_blank">
        <Facebook className={`w-4 h-4`} />
      </Link> */}
      <Link href={"https://github.com/maryamfaizan53"} target="_blank">
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
