import {getFooterData} from "@/lib/api";

export default async function Page() {
    const footer = await getFooterData()

    return (
        <>
        <footer className="px-8 md:px-30 py-8 flex flex-col" style={{ gap: "clamp(60px, 15vw, 208px)" }}>

            {/* Top Bar */}
            <div className= "footer-top" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <h4>{footer.logo_text}</h4>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <p className="b2">ABOUT</p>
                    <span style={{ width: "8px", height: "8px", background: "black", display: "block" }}></span>
                    <p className="b2">SERVICES</p>
                    <span style={{ width: "8px", height: "8px", background: "black", display: "block" }}></span>
                    <p className="b2">PROJECTS</p>
                </div>
            </div>

            {/* Middle Content */}
            <div className="footer-middle" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: "32px" }}>
                <div>
                    <h2>{footer.talk_label}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <p className="b2">404</p>
                    <p className="b2">LICENSE</p>
                    <p className="b2">CHANGELOG</p>
                    <p className="b2">STYLE GUIDE</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <p className="b2">{footer.alamat}</p>
                    <p className="b2">{footer.email}</p>
                    <p className="b2">{footer.phone}</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <p className="b2">{footer.copyright}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
            <h1 style={{ fontSize: "clamp(60px, 20vw, 283px)", color: "var(--background)", textAlign: "center" }}>
                MONOCAD
            </h1>
        </section>
        </>
    )
}