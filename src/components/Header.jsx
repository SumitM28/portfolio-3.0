"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { TwitterIcon } from "./Icons/TwitterIcon";
import { GithubIcon } from "./Icons/GitHubIcon";
import { LinkedInIcon } from "./Icons/LinkedInIcon";
import LeetcodeIcon from "./Icons/LeetcodeIcon";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/projects",
    name: "Projects",
  },
//   {
//     href: "/services",
//     name: "Services",
//   },
  {
    href: "/contact",
    name: "Contact",
  },
];

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full fixed z-20 px-4 py-3">
      <div className="flex justify-between items-center py-4  max-w-screen-xl mx-auto bg-slate-100 rounded-md px-4">
        {/* logo */}
        <div
          // className="text-xl h-14 w-14 bg-white flex items-center justify-center rounded-full  cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <p className="text-black text-xl font-semibold">Sumit Mahour</p>
        </div>

        {/* page links */}
        <div className="  gap-4 hidden md:flex">
          {links.map((link, idx) => (
            <Link href={link.href} className="text-lg relative group" key={idx}>
              <p className="text-black text-base">{link.name}</p>
              <span
                className={
                  pathname === link.href
                    ? "bg-black w-full h-[2px] absolute "
                    : "bg-black w-0 h-[2px] absolute group-hover:w-full transition-all ease"
                }
              ></span>
            </Link>
          ))}
        </div>

        {/* social links */}
        <div className=" gap-4 hidden md:flex">
          <Link
            href={"https://www.linkedin.com/in/sumit-mahour/"}
            className="hover:translate-y-[-4px] transition-all"
            target="_blank"
          >
            <LinkedInIcon className={""} />
          </Link>
          <Link
            href={"https://github.com/SumitM28"}
            className="hover:translate-y-[-4px] transition-all"
            target="_blank"
          >
            <GithubIcon  className={"text-black rounded-full"} />
          </Link>
          <Link
            href={"https://leetcode.com/sumitM28/"}
            className="hover:translate-y-[-4px] transition-all"
            target="_blank"
          >
            <LeetcodeIcon className={""} />
          </Link>

          <Link
            href={"https://twitter.com/SumitMa65314533"}
            className="hover:translate-y-[-4px] transition-all"
            target="_blank"
          >
            <TwitterIcon className={""} />
          </Link>

          
        </div>

        <div className="md:hidden">
          <GiHamburgerMenu
            size={25}
            className="text-black"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed h-screen w-full top-0 left-0 bottom-0 flex items-center md:hidden justify-center  backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="w-[320px] bg-stone-100 flex flex-col items-center gap-16  py-8 px-5 rounded-xl relative"
            whileInView={{
              scale: 1.1,
            }}
          >
            <IoMdClose
              size={25}
              className=" text-light absolute top-3 right-3 hover:scale-120"
              onClick={() => setIsOpen(false)}
            />
            {/* page links */}
            <div className="  gap-4 flex flex-col items-center">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  className="text-lg relative group"
                  key={idx}
                  onClick={() => setIsOpen(false)}
                >
                  <p className=" text-light">{link.name}</p>
                  <span
                    className={
                      pathname === link.href
                        ? "w-full h-[2px] absolute  bg-light"
                        : "bg-light w-0 h-[2px] absolute group-hover:w-full transition-all ease "
                    }
                  ></span>
                </Link>
              ))}
            </div>

            {/* social links */}
            <div className=" gap-4 flex">
              <Link
                href={"https://www.linkedin.com/in/sumit-mahour/"}
                className="hover:translate-y-[-4px] transition-all"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <LinkedInIcon className={""} />
              </Link>

              <Link
                href={"https://github.com/SumitM28"}
                className="hover:translate-y-[-4px] transition-all"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <GithubIcon
                  className={
                    " rounded-full text-light "
                  }
                />
              </Link>
              <Link
                href={"https://leetcode.com/sumitM28/"}
                className="hover:translate-y-[-4px] transition-all"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <LeetcodeIcon className={""} />
              </Link>
              <Link
                href={"https://twitter.com/SumitMa65314533"}
                className="hover:translate-y-[-4px] transition-all"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <TwitterIcon className={""} />
              </Link>

              
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
}

export default Header;
