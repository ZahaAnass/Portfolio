import ClientReview from "./ClientReview/ClientReview"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"
import Services from "./Service/Services"
import Skills from "./Skills/Skills"
import DevStatusAlert from "../Helper/UnderDev"

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
        </div>
    )
}

export default Home