import BlogCard from "./BlogCard"

const Blog = () => {
    return (
        <div className="py-16">
            <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white">
                My Latest <br /> {" "}
                <span className="text-cyan-200">Blogs</span>
            </h1>
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center mt-16">
                <div data-aos="fade-right" data-aos-delay="0" data-aos-anchor-placement="top-center">
                    <BlogCard image="/images/b1.jpg" title="Learn how to build an amazing portfolio website using next js" />
                </div>
                <div data-aos="fade-right" data-aos-delay="100" data-aos-anchor-placement="top-center">
                    <BlogCard image="/images/b2.jpg" title="Learn how to build an amazing Blog website using next js" />
                </div>
                <div data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    <BlogCard image="/images/b3.jpg" title="Learn how to build an amazing Social Media website using next js" />
                </div>
            </div>
        </div>
    )
}

export default Blog