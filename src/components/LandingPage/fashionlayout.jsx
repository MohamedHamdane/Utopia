// import * as React from "react";
import { Navbar } from "./Fashion";
import { SecondaryNav } from "./Fashion";
import { MainContent } from "./Fashion";
import { Footer } from "./Fashion";


export default function FashionLayout() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Navbar />
      <SecondaryNav />
      <MainContent />
      <Footer />
      
    </div>
  );
}
