import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Contact = () => {
    return (
        <div className="py-16">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div className="">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                        Schedule a call with me to see if I can help
                    </h1>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg">
                        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                    </p>
                    {/* Info */}
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiPhone className="w-9 h-9 text-cyan-300"/>
                            <p className="text-xl font-bold text-gray-400">
                                +212 7 11 27 88 81
                            </p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiEnvelope className="w-9 h-9 text-cyan-300"/>
                            <p className="text-xl font-bold text-gray-400">
                                zahaanass277@gmail.com
                            </p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiMap className="w-9 h-9 text-cyan-300"/>
                            <p className="text-xl font-bold text-gray-400">
                                Mohammedia, Morocco
                            </p>
                        </div>
                    </div>
                    {/* Social icons */}
                    <div className="flex items-center mt-8 space-x-5">
                        <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
                            <FaFacebookF className="text-white w-6 h-6" />
                        </div>
                        <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-red-600 transition-all duration-300">
                            <FaYoutube className="text-white w-6 h-6" />
                        </div>
                        <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300">
                            <FaTwitter className="text-white w-6 h-6" />
                        </div>
                        <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300">
                            <FaInstagram className="text-white w-6 h-6" />
                        </div>
                    </div>
                </div>
                {/* Form */}
                <div data-aos="zoom-in" data-aos-delay="0" data-aos-anchor-placement="top-center" className="md:p-10 p-5 bg-[#131332] rounded-lg sm:mb-5 ">
                    <input type="text" placeholder="Name" className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70" />
                    <input type="email" placeholder="Email address" className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70" />
                    <input type="text" placeholder="Mobile number" className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70" />
                    <textarea placeholder="Your Message" className="px-4 py-3.5 mt-6 h-40 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"></textarea>
                    <button className="px-12 py-4 mt-8 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full ">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact