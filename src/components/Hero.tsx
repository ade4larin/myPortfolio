import { useGSAP } from "@gsap/react"
import { Button } from "./Button"
import gsap from "gsap";

const Hero = () => {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".text-block", {
      y: -30,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      ease: "power1.in",
      duration: 1,
    });

    tl.fromTo(".inner-text",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
        duration: 1
      });

    tl.fromTo('.ball',
      {
        y: -50,
        opacity: 0
      },
      {
        y: 70,
        opacity: 1,
        duration: 1,
        ease: 'bounce.out',
        repeat: -1,
        yoyo: true
      }
    )


  }, []);

  return (
    <section className="text-block opacity-0 w-[90%] mx-auto flex flex-col items-center gap-6 sm:gap-8 text-center">
      <div className="bg-orange py-1 px-3 whitespace-nowrap rounded-4xl text-sm font-bold">Frontend Web Developer</div>
      <h2 className="sm:w-4/5 text-4xl leading-12 xl:leading-18 xl:w-[45%] xl:text-6xl">Crafting Interactive Experiences With
        <span className="inner-text inline-block text-orange pl-2 opacity-0">Modern Technologies</span>
      </h2>
      <p className="block text-center text-base w-full sm:w-3/4 text-alabaster-gray xl:text-lg">I build responsive and performant websites with modern frameworks and best practices.</p>
      <div className="flex flex-col gap-6 w-full sm:w-2/4 items-center justify-center sm:flex-row lg:w-2/5">
        <div className="ball opacity-0 w-4 h-4 mr-5 sm:hidden ml-auto rounded-full bg-orange" />
        <Button text="View my work" className="whitespace-nowrap w-full" />
        <Button text="Contact Me" className="whitespace-nowrap bg-orange border-transparent hover:border hover:border-white w-full" />
      </div>
    </section >
  )
}

export default Hero
