import React, { useRef, useState } from 'react'
import logo from '../assets/logo1.png'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);

  // GSAP hook
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6
    });
  });

  return (
    <>
      <nav ref={navbarRef} className='md:fixed top-0 w-full mix-blend-difference z-30'>
        <div className='main-container py-4 flex justify-between items-center'>
          <a href="/"><img className='' src={logo} alt="" style={{width:'60px',height:'60px'}}/></a>
          <div onClick={() => setMenuOpen(!menuOpen)} className='flex flex-col gap-1.5 cursor-pointer'>
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            ></span>
            {/* <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white ${menuOpen ? "rotate-45 translate-y-[4px]"}`}></span> */}
            {/* <span className='inline-block w-10 lg:w-12 h-0.5 bg-white'></span> */}
               <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            ></span>

          </div>

        </div>

      </nav>
      <div className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl ${menuOpen ? "translate-y-0" : "-translate-y-full"}`} onClick={()=>setMenuOpen(false)}>
        <a className='menu-link' href="/about">About Me</a>
        <a className='menu-link' href="/projects">Projects</a>
        <a className='menu-link' href="/contact">Contacts</a>

      </div>



    </>
  )
}

export default Navbar
