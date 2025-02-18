// import * as React from "react";
import { Navbar } from "./Fashionlandingpage";
import { SecondaryNav } from "./Fashionlandingpage";
import { MainContent } from "./Fashionlandingpage";
import { Footer } from "./Fashionlandingpage";


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
