import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <h1 className="text-2xl lg:text-4xl text-center">404</h1>
        <p className="text-center">No Page found</p>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
