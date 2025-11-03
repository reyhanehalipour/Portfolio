'use client'
import useMobile from "@/hooks/useMobile";
import { Call, Facebook, Instagram, Sms } from "iconsax-reactjs";

export default function Footer() {
  const isMobile = useMobile();
  return (
    <footer className="bg-gray h-[60%] text-white py-10 mt-12">
      <div className=" flex  md:flex-row flex-col-reverse items-center justify-around ">
        <div>
          <div className="flex items-center justify-center gap-3">
            <div className=" bg-green rounded-full p-3">
              {" "}
              <Call />
            </div>
            <div className=" bg-green rounded-full p-3">
              {" "}
              <Facebook />
            </div>
            <div className=" bg-green rounded-full p-3">
              {" "}
              <Instagram />
            </div>
            <div className=" bg-green rounded-full p-3">
              {" "}
              <Sms />
            </div>
          </div>
        </div>
        <div className="flex  flex-row md:flex-col gap-4">
          <h1 className=" font-bold   text-left  mb-2 text-2xl">Board & Vellum </h1>
          {!isMobile && (
            <>
            <p className=" hidden md:flex font-thin text-left">
              Curating experiences through
              <br /> creative storytelling,
              <br /> clever solutions, and purposeful design.
            </p>
                <div className=" hidden md:flex items-center justify-center gap-3">
            <label>about</label>
            <label> approatch</label>
            <label>story</label>
            <label> team</label>
          </div>
          </>
          )}

      
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © Copyright 2011-2025, Board & Vellum. All rights reserved. Privacy
        <br />
        Policy Website Designed, Developed, and Managed by EmerΔldSeven
      </div>
    </footer>
  );
}
