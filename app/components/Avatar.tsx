"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      alt="Profile Picture"
      height={30}
      width={30}
      src={src || ""}
    />
  );
};

export default Avatar;
