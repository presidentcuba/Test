import React from "react";
import Introduction from "./Introduction";
import Slider from "./Slider";
import BestProduct from "./BestProduct";
import Products from "./Products";
import Story from "./Story";
import News from "./News";
import Video from "./Video";
export default function Home() {

  return (
    <>
        <Slider />
        <Introduction />
        <BestProduct />
        <Products />
        <Story />
        <News />
        <Video />
    </>
  
  );
}
