"use client";

const Navigation = () => {
  return (
    <div
      className="
    w-full
    md:w-auto
    py-2
    transition
    cursor-pointer"
    >
      <div
        className=" flex
    flex-row
    items-center
    justify-between"
      >
        <div
          className=" text-sm
      font-semibold
      px-6"
        >
          Cars
        </div>
        <div
          className="hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center"
        >
          Houses
        </div>
        <div
          className=" sm:block
        text-sm
        font-semibold
        px-6
        flex-1
        text-center"
        >
          Jobs
        </div>
      </div>
    </div>
  );
};

export default Navigation;
