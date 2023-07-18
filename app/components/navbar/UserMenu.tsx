"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-200 transition cursor-pointer">
        <div
          className="
        p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow:md transition
        "
        >
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;

<div
  onClick={() => null}
  className="
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        "
>
  <AiOutlineMenu />
  <div className="hidden md:block">
    <Avatar src={currentUser?.image} />
  </div>
</div>;
