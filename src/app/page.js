import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import CTA from "./component/cta";
import Topbar from "./component/top_bar";
import Button from "./component/button";
import Animation from "./component/animation";
import {
  getHeroData,
  getAboutData,
  getServicesData,
  getTestimonialsData,
  getProjectsData,
  getFooterData,
} from "@/lib/api";
 
export default async function Page() {
  const hero = await getHeroData();
  const about = await getAboutData();
  const services = await getServicesData();
  const projects = await getProjectsData();
  const testimonials = await getTestimonialsData();
  const footer = await getFooterData();
 
  return (
    <main>
      <Animation />
      <div className="navbar">
      <Navbar />
      </div>
 
      {/* ───── HERO SECTION ───── */}
      <section
      id="hero-section"
        className="padding-section"
        style={{ paddingTop: "148px", paddingBottom: "30px", paddingLeft: "clamp(20px, 8vw, 120px)", paddingRight: "clamp(20px, 8vw, 120px)", overflow: "visible", position:"relative", zIndex: 1 }}>

          {/* HeroText + Button */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-4">
                <p
                  className="hero-text b3 text-sm md:text-base text-center md:text-left"
                  style={{ maxWidth: "407px",color: "var(--neutral3)" }}
                >
                  {hero.subheading}
                </p>
                <div className="hero-button">
                <Button />
                </div>
              </div>
  
        {/* BigTitle — font & translate scale proporsional dengan viewport */}
        <div
        style={{
          fontSize: "clamp(56px, 18vw, 280px)",
          fontFamily: "var(--font-notch)",
          paddingTop: "clamp(32px, 6vw, 148px)",
          position: "relative",
          height: "clamp(150px, 55vw, 520px)",
          overflow: "visible",
        }}
      >
        <span className="hero-letter" style={{ position: "absolute", left: "4%",   top: "20%", display: "inline-block", transform: "rotate(-45deg)" }}>M</span>
        <span className="hero-letter" style={{ position: "absolute", left: "18%",  top: "40%", display: "inline-block", transform: "rotate(-5deg)" }}>O</span>
        <span className="hero-letter" style={{ position: "absolute", left: "35%",  top: "28%", display: "inline-block", transform: "rotate(45deg)" }}>N</span>
        <span className="hero-letter" style={{ position: "absolute", left: "48%",  top: "40%", display: "inline-block", transform: "rotate(-138deg)" }}>O</span>
        <span className="hero-letter" style={{ position: "absolute", left: "58%",  top: "11.5%",display: "inline-block", transform: "rotate(-21deg)" }}>C</span>
        <span className="hero-letter" style={{ position: "absolute", left: "68%",  top: "40%", display: "inline-block", transform: "rotate(-9deg)" }}>A</span>
        <span className="hero-letter" style={{ position: "absolute", left: "82%",  top: "45%", display: "inline-block", transform: "rotate(-97deg)" }}>D</span>
      </div>
 
        {/* 3D CAROUSEL — ukuran & translateZ responsif */}
        <div
        id="carousel-wrapper"
          className="carousel-wrapper relative w-full flex justify-center items-center overflow-visible"
          style={{
            perspective: "2000px",
            height: "clamp(220px, 38vw, 550px)",
            scale: "0.9"
          }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(110px, 15vw, 250px)",
              height: "clamp(160px, 22vw, 300px)",
              transformStyle: "preserve-3d",
            }}
          >
            {hero.gallery_images.map((url, i) => (
              <div
                key={i}
                className="carousel-card"
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotateY(${(i - 5) * 30}deg) translateZ(clamp(250px, 33vw, 650px))`,
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
<section 
  id="about-section"
  className="about-section padding-section flex flex-col px-30 py-8" 
  style={{ 
    minHeight: "100vh", 
    paddingLeft: "clamp(20px, 8vw, 120px)", 
    paddingRight: "clamp(20px, 8vw, 120px)",
    background: "var(--neutral5)", // tetap gelap
    position: "relative",
  }}
>
  {/* Topbar atas */}
  <div className="about-meta-top">
    <Topbar 
      theme="dark"
      leftText={about.section_label}
      rightText={about.studio_name}
    />
  </div>

  {/* Content */}
  <div className="flex-1 flex items-center justify-center">
    <div style={{ maxWidth: "520px" }}>
      <p 
        className="about-text b3" 
        style={{ color: "var(--background)", opacity: 0 }} // mulai opacity 0
      >
        {about.about_desc}
      </p>
    </div>
  </div>

  {/* Topbar bawah */}
  <div className="about-meta-bottom">
    <Topbar 
      theme="dark"
      leftText={hero.jam_operasional}
      rightText={hero.studio_label}
    />
  </div>
</section>


{/* SERVICES SECTION */}
<section className="padding-section relative bg-white" style={{ height: "650vh"}}>

  {/* SERVICES sticky wrapper */}
  <div className="sticky top-0 h-screen flex flex-col justify-between pointer-events-none overflow-visible">

    {/* Marquee SERVICES */}
    <div className="overflow-hidden w-full">
      <h1 
          className="extra2 leading-none whitespace-nowrap"
        >
          SERVICES · SERVICES · SERVICES · SERVICES ·
      </h1>
    </div>
    
    <div className="px-6 md:px-30 py-8">
      {/* Topbar */}
      <Topbar 
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
        style={{ 
          position: "absolute", 
          top: `clamp(${i * 400}px, ${i * 55}vw, ${i * 800}px)`,
          width: "100%" 
        }}
      >
        <div className="w-[230px] h-[330px] md:w-[350px] md:h-[450px] relative">
          <img src={service.image_url} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h6
              className="px-4 py-1 text-center font-medium whitespace-nowrap"
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
<section className="flex flex-col justify-between gap-33 overflow-hidden">

  {/* Row Top */}
  <div className="flex justify-between">
    {projects.filter(p => p.row_position === 1).map((project, i) => (
      <div key={project.id} 
        className={`relative project-card ${i >= 3 ? "hidden md:block" : ""}`}
        style={{ 
          width: project.width,
          height: project.height,
          flexShrink: 0 
        }}>
        <img src={project.image_url} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="px-2 py-1 text-xs tracking-widest font-medium"
            style={{ background: "white", color: "black", mixBlendMode: "difference" }}>
            {project.label}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Row Center */}
  <div className="flex justify-center items-center gap-4 md:gap-[200px]">
    {projects.filter(p => p.row_position === 2).map((project, i) => (
      <div key={project.id}
        className={`relative project-card ${i >= 3 ? "hidden md:block" : ""}`}
        style={{ 
          width: project.width,
          height: project.height,
          flexShrink: 0 
        }}>
        <img src={project.image_url} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="px-2 py-1 text-xs tracking-widest font-medium"
            style={{ background: "white", color: "black", mixBlendMode: "difference" }}>
            {project.label}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Row Bottom */}
  <div className="flex justify-between items-center">
    {projects.filter(p => p.row_position === 3).map((project, i) => (
      <div key={project.id}
        className={`relative project-card ${i >= 3 ? "hidden md:block" : ""}`}
        style={{ 
          width: project.width,
          height: project.height,
          flexShrink: 0 
        }}>
        <img src={project.image_url} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="px-2 py-1 text-xs tracking-widest font-medium"
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
  style={{ backgroundImage: "url('/Images/bg-testi.png')", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>

  {/* Overlay Image Testi */}
  <div style={{position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.5)"}}></div>

  {/* Marquee */}
  <div className="overflow-hidden w-full z-1">
    <h1 className="extra2 leading-none whitespace-nowrap" style={{ color: "var(--background)" }}>
      TESTIMONIALS · TESTIMONIALS · TESTIMONIALS · TESTIMONIALS ·
    </h1>
  </div>

  {/* Content-testi */}
 {/* Content-testi */}
<div className="content-testi flex flex-col z-1 gap-6 md:gap-[100px] flex-1 justify-center" 
  style={{ paddingLeft: "clamp(20px, 8vw, 120px)", paddingRight: "clamp(20px, 8vw, 120px)"}}>

    {/* client — mobile: 1 nama center, desktop: 3 nama space-between */}
    <div className="flex justify-center md:justify-between items-center">
      <h2 className="block" style={{ color: "var(--background)" }}>{testimonials[0]?.client_name}</h2>
      <h2 className="hidden md:block" style={{ color: "var(--background)", opacity:"50%" }}>{testimonials[1]?.client_name}</h2>
      <h2 className="hidden md:block" style={{ color: "var(--background)", opacity:"50%" }}>{testimonials[2]?.client_name}</h2>
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
<div className="flex justify-center md:justify-end">
  <p className="b2 text-center md:text-right" style={{ 
    color: "var(--background)", 
    maxWidth: "clamp(200px, 80vw, 40%)"
  }}>
    {testimonials[0]?.review}
  </p>
</div>
  </div>

  {/* Topbar — di luar content-testi, tetap di bawah section */}
<div style={{ paddingLeft: "clamp(20px, 8vw, 120px)", paddingRight: "clamp(20px, 8vw, 120px)" }} className="z-1">
  <Topbar 
    theme="dark"
    leftText="KEEP SCROLLING"
    rightText=""
    mobileCenter={true}
  />
</div>

</section>
    <CTA />
    <Footer footer={footer} />

    
    </main>
  );
}