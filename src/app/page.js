import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import CTA from "./component/cta";
import Topbar from "./component/top_bar";
import Button from "./component/button";
import {
  getHeroData,
  getAboutData,
  getServicesData,
  getTestimonialsData,
  getProjectsData,
} from "@/lib/api";
 
export default async function Page() {
  const hero = await getHeroData();
  const about = await getAboutData();
  const services = await getServicesData();
  const projects = await getProjectsData();
  const testimonials = await getTestimonialsData();
 
  return (
    <main>
      <Navbar />
 
      {/* ───── HERO SECTION ───── */}
      <section
        className="hero-section px-30"
        style={{ paddingTop: "148px", paddingBottom: "30px" }}
      >
        {/* HeroText + Button */}
       <div className="flex flex-row justify-between items-end w-full">
          <p
            className="text-sm md:text-base"
            style={{ maxWidth: "407px",color: "var(--neutral3)" }}
          >
            {hero.subheading}
          </p>
          <Button />
        </div>
 
        {/* BigTitle — font & translate scale proporsional dengan viewport */}
        <div
          className="whitespace-nowrap overflow-hidden"
          style={{
            fontSize: "clamp(56px, 18vw, 280px)",
            fontFamily: "var(--font-notch)",
            paddingTop: "clamp(32px, 6vw, 148px)",
          }}
        >
          <span style={{ display: "inline-block", transform: "rotate(-45deg) translate(clamp(0.4rem,0.7vw,2rem), clamp(0.4rem,0.7vw,1.9rem))" }}>M</span>
          <span style={{ display: "inline-block", transform: "rotate(-9deg) translate(0rem, clamp(1.2rem,2.2vw,6rem))" }}>O</span>
          <span style={{ display: "inline-block", transform: "rotate(43deg) translate(clamp(0.4rem,0.7vw,2rem), clamp(0.06rem,0.1vw,0.3rem))" }}>N</span>
          <span style={{ display: "inline-block", transform: "rotate(-138deg) translate(clamp(-0.7rem,-1.3vw,-3.6rem), clamp(-0.8rem,-1.5vw,-4rem))" }}>O</span>
          <span style={{ display: "inline-block", transform: "rotate(-21deg) translate(clamp(-0.8rem,-1.4vw,-3.9rem), clamp(-1.4rem,-2.6vw,-7rem))" }}>C</span>
          <span style={{ display: "inline-block", transform: "rotate(-9deg) translate(clamp(-2.3rem,-4.4vw,-12rem), clamp(0.7rem,1.3vw,3.5rem))" }}>A</span>
          <span style={{ display: "inline-block", transform: "rotate(-97deg) translate(clamp(-1rem,-1.8vw,-5rem), clamp(-2.3rem,-4.4vw,-12rem))" }}>D</span>
        </div>
 
        {/* 3D CAROUSEL — ukuran & translateZ responsif */}
        <div
          className="relative w-full flex justify-center items-center overflow-visible"
          style={{
            perspective: "2000px",
            height: "clamp(220px, 38vw, 500px)",
            scale: "0.8",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(110px, 15vw, 220px)",
              height: "clamp(160px, 22vw, 320px)",
              transformStyle: "preserve-3d",
            }}
          >
            {hero.gallery_images.map((url, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotateY(${(i - 5) * 25}deg) translateZ(clamp(180px, 33vw, 650px))`,
                  backfaceVisibility: "visible",
                }}
              >
                <div className="relative w-full h-full shadow-2xl">
                  <Image
                    unoptimized
                    src={url}
                    alt="gallery"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Topbar */}
        <Topbar
          theme="light"
          leftText={hero.jam_operasional}
          rightText={hero.studio_label}
        />
      </section>



    {/* ABOUT SECTION */}
    <section className="about-section bg-neutral5 flex flex-col px-30 py-8" style={{ minHeight: "100vh" }}>

      {/* Topbar */}
       < Topbar 
       theme="dark"
       leftText={about.section_label}
       rightText={about.studio_name}
       />

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div style={{ maxWidth: "520px" }}>
          <p className="b3" style={{ color: "var(--background)" }}>
            {about.about_desc}
          </p>
        </div>
      </div>

     {/* Topbar */}
      < Topbar 
       theme="dark"
       leftText={hero.jam_operasional}
       rightText={hero.studio_label}
       />

    </section>



    {/* SERVICES SECTION */}
    <section className="relative bg-white" style={{ height: "650vh" }}>

      {/* SERVICES sticky wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-between pointer-events-none overflow-visible">

        {/* Marquee SERVICES */}
        <div className="overflow-hidden w-full">
          <h1 className="extra2 leading-none whitespace-nowrap">
           SERVICES · SERVICES · SERVICES · SERVICES ·
        </h1>
        </div>
      
      <div className="px-30 py-8">
          {/* Topbar */}
          < Topbar 
          theme="light"
          leftText="KEEP SCROLLING"
          rightcontent={<Button />}
          />
       </div>

      </div>

      {/* Image-Floating */}
      <div className="absolute top-0 left-0 w-full" style={{ top: "100vh" }}>
        {services.map((service, i) => (
          <div
            key={service.id}
            className="flex justify-center"
            style={{ position: "absolute", top: `${i * 800}px`, width: "100%" }}
          >
            <div className="w-[350px] h-[450px] relative">
              <img src={service.image_url} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h6
                  className="px-6 py-2 text-xs tracking-widest text-center font-medium"
                  style={{
                    background: "white",
                    color: "black",
                    mixBlendMode: "difference",
                  }}
                >
                  {service.label}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
</section>



   {/* PROJECTS */}
<section className="flex flex-col justify-between gap-33  overflow-hidden">

  {/* Row Top */}
  <div className="flex justify-between">
    {projects.filter(p => p.row_position === 1).map((project) => (
      <div key={project.id} style={{ width: project.width, height: project.height, flexShrink: 0, position: "relative" }}>
        <img src={project.image_url} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="px-4 py-1 text-xs tracking-widest font-medium"
            style={{ background: "white", color: "black", mixBlendMode: "difference" }}>
            {project.label}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Row Center */}
  <div className="flex justify-center items-center gap-[200]">
    {projects.filter(p => p.row_position === 2).map((project) => (
      <div key={project.id} style={{ width: project.width, height: project.height, flexShrink: 0, position: "relative"}}>
        <img src={project.image_url} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="px-4 py-1 text-xs tracking-widest font-medium"
            style={{ background: "white", color: "black", mixBlendMode: "difference" }}>
            {project.label}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Row Bottom */}
  <div className="flex justify-between items-center">
    {projects.filter(p => p.row_position === 3).map((project) => (
      <div key={project.id} style={{ width: project.width, height: project.height, flexShrink: 0, position: "relative" }}>
        <img src={project.image_url} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="px-4 py-1 text-xs tracking-widest font-medium"
            style={{ background: "white", color: "black", mixBlendMode: "difference" }}>
            {project.label}
          </p>
        </div>
      </div>
    ))}
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
      <div className="content-testi flex flex-col gap-[100px] z-1 px-30">

              {/* client */}
              <div className="flex  justify-between items-center">
                <h2 style={{ color: "var(--background)" }}>{testimonials[0]?.client_name}</h2>
                <h2 style={{ color: "var(--background)", opacity:"50%" }}>{testimonials[1].client_name}</h2>
                <h2 style={{ color: "var(--background)", opacity:"50%" }}>{testimonials[2]?.client_name}</h2>
              </div>

               {/* Indikator */}
              <div className="flex items-center gap-4">
                <p className="b3" style={{ color: "var(--background)" }}>
                  0{testimonials[0]?.sort_order}
                  </p>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.4)" }}>
                  <div style={{height: "1px", width: "30%", background: "var(--background)"}}></div>
                </div>
              </div>

              {/* Testi-Text */}
              <div className="flex justify-end">
                <p className="b2" style={{ color: "var(--background)", maxWidth: "40%", textAlign: "right"}}>
                  {testimonials[0]?.review}
                </p>
              </div>

              {/* Topbar */}
              < Topbar 
              theme="dark"
              leftText="KEEP SCROLLING"
              rightText=""
              />
        </div>

    </section>

    <CTA />
    <Footer />

    
    </main>
  );
}