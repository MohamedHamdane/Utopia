// import * as React from "react";
import { Navbar } from "./Fashion_admin";
import { SecondaryNav } from "./Fashion_admin";
import { MainContent } from "./Fashion_admin";
import { Footer } from "./Fashion_admin";


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
