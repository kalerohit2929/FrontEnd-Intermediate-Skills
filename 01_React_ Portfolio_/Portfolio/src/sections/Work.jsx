import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientButton from '../components/GradientButton'
import projects from '../components/ProjectsData'
import img from '../assets/1.jpeg'
import img1 from '../assets/2.jpeg'
import img2 from '../assets/3.jpeg'
import img3 from '../assets/4.jpeg'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);
  const projectsRef = useRef(null);

  useGSAP(() => {
    // Horizontal scroll
    const projectsWidth = projectsRef.current.scrollWidth;
    const scrollDistance = projectsWidth - window.innerWidth;

    gsap.to(projectsRef.current, {
      x: -scrollDistance,
      ease: "linear",
      scrollTrigger: {
        trigger: workRef.current,
        start: "center center",
        end: () => `+=${projectsWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1, // prevents flicker on fast scroll
        invalidateOnRefresh: true,
      },
    });
  }, { scope: workRef });

  return (
    <>
      <div ref={workRef} className="min-h-screen bg-white text-black py-24 lg:py-40 overflow-hidden">

        {/* Title Wrapper */}
        <div className='main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end'>
          <div className='max-w-xl'>
            <h3 className='mb-3'>Things I've Create</h3>
            <p className='text-lg lg:text-xl'>As a Front-end Developer, I love turning creative visions into reality, and this is a showcase
              of the interactive websites and user interfaces I've brought to life. Each piece highlights my
              passion for building intuitive and visually appealing digital experiences.</p>
          </div>
          <GradientButton text="Explore All" link="/projects" className="btn-light" />
        </div>

        
        <div ref={projectsRef} >
        <div className='flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6'>
    {/* First Project */}
    <a
      href="/project-one"
      className="relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-72 lg:h-96 block overflow-hidden group"
    >
      <img
        src={img}
        alt="My Virtual Assistant"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
        My Virtual Assistant
      </span>
    </a>

    {/* Second Project */}
    <a
      href="/project-two"
      className="relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-72 lg:h-96 block overflow-hidden group"
    >
      <img
        src={img1}
        alt="K72 Website"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
        K72 Website
      </span>
    </a>

    {/* Third Project */}
    <a
      href="/project-three"
      className="relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-72 lg:h-96 block overflow-hidden group"
    >
      <img
        src={img2}
        alt="Fru-Veg Organics"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
        Fru-Veg Organics
      </span>
    </a>


    <a
      href="/project-three"
      className="relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-72 lg:h-96 block overflow-hidden group"
    >
      <img
        src={img3}
        alt="Nutrition Market"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
       Nutrition Market
      </span>
    </a>
  </div>
          
          {/* <div className='flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6'>
            {projects.map(({ id, name, image, link }) => (
              <a
                key={id}
                href={link}
                className="relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-72 lg:h-96 block overflow-hidden group"
              >
                
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

               
                <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
                  {name}
                </span>
              </a>
            ))}
          </div> */}
        </div>

      </div>

    </>
  )
}

export default Work
