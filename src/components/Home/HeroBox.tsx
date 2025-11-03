import Button from "@/share/Button";
import React from "react";

export default function HeroBox() {
  return (
    <div className="w-[400px] h-[400px] bg-white p-10 py-10 md:py-auto md:p-5 bg-opacity-45 ">
      <div className="w-full  h-full flex flex-col gap-2  py-10 md:py-auto items-center justify-center bg-white text-gray">
        <span className="font-thin md:text-3xl text-sm">
          {" "}
          Architecture.
          <br /> Interior Design.<br/> Landscape
        </span>
        <span className=" md:text-xl  text-sm font-bold text-green">
          {" "}
          Curating experiences <br />
          with purposeful design
        </span>
        <span className=" text-[12px] text-gray font-thin">
          Design for private residences, multifamily & mixed-use buildings,
          commercial spaces, community-oriented projects, even parks
        </span>

        <Button title={"Portfolio"} className="hover:bg-green border-green hover:text-background-light" link={"/portfolio"} />
      </div>
    </div>
  );
}
