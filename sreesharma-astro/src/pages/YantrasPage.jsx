import React from "react";
import InfoSection from "../components/InfoSection";

export default function YantrasPage() {
  return (
    <div style={{padding:"100px", textAlign:"center"}}>
      <h1>Yantras Page Coming Soon</h1>
      <InfoSection
  img="/assets/YantraMain.png"
  subtitle="Divine Geometric Tools"
  title="Powerful Yantras for Prosperity"
  points={[
    {
      title: "Shree Yantra",
      desc: "Attract wealth, abundance, and success with this supreme yantra."
    },
    {
      title: "Vastu Dosh Nivaran Yantra",
      desc: "Correct structural energy imbalances without reconstruction."
    },
    {
      title: "Kuber Yantra",
      desc: "Enhance financial growth and cash flow."
    },
    {
      title: "Durga Yantra",
      desc: "Protection from negative energies and obstacles."
    }
  ]}
/>

    </div>
  );
}
