import Topbar from "./top_bar";
import {getCtaData} from "@/lib/api";

  export default async function Page() {
    const cta  = await getCtaData()


    return (
        <section className="flex flex-col h-screen overflow-hidden">
          
          <div className="px-30 py-8">
              {/* Topbar */}
              < Topbar 
              theme="light"
              leftText={cta.left_label}
              rightText={cta.right_label}
              />
          </div>

          {/* Content*/}
          <div className="flex-1 flex flex-col items-center justify-center gap-6" style={{ paddingLeft: "clamp(20px, 8vw, 120px)", paddingRight: "clamp(20px, 8vw, 120px)"}}>
            <h1 className="extra2 text-center">{cta.cta_headline}</h1>
            <div className="flex items-center gap-2">
              <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
              <p className="b3">BOOK A SESSION</p>
              <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
            </div>
          </div>

          {/* Images Row*/}
            <div className="flex items-end justify-center">
              {cta.images.map((url, i) => (
                <div key={i} className="overflow-hidden flex-shrink-0"
                  style={{ 
                    width: "clamp(150px, 25vw, 200px)", 
                    height: "clamp(200px, 32vw, 256px)"
                  }}>
                  <img src={url} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
        </section>
    )
  }