import React from "react";
import banginic_logo from './banginic_logo.png'
import Image from "next/image";

function DeveloperLink() {
  return (
    <a  href="https://banginic.vercel.app"
        target="blank" className="text-xs flex flex-col items-center border rounded p-1 cursor-pointer group text-neutral-400 hover:border-neutral-600 border-neutral-500/50">
      <p>Developed by</p>
      <div
        className="text-purple-500 cursor-pointer group-hover:underline trans flex items-center gap-1"
      >
        <Image 
        src={banginic_logo}
        alt="./placeholder.png"
        width={25}
        height={25}
        />
       <span className="text-sm"> Banginic</span>
      </div>
    </a>
  );
}

export default DeveloperLink;
