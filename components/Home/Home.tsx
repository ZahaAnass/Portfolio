import ClientReview from "./ClientReview/ClientReview"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"
import Services from "./Service/Services"
import Skills from "./Skills/Skills"
import DevStatusAlert from "../Helper/UnderDev"
import Blog from "./Blog/Blog"
import Contact from "./Contact/Contact"

function Home() {
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