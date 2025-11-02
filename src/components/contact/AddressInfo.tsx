import { Location, Photoshop, Sms } from "iconsax-reactjs";
import React from "react";

export default function AddressInfo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Location className="text-green" />
      <p>115 15th Avenue East Suite 100 Seattle, WA 98112</p>
      <Sms className="text-green" />
      <p>info@boardandvellum.com</p>
      <Photoshop className="text-green" />
      <p>+1 206 707 8895</p>
    </div>
  );
}
