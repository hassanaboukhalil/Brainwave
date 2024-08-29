// "use client";
import links from "@/constants/links";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

async function Navbar() {
  return (
    <nav className="hidden navbar lg:flex items-center text-xl font-medium text-gray-800">
      {links.map((link) => {
        return (
          <Button
            asChild
            key={link.href}
            className="flex items-center gap-x-2"
            variant={"link"}
            // variant={pathname === link.href ? "default" : "link"}
          >
            <Link href={link.href}>
              {link.icon} <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        );
      })}
      <Button
        asChild
        key="login"
        className="flex items-center gap-x-2 bg-inherit text-black"
        variant={"link"}
      >
        <Link href="/login">
          <LogIn /> <span className="uppercase">Login</span>
        </Link>
      </Button>
    </nav>
  );
}
export default Navbar;
