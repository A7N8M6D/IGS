import React from "react";
import Navbar from "../layouts/Navbar";
import bgImage from "../../public/HeroSectionImage.png";
import HeroSection from "../components/HomeComponent/HeroSection";
import FeatureCardSection from "../components/HomeComponent/FeatureCardSection";
const HomePage = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          objectFit:"contain",
          zIndex: "5",
          height: "180vh",
          width: "100%",
          backgroundImage: `url(${bgImage})`, // ✅ correct usage
          backgroundSize: "cover", // ✅ make it cover full area
          backgroundPosition: "center", // ✅ center the image
          backgroundRepeat: "no-repeat", // ✅ prevent repeating
          display: "flex ",
          flexDirection: "column",
          
        }}
      >
        <Navbar />
        <HeroSection />
        <FeatureCardSection />
      </div>
    </>
  );
};

export default HomePage;
