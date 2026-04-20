import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import CTA from "./component/cta";

export default function Home() {

  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
     <section className="px-30" style={{ paddingTop: "148px", paddingBottom: "30px" }}>
  
        {/* HeroText */}
        <div className="flex justify-between items-end">
          <p style={{ maxWidth: "407px", color: "var(--neutral3)" }}>
            We create timeless imagery for brands, individuals, and creative teams who value clarity and emotion in every frame.
          </p>
          <div className="flex items-center gap-2">
            <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
            <p className="b3">BOOK A SESSION</p>
            <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
          </div>
        </div>

        {/* BigTitle */}
        <div style={{ fontSize: "280px", fontFamily: "var(--font-notch)", paddingTop: "148px"}}  className="whitespace-nowrap overflow-hidden">
          <span style={{ display: "inline-block", transform: "rotate(-45deg) translate(2rem, 1.9rem)"}}>M</span>
          <span style={{ display: "inline-block", transform: "rotate(-9deg) translate(0rem, 6rem)" }}>O</span>
          <span style={{ display: "inline-block", transform: "rotate(43deg) translate(2rem, 0.3rem)" }}>N</span>
          <span style={{ display: "inline-block", transform: "rotate(-138deg) translate(-3.6rem, -4rem)" }}>O</span>
          <span style={{ display: "inline-block", transform: "rotate(-21deg) translate(-3.9rem, -7rem)" }}>C</span>
          <span style={{ display: "inline-block", transform: "rotate(-9deg) translate(-12rem, 3.5rem)" }}>A</span>
          <span style={{ display: "inline-block", transform: "rotate(-97deg) translate(-5rem, -12rem)" }}>D</span>
        </div>

        {/* 3D CAROUSEL */}
            <div style={{ perspective: "2000px", height: "500px", scale: "0.8"}} className="relative w-full flex justify-center items-center overflow-visible">
              
              <div style={{ transformStyle: "preserve-3d" }} className="relative w-[220px] h-[320px]">
                
                {/* Kita buat loop 10 kali untuk 10 gambar */}
                {[18, 23, 25, 27, 29, 30, 31, 34, 36, 37].map((num, i) => (
                  <div
                    key={num}
                    style={{
                      position: "absolute",
                      inset: 0,
                      // Geser tiap gambar 25 derajat (total 10 gambar = melengkung elegan)
                      // translateZ(800px) membuat lengkungan besar ke depan
                      transform: `rotateY(${(i - 5) * 25}deg) translateZ(650px)`,
                      backfaceVisibility: "visible",
                    }}
                  >
                    <div className="relative w-full h-full shadow-2xl">
                      <Image 
                        src={`/Images/image (${num}).png`} 
                        alt="gallery" 
                        fill 
                        className="object-cover rounded-sm"
                      />
                    </div>
                  </div>
                ))}

              </div>
            </div>

        {/* Footer Bar */}
        <div className="flex justify-between items-center">
          <p className="b3">EVERYDAY, 10 AM - 8 PM</p>
          <p className="b3">PHOTOGRAPHY STUDIO</p>
        </div>
    </section>



    {/* ABOUT SECTION */}
    <section className="bg-neutral5 flex flex-col px-30 py-8" style={{ minHeight: "100vh" }}>

      {/* Navbar */}
      <div className="flex justify-between items-center">
        <p className="b3" style={{ color: "var(--background)" }}>ABOUT US</p>
        <p className="b3" style={{ color: "var(--background)" }}>MONOCAD STUDIO</p>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div style={{ maxWidth: "520px" }}>
          <p className="b3" style={{ color: "var(--background)" }}>
            OUR STUDIO IS BUILT TO PROVIDE A CALM<br/>
            DISTRACTION-FREE ENVIRONTMENT.<br/>
            EVERY SESSION BEGINS WITH INTENTION FROM CONCEPT DEVELOPMENT 
            AND LIGHTING DESIGN TO THE FINAL RETOUCHING PROCESS. WE FOCUS ON 
            DELIVERING REFINED IMAGERY THAT FEELS BOTH MODERN AND TIMELESS.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <p className="b3" style={{ color: "var(--background)" }}>EVERYDAY, 10 AM - 8 PM</p>
        <p className="b3" style={{ color: "var(--background)" }}>PHOTOGRAPHY STUDIO</p>
      </div>

    </section>



    {/* SERVICES SECTION */}
    <section className="relative bg-white" style={{ height: "650vh" }}>

      {/* SERVICES sticky wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-between pointer-events-none overflow-visible">

        {/* Marquee SERVICES */}
        <div className="overflow-hidden w-full">
          <h1 className=" extra2 leading-none whitespace-nowrap">
            SERVICES · SERVICES · SERVICES · SERVICES ·
          </h1>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pointer-events-auto px-30 py-8">
          <p className="b3 text-black">KEEP SCROLLING</p>
          <p className="b3 text-black">BOOK A SESSION</p>
        </div>

      </div>

      {/* Image-Floating */}
      <div className="absolute top-0 left-0 w-full" style={{ top: "100vh" }}>

        <div className="flex justify-center" style={{ position: "absolute", top: "0px", width: "100%" }}>
          <div className="w-[350px] h-[450px] overflow-hidden">
            <img src="/images/image1.png" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex justify-center" style={{ position: "absolute", top: "800px", width: "100%" }}>
          <div className="w-[350px] h-[450px] overflow-hidden">
            <img src="/images/image2.png" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex justify-center" style={{ position: "absolute", top: "1600px", width: "100%" }}>
          <div className="w-[350px] h-[450px] overflow-hidden">
            <img src="/images/image3.png" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex justify-center" style={{ position: "absolute", top: "2400px", width: "100%" }}>
          <div className="w-[350px] h-[450px] overflow-hidden">
            <img src="/images/image4.png" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>



   {/* PROJECTS */}

   <section className="flex flex-col justify-between gap-33">
    
    {/* Projects row-top */}
    <div className="flex justify-between">
        <div style={{ width: "200px", height: "260px", flexShrink: 0 }}>
          <img src="/Images/image (34).png" className="w-full h-full object-cover" />
        </div>

        <div style={{ width: "183px", height: "183px", flexShrink: 0 }}>
          <img src="/Images/image3.png" className="w-full h-full object-cover" />
        </div>

        <div style={{ width: "200px", height: "260px", flexShrink: 0 }}>
          <img src="/Images/image (20).png" className="w-full h-full object-cover" />
        </div>

        <div style={{ width: "200px", height: "152px", flexShrink: 0 }}>
          <img src="/Images/image (27).png" className="w-full h-full object-cover" />
        </div>
    </div>

    {/* Projects row-center */}
    <div className="flex justify-center items-center gap-[200]">
        <div style={{ width: "200px", height: "152px", flexShrink: 0 }}>
          <img src="/Images/image (36).png" className="w-full h-full object-cover" />
        </div>
        
        <div style={{ width: "200px", height: "260px", flexShrink: 0 }}>
          <img src="/Images/image (37).png" className="w-full h-full object-cover" />
        </div>

         <div style={{ width: "200px", height: "152px", flexShrink: 0 }}>
          <img src="/Images/image (14).png" className="w-full h-full object-cover" />
        </div>
    </div>
    
    {/* Projects row-botom */}
    <div className="flex justify-between items-center">

        <div style={{ width: "200px", height: "152px", flexShrink: 0 }}>
          <img src="/Images/image (22).png" className="w-full h-full object-cover" />
        </div>

        <div style={{ width: "200px", height: "260px", flexShrink: 0 }}>
          <img src="/Images/image (23).png" className="w-full h-full object-cover" />
        </div>

        <div style={{ width: "183px", height: "183px", flexShrink: 0 }}>
          <img src="/Images/image2.png" className="w-full h-full object-cover" />
        </div>

        <div style={{ width: "200px", height: "260px", flexShrink: 0 }}>
          <img src="/Images/image (25).png" className="w-full h-full object-cover" />
        </div>
    </div>

   </section>


    {/* TESTIMONIALS */}

    <section className="flex flex-col justify-between h-screen py-8"
    style={{ backgroundImage: "url('images/bg-testi.png')" , backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>

      
      {/* Overlay Image Testi */}
      <div 
        style={{position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.5)"}}>
      </div>
      
  
      {/* Marquee*/}
        <div className="overflow-hidden w-full z-1">
          <h1 className=" extra2 leading-none whitespace-nowrap" style={{ color: "var(--background)" }}>
            TESTIMONIALS · TESTIMONIALS · TESTIMONIALS · TESTIMONIALS ·
          </h1>
        </div>

      {/* Content-testi */}
      <div className="flex flex-col gap-[100px] z-1 px-30">

              {/* client */}
              <div className="flex  justify-between items-center">
                <h2 style={{ color: "var(--background)" }}>JASON MCART</h2>
                <h2 style={{ color: "var(--background)", opacity:"50%" }}>ANNA HUGH</h2>
                <h2 style={{ color: "var(--background)", opacity:"50%" }}>COLLINE BRIDGE</h2>
              </div>

               {/* Indikator */}
              <div className="flex items-center gap-4">
                <p className="b3" style={{ color: "var(--background)" }}>01</p>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.4)" }}>
                  <div style={{height: "1px", width: "30%", background: "var(--background)"}}></div>
                </div>
              </div>

              {/* Testi-Text */}
              <div className="flex justify-end">
                <p className="b2" style={{ color: "var(--background)", maxWidth: "40%", textAlign: "right"}}>“Our product imagery finally reflects the premium quality of our brand. The team understood exactly how to highlight the materials and design with clean, refined visuals.”</p>
              </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center z-1 px-30">
          <p className="b3" style={{ color: "var(--background)" }}>EVERYDAY, 10 AM - 8 PM</p>
          <p className="b3" style={{ color: "var(--background)" }}>PHOTOGRAPHY STUDIO</p>
        </div> 
    </section>

    <CTA />
    <Footer />

    
    </main>
  );
}