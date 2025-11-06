import Hero from "./Hero/Hero"
import Services from "./Service/Services"

function Home() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Services />
        </div>
    )
}

export default Home