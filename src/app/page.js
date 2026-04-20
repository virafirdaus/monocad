import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
     <section className="px-30" style={{ paddingTop: "148px", paddingBottom: "30px" }}>
  
        {/* HeroText */}
        <div className="flex justify-between items-end">
          <p style={{ maxWidth: "340px", color: "var(--neutral3)" }}>
            We create timeless imagery for brands, individuals, and creative teams who value clarity and emotion in every frame.
          </p>
          <div className="flex items-center gap-2">
            <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
            <p className="b3">BOOK A SESSION</p>
            <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
          </div>
        </div>

        {/* BigTitle */}
        <div style={{ fontSize: "280px", fontFamily: "var(--font-notch)", paddingTop: "148px"}}>
          <span style={{ display: "inline-block", transform: "rotate(-45deg) translate(0rem, 2rem)"}}>M</span>
          <span style={{ display: "inline-block", transform: "rotate(-9deg) translate(0rem, 6rem)" }}>O</span>
          <span style={{ display: "inline-block", transform: "rotate(43deg)" }}>N</span>
          <span style={{ display: "inline-block", transform: "rotate(-138deg)" }}>O</span>
          <span style={{ display: "inline-block", transform: "rotate(-21deg)" }}>C</span>
          <span style={{ display: "inline-block", transform: "rotate(-9deg)" }}>A</span>
          <span style={{ display: "inline-block", transform: "rotate(-97deg)" }}>D</span>
        </div>

    </section>

    </main>
  );
}