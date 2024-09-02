"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import links from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "@/components/layout/Logo";
import MenuIcon from "../../assets/socials/hamburger.svg";
import React, { useState } from "react";
import { LogIn } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="lg:hidden flex align-middle">
      <Sheet>
        <SheetTrigger>
          <Image
            src={MenuIcon}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-color-8 opacity-90"
          aria-labelledby="sidebar-heading"
          aria-describedby="sidebar-description"
        >
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
            id="sidebar-heading"
          >
            <Logo />
          </Link>
          <div className="mobilenav-sheet" id="sidebar-description">
            <SheetClose asChild>
              <nav className="flex h-screen flex-col justify-between pt-16 text-white">
                <ul>
                  {links.map((link) => {
                    return (
                      <li key={link.label} className="border-b-[1px] p-1">
                        <Button
                          asChild
                          key={link.href}
                          variant="link"
                          className="hover:text-color-1"
                          // variant={pathname === link.href ? "default" : "link"}
                        >
                          <Link
                            href={link.href}
                            className="flex items-center gap-x-2 "
                          >
                            {link.icon}{" "}
                            <span className="capitalize">{link.label}</span>
                          </Link>
                        </Button>
                      </li>
                    );
                  })}

                  <li key="login" className="border-b-[1px] p-1">
                    <Button
                      key="login"
                      variant="link"
                      asChild
                      // variant={pathname === link.href ? "default" : "link"}
                    >
                      <Link
                        href="/login"
                        className="flex items-center gap-x-2 "
                      >
                        <LogIn /> <span className="uppercase">Login</span>
                      </Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
