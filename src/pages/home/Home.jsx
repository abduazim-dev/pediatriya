import React from "react";

import Hero from "./components/hero/Hero";
import WhyUs from "./components/whyUs/WhyUs";
import Video from "./components/video/Video";
import Services from "./components/services/Services";
import About from "./components/about/About";

import "./Home.css";
import Location from "./components/location/Location";
import Partners from "./components/partners/Partners";
import Gallery from "./components/gallery/Gallery";
import OurSpecialists from "./components/ourSpecialists/OurSpecialists";
import Reviews from "./components/reviews/Reviews";
import Waiting from "./components/waiting/Waiting";
import News from "./components/news/News";

const Home = () => {
  return (
    <div className="body">
      <main>
        <Hero />
        <WhyUs />
        <Video />
        <Services />
        <About />
        <Gallery/>
        <OurSpecialists/>
        <Reviews/>
        <Waiting/>
        <News/>
        <Partners/>
        <Location/>
      </main>
    </div>
  );
};

export default Home;