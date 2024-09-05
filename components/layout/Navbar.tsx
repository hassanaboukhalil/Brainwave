"use client";
import links from "@/constants/links";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [currentHash, setCurrentHash] = useState(
    location.hash ? location.hash : ""
  );

  function selectNavLink(linkHref: string) {
    setCurrentHash(linkHref);
  }

  return (
    <nav className="hidden navbar lg:flex items-center text-xl font-medium">
      {links.map((link) => {
        return (
          <Button
            asChild
            key={link.id}
            // className="flex items-center gap-x-2 hover:text-color-1"
            className={`flex items-center gap-x-2 hover:text-color-1 ${
              currentHash === link.href ? "text-white" : "text-txtColor-3"
            }`}
            variant={"link"}
            onClick={() => selectNavLink(link.href)}
          >
            <Link href={link.href}>
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        );
      })}
      <Button
        asChild
        key="login"
        className="flex items-center gap-x-2 bg-inherit"
        variant={"link"}
      >
        <Link href="/login" className="text-txtColor-3 hover:text-color-1">
          <span className="uppercase">Login</span>
        </Link>
      </Button>
    </nav>
  );
};
export default Navbar;
