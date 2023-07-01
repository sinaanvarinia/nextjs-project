import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/kosar.png" width={115} height={43} alt="logo image" />
        </Link>
      </div>

      <ul className="hidden xl:flex text-small gap-7">
        {NavLinks.map((link) => (
          <Link key={link.key} href={link.href}>
            {link.text}
          </Link>
        ))}
      </ul>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            user photo<Link href="/">share my work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
