"use client";

import { useRouter } from "next/navigation";

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-1 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Navigation />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
