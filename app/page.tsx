

import About2 from "./component/About2";
import BannerSection from "./component/BannerSection";
import BestDeal from "./component/BestDeal";
import CardFilter from "./component/CardFilter";
// import CollectionsSection from "./component/CollectionsSection";
// import Describe from "./component/Describe";
import Hero from "./component/Hero";
// import Testimonials from "./component/Testimonial";
// import HeroAbout from "./component/HeroAbout";


export default function Home() {
  return (
    <div className="primaryBg">

      <Hero />
      <About2 />
      {/* <CollectionsSection /> */}
      <BestDeal />
      {/* <Describe /> */}
      {/* <HeroAbout /> */}
      {/* <Testimonials /> */}
      <BannerSection />
      <CardFilter />

    </div>
  );
}
