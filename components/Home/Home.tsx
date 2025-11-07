"use client";
import ClientReview from "./ClientReview/ClientReview"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"
import Services from "./Service/Services"
import Skills from "./Skills/Skills"
import DevStatusAlert from "../Helper/UnderDev"
import Blog from "./Blog/Blog"
import Contact from "./Contact/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



function Home() {

    useEffect(() => {
        const initAOS = async () => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            })
        }

        initAOS()
    }, [])

    return (
        <div className="overflow-hidden">
            <DevStatusAlert />
            <Hero />
            <Services />
            <Resume />
            <Projects />
            <Skills />
            <ClientReview />
            <Blog />
            <Contact />
        </div>
    )
}

export default Home