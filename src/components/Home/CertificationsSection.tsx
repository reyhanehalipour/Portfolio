import React from "react";
import CertificBox from "./CertificBox";
import certData, { Certificdata } from "../../../mockData/Certificdata";

export default function CertificationsSection() {
  return (
    <section className=" h-[30%] py-10 flex items-center justify-center gap-4 justify-items-center bg-darkapricot w-full">
     
      {certData.map((item: Certificdata) => (
        <CertificBox
          key={item.id}
          description={item.description}
          imageSrc={item.imageSrc}
          alt={item.alt}
        />
      ))}
    </section>
  );
}
