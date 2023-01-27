import React from "react";
import tw from "twin.macro";

import Hero from "../components/hero.js";
import Footer from "../components/footer.js";
import HeroImg from "../images/Logo_Short.png";

const main_page = () => {
  const HighlightedText = tw.span`bg-brown-200 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <>
      <Hero
        heading={<>Blister Packing Mfg Co.<HighlightedText></HighlightedText></>}
        description="Inspired by a vision to provide impeccable product quality to the customers, we started Blister Packing operations in 1993 and have grown to become a leading manufacturer and exporter of superlative blister products."
        imageSrc={HeroImg}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Contact Us Now"

        watchVideoButtonText="Meet The Chefs"
      />
      <Footer />
    </>
  );
}

export default main_page;