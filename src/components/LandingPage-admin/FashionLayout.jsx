// import * as React from "react";

import { Footer, MainContent, Navbar, SecondaryNav } from "./Fashion_admin";


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
