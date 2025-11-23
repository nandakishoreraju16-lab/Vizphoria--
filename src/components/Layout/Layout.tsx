import { ReactNode, Children } from "react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        {/* Background Image for Hero Section */}
        <div 
          className="absolute inset-0 w-full h-screen -z-10"
          style={{
            backgroundImage: "url('/images/renaissance-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <Navbar />
        {/* Hero Section with transparent background */}
        <div className="min-h-screen">
          {React.Children.map(children, (child, index) => 
            index === 0 ? React.cloneElement(child as React.ReactElement, { className: 'bg-transparent' }) : child
          )}
        </div>
      </div>
      
      {/* Rest of the content */}
      <main className="flex-1 bg-background">
        {React.Children.toArray(children).slice(1)}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
