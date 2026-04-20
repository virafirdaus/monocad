export default function CTA () {
    return (
        <section className="flex flex-col h-screen overflow-hidden">

          {/* Top Bar */}
          <div className="flex justify-between items-center px-30 py-8">
            <p className="b3">BOOK NOW</p>
            <p className="b3">SESSION AVAILABLE</p>
          </div>

          {/* Content*/}
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <h1 className="extra2 text-center">WE'RE READY TO BRING YOUR VISION</h1>
            <div className="flex items-center gap-2">
              <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
              <p className="b3">BOOK A SESSION</p>
              <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
            </div>
          </div>

          {/* Images Row*/}
          <div className="flex items-end justify-center">
            <div style={{ width: "200px", height: "256px", overflow: "hidden", flexShrink: 0}}>
              <img src="/Images/image (23).png" className="w-full h-full object-cover" />
            </div>
            <div style={{ width: "200px", height: "256px", overflow: "hidden", flexShrink: 0}}>
              <img src="/Images/image (34).png" className="w-full h-full object-cover" />
            </div>
            <div style={{ width: "200px", height: "256px", overflow: "hidden", flexShrink: 0 }}>
              <img src="/Images/image (35).png" className="w-full h-full object-cover" />
            </div>
            <div style={{ width: "200px", height: "256px", overflow: "hidden", flexShrink: 0 }}>
              <img src="/Images/image (37).png" className="w-full h-full object-cover" />
            </div>
            <div style={{ width: "200px", height: "256px", overflow: "hidden", flexShrink: 0 }}>
              <img src="/Images/image (36).png" className="w-full h-full object-cover" />
            </div>
            <div style={{ width: "200px", height: "256px", overflow: "hidden", flexShrink: 0 }}>
              <img src="/Images/image (14).png" className="w-full h-full object-cover" />
            </div>
            <div style={{ width: "200px", height: "256px", overflow: "hidden", flexShrink: 0 }}>
              <img src="/Images/image (27).png" className="w-full h-full object-cover" />
            </div>
            <div style={{ width: "200px", height: "256px", overflow: "hidden", flexShrink: 0 }}>
              <img src="/Images/image3.png" className="w-full h-full object-cover" />
            </div>
          </div>

        </section>
    )
}