import React from "react";
import Hero from "./componens/Hero"
import Navbar from "./componens/Navbar";
import Offers from "./componens/Offers";
import Plan from "./componens/Plan";
import Rooms from "./componens/Rooms";
import ImageSlider from "./componens/ImageSlider";
import Footer from "./componens/Footer";


function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
    </div>
  );
}

export default App;
