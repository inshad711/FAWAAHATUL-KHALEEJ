

"use client";

import React from "react";
import {
  PlugZap,
  Gauge,
  MousePointerSquareDashed,
  MonitorSmartphone,
  Wand2,
  RefreshCw,
} from "lucide-react";
import Aos from "./Aos"; // 👈 Import your AOS wrapper component

// Define the structure for a feature item
interface Feature {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay: number;
}

// Luxury Oudh Features
const luxuryFeatures: Feature[] = [
  {
    title: "Pure Oudh Essence",
    description:
      "Experience the timeless elegance of 100% pure Oudh, extracted and aged naturally for an unmatched aroma.",
    Icon: Wand2,
    delay: 200,
  },
  {
    title: "Traditional Craftsmanship",
    description:
      "Every drop is carefully distilled using centuries-old techniques, preserving the heritage of true luxury.",
    Icon: PlugZap,
    delay: 300,
  },
  {
    title: "Exclusive Collections",
    description:
      "Tailored for collectors and connoisseurs, our Oudh oils are a statement of prestige and refinement.",
    Icon: MonitorSmartphone,
    delay: 400,
  },
  {
    title: "Ethically Sourced",
    description:
      "Only the rarest agarwood from trusted sources is selected, ensuring sustainability and authenticity.",
    Icon: Gauge,
    delay: 500,
  },
  {
    title: "Luxury Packaging",
    description:
      "Every bottle is elegantly presented, making it perfect for gifting or personal indulgence.",
    Icon: MousePointerSquareDashed,
    delay: 600,
  },
  {
    title: "Lifetime Quality Guarantee",
    description:
      "We promise pure, undiluted, and high-quality Oudh that evolves beautifully over time.",
    Icon: RefreshCw,
    delay: 700,
  },
];

// 🧩 Feature Card Component — Now includes its own AOS animation
const FeatureCard: React.FC<Feature> = ({ title, description, Icon, delay }) => {
  return (
    <Aos animation="fade-up" delay={delay} duration={900} offset={100}>
      <div
        className="bg-[#1a0f0a]/30 p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col items-start 
                   transition-all duration-300 "
      >
        <div className="p-4 border-2 border-white rounded-full mb-4">
          <Icon className="w-10 h-10 beigeText" />
        </div>
        <h4 className="text-xl loraParagraph font-semibold text-white mb-2">
          {title}
        </h4>
        <p className="text-gray-300 montserratCTA text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Aos>
  );
};

// 🏆 Luxury Oudh Features Section
const LuxuryFeatures: React.FC = () => {
  return (
    <section className="py-20  primaryBg">
      <div className="templateContainer">
        {/* Header with animation */}

        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-9xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80">
            Features
          </h2>
        </div>


        {/* Animated Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {luxuryFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryFeatures;
