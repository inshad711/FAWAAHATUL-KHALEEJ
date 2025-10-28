

import About2 from "./component/About2";
import CollectionsSection from "./component/CollectionsSection";
// import Describe from "./component/Describe";
import Hero from "./component/Hero";
import Testimonials from "./component/Testimonial";
// import HeroAbout from "./component/HeroAbout";


export default function Home() {
  return (
    <div className="primaryBg">

      <Hero />
      <About2 />
      <CollectionsSection />
      {/* <Describe /> */}
      {/* <HeroAbout /> */}
      <Testimonials />

    </div>
  );
}
