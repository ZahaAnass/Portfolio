"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '@/constants/responsive';
import ClientReviewCars from './ClientReviewCars';

const ClientReview = () => {
    return (
        <div className="py-16">
            <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white">
                Kind words from satisfied <br /> {" "}
                <span className="text-cyan-200">clients</span>
            </h1>
            <div className="mt-16 w-[70%] mx-auto">
                <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                >
                    <ClientReviewCars image="/images/c1.png" name="Janny Doe" role="CEO, Lead Developer" />
                    <ClientReviewCars image="/images/c2.png" name="John Doe" role="UI/UX Designer" />
                    <ClientReviewCars image="/images/c3.png" name="Jessica Doe" role="CEO, Tech Company" />
                    <ClientReviewCars image="/images/c4.png" name="Jara Doe" role="Web Developer" />
                    <ClientReviewCars image="/images/c5.png" name="Jora Doe" role="CEO, Design Studio" />
                </Carousel>
            </div>
        </div>
    )
}

export default ClientReview