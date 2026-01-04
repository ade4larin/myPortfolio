import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { NavBar } from "./NavBar";
import { Button } from "./Button";
import { SideBar } from "./SideBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Header = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.matchMedia("(max-width: 48rem)").matches : null);
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger)

  // MediaQuery Watcher
  useEffect(() => {

    const mediaWatcher = window.matchMedia("(max-width: 48rem)");
    setIsMobile(mediaWatcher.matches);

    function updateIsMobileScreen(e: MediaQueryListEvent) {
      setIsMobile(e.matches)
    }

    mediaWatcher.addEventListener('change', updateIsMobileScreen);

    return () => mediaWatcher.removeEventListener('change', updateIsMobileScreen)
  }, []);

  useGSAP(() => {

    if (!sidebarRef.current) return;

    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        y: '100%',
        duration: 1,
        ease: 'expo.out',
      })

      gsap.fromTo(".nav-list", {
        x: 25,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        delay: 0.3
      })
    } else {
      gsap.to(sidebarRef.current, {
        y: 0,
        duration: 1,
        ease: 'expo.in'
      })
    }

  }, [menuOpen])


  return (
    <>
      <header ref={containerRef} className="z-20 relative w-full h-25vh text-white flex flex-row items-center justify-between py-5 px-4 lg:px-10 border-b-1 border-alabaster-gray/50 bg-prussian-blue/20 backdrop-blur-lg">
        <h1 className="text-base sm:base-lg text-orange font-bold"><Link to='/'>Adefolarin.Adejare</Link></h1>

        {/* Desktop Nav */}
        {
          !isMobile && <NavBar />
        }

        {/* Mobile Nav or Desktop Button */}
        {
          !isMobile
            ? <Button />
            : <Menu className="cursor-pointer" onClick={() => {
              console.log("clicked")
              setMenuOpen(true)
            }} />
        }
      </header>


      {/*Sidebar*/}
      {
        isMobile && <SideBar setMenuOpen={setMenuOpen} sidebarRef={sidebarRef} />
      }
    </>
  )
}

export default Header
