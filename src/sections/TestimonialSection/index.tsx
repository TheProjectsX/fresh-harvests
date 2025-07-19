"use client";

import LeafImage from "@/assets/images/leaf.png";
import ThoughtLinesImage from "@/assets/images/thought-lines.png";
import { SectionHeading } from "@/component/Heading";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Sophia Williams",
            profession: "Professional Chef",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            testimonial:
                "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
        },
        {
            name: "Liam Patel",
            profession: "Fitness Trainer",
            image: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3",
            testimonial:
                "Fresh Harvest has completely transformed my diet. Their fruits are always ripe and bursting with flavor. I order weekly and never worry about quality. It's reliable, convenient, and keeps me energized for my workouts.",
        },
        {
            name: "Emily Chen",
            profession: "Mom & Blogger",
            image: "https://images.unsplash.com/photo-1604946590896-55a1becbe5d6",
            testimonial:
                "Being a mom means juggling a million things. Fresh Harvest helps me feed my family healthy without extra stress. The variety is great, delivery is quick, and the kids love the taste. It’s now a weekly habit for us.",
        },
        {
            name: "Carlos Rivera",
            profession: "Smoothie Bar Owner",
            image: "https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a",
            testimonial:
                "My business depends on high-quality fruit, and Fresh Harvest always delivers. Their produce is vibrant, fresh, and consistent. Customers notice the difference, and it makes my job so much easier. Total game changer for my shop.",
        },
    ];

    return (
        <section className="relative max-width">
            <div className="max-w-[500px] mx-auto mb-6 text-center">
                <SectionHeading content="Testimonial" className="mx-auto" />
                <h3 className="font-medium text-3xl md:text-5xl mb-5">
                    What Our Customers Say
                </h3>
                <p className="text-sm font-primary">
                    Don't just take our word for it—here's what some of our
                    customers have to say about their experience with Fresh
                    Harvest:
                </p>
            </div>

            {/* Testimonials */}
            <div className="max-w-[900px] mx-auto">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    emulateTouch
                    swipeable
                    autoPlay
                >
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row items-center gap-6 md:gap-10 select-none"
                        >
                            <div className="relative shrink-0 w-46 h-72">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-full w-auto rounded-full object-cover mb-4"
                                    width={200}
                                    height={300}
                                />

                                {/* Thought Lines */}
                                <Image
                                    src={ThoughtLinesImage.src}
                                    alt="Thought Lines"
                                    width={ThoughtLinesImage.width}
                                    height={ThoughtLinesImage.height}
                                    className="absolute -right-7 sm:-right-10 top-1 !w-12 h-auto rotate-[15deg] drop-shadow-2xl"
                                />
                            </div>
                            <div className="px-6 py-4 rounded-2xl bg-[#F4F6F6]">
                                <p className="mb-4 text-left leading-7">
                                    "{testimonial.testimonial}"
                                </p>
                                <p className="flex items-center flex-wrap gap-1">
                                    <span className="font-semibold">
                                        {testimonial.name}
                                    </span>{" "}
                                    -<span>{testimonial.profession}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Leaves */}
            <Image
                src={LeafImage.src}
                alt="Leaf"
                width={LeafImage.width}
                height={LeafImage.height}
                className="absolute right-0 md:right-[4%] -top-10 w-14 sm:w-18 h-auto rotate-[-45deg] drop-shadow-2xl"
            />
            <Image
                src={LeafImage.src}
                alt="Leaf"
                width={LeafImage.width}
                height={LeafImage.height}
                className="absolute left-4 md:left-[4%] top-0 w-14 sm:w-18 h-auto rotate- drop-shadow-2xl"
            />
        </section>
    );
};

export default TestimonialSection;
