"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        alt="Next List Logo"
        className="hidden md:block cursor-pointer"
        height={150}
        width={150}
        src={"/images/Next-List-Logoo.png"}
      />
    </div>
  );
};

export default Logo;
