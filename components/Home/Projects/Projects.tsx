import Image from "next/image"

const Projects = () => {
    return (
        <div className="py-16">
            <h1 className="text-center text-3xl md:text-4xl xl:text-5xl text-white font-bold">
                A small selection of recent <br />{" "} 
                <span className="text-cyan-300"> projects </span>
            </h1>
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                {/* Project 1 */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <Image src="/images/p1.jpg" alt="project 1" width={800} height={650} />
                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                        Modern Finance Dashboard UI
                    </h1>
                    <h1 className="pt-2 font-medium text-white/80">
                        Apps, Ui
                    </h1>
                </div>
                {/* Project 2 */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <Image src="/images/p2.jpg" alt="project 2" width={800} height={650} />
                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                        Portfolio Website for Creatives
                    </h1>
                    <h1 className="pt-2 font-medium text-white/80">
                        Bradning , Motion
                    </h1>
                </div>
                {/* Project 3 */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <Image src="/images/p3.jpg" alt="project 3" width={800} height={650} />
                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                        Brand Identity for Startups
                    </h1>
                    <h1 className="pt-2 font-medium text-white/80">
                        Branding , UI/UX
                    </h1>
                </div>
                {/* Project 4 */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <Image src="/images/p4.jpg" alt="project 4" width={800} height={650} />
                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                        SaaS Dashboard Development
                    </h1>
                    <h1 className="pt-2 font-medium text-white/80">
                        Apps, UI/UX
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Projects