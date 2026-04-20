"use client"

import { useState } from "react"
import Image from "next/image"

function Menu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black">

      <button onClick={onClose} className=" cursor-pointer absolute top-8 right-30 bg-red-700 text-white px-6 py-2">
        <h4>CLOSE ×</h4>
      </button>

      <div className="grid grid-rows-4 h-full bg-neutral5">
        <div className="flex items-center px-16 ">
            <h1 className= "extra2" style={{ color: "var(--neutral3)" }}>ABOUT</h1>
            <Image src="/icon/arrow-up-right.svg" alt="arrow" width={120} height={120} />
        </div>
        <div className="flex items-center px-16 ">
            <h1 className= "extra2" style={{ color: "var(--neutral3)" }}>SERVICES</h1>
            <Image src="/icon/arrow-up-right.svg" alt="arrow" width={120} height={120} />
        </div>
         <div className="flex items-center px-16 ">
            <h1 className= "extra2" style={{ color: "var(--neutral3)" }}>PROJECTS</h1>
            <Image src="/icon/arrow-up-right.svg" alt="arrow" width={120} height={120} />
        </div>
         <div className="flex items-center px-16 ">
            <h1 className= "extra2" style={{ color: "var(--neutral3)" }}>BOOK NOW</h1>
            <Image src="/icon/arrow-up-right.svg" alt="arrow" width={120} height={120} />
        </div>
      </div>

    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-30 py-8">
      <h4>MONOCAD</h4>
      <h4 className="cursor-pointer text-black px-6 py-2" onClick={() => setMenuOpen(true)}>MENU +</h4>

      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </nav>
  )
}