export default function Footer() {
    return (
        <>
        <footer className="px-30 py-8 flex flex-col" style={{ gap: "208px" }}>

            {/* Top Bar */}
            <div className="flex justify-between items-center">
                <h4>MONOCAD</h4>
                <div className="flex items-center gap-4">
                    <p className="b2">ABOUT</p>
                    <span style={{ width: "8px", height: "8px", background: "black", display: "block" }}></span>
                    <p className="b2">SERVICES</p>
                    <span style={{ width: "8px", height: "8px", background: "black", display: "block" }}></span>
                    <p className="b2">PROJECTS</p>
                </div>
            </div>

            {/* Middle Content */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <h2>TALK TO US NOW</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="b2">404</p>
                    <p className="b2">LICENSE</p>
                    <p className="b2">CHANGELOG</p>
                    <p className="b2">STYLE GUIDE</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="b2">1287 MAPLE CRESCENT, CITYVILLE</p>
                    <p className="b2">HELLO@8AM.DESIGN</p>
                    <p className="b2">(+01) 234 567 89</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-center">
                <p className="b2">© 2025 MONOCAD. CREATE BY 8AM</p>
                <div className="flex items-center gap-4">
                    <p className="b2">THREADS</p>
                    <span style={{ width: "8px", height: "8px", background: "black", display: "block" }}></span>
                    <p className="b2">INSTAGRAM</p>
                    <span style={{ width: "8px", height: "8px", background: "black", display: "block" }}></span>
                    <p className="b2">TIKTOK</p>
                </div>
            </div>

        </footer>

        {/* Big MONOCAD */}
        <section className="bg-black w-full overflow-hidden">
            <h1 style={{ fontSize: "283px", color: "var(--background)", textAlign: "center" }}>
                MONOCAD
            </h1>
        </section>
        </>
    )
}