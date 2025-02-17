// import * as React from "react";
import { Navbar } from "./Fashion_guest";
import { SecondaryNav } from "./Fashion_guest";
import { MainContent } from "./Fashion_guest";
import { Footer } from "./Fashion_guest";


export default function FashionLayout_guest() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Navbar />
      <SecondaryNav />
      <MainContent />
      <Footer />
      
    </div>
  );
}
