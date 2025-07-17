import { SectionHeading } from "@/component/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogSection = () => {
    const blogPosts = [
        {
            title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
            image: "https://images.unsplash.com/photo-1627989147125-a004d05946d3",
            createdAt: "2025-07-15T10:00:00Z",
            updatedAt: "2025-07-15T10:00:00Z",
        },
        {
            title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
            image: "https://images.unsplash.com/photo-1558380381-c280df4d1b8b",
            createdAt: "2025-07-14T09:30:00Z",
            updatedAt: "2025-07-14T09:30:00Z",
        },
        {
            title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
            image: "https://images.unsplash.com/photo-1526470303-82c787d88682",
            createdAt: "2025-07-13T08:45:00Z",
            updatedAt: "2025-07-13T08:45:00Z",
        },
    ];

    return (
        <section className="max-width">
            <div className="max-w-[500px] mx-auto mb-8 text-center">
                <SectionHeading content="Our Blog" className="mx-auto" />
                <h3 className="font-medium text-3xl md:text-5xl mb-5">
                    Fresh Harvest Blog
                </h3>
                <p className="text-sm font-primary">
                    Welcome to the Fresh Harvest Blog, your go-to resource for
                    all things related to fresh produce, healthy eating, and
                    culinary inspiration.
                </p>
            </div>

            {/* Blogs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {blogPosts.map((post, idx) => (
                    <div key={idx}>
                        <div className="aspect-[3/2] mb-3">
                            <Image
                                src={post.image}
                                alt="Blog Image"
                                width={384}
                                height={260}
                                className="w-full h-full rounded-3xl"
                            />
                        </div>
                        <p className="font-secondary mb-1">
                            {new Date(post.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                }
                            )}
                        </p>
                        <h4 className="font-medium text-lg mb-2 line-clamp-2">
                            {post.title}
                        </h4>

                        <Link
                            href={"#"}
                            className="flex items-center gap-1 text-primary hover:underline underline-offset-4 w-fit"
                        >
                            Read More <FaArrowRight />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
