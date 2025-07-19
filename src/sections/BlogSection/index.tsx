import BlogCard from "@/component/BlogCard";
import { SectionHeading } from "@/component/Heading";
import LeafImage from "@/assets/images/leaf.png";
import React from "react";
import Image from "next/image";

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
            image: "https://images.unsplash.com/photo-1627989147125-a004d05946d3",
            createdAt: "2025-07-15T10:00:00Z",
            updatedAt: "2025-07-15T10:00:00Z",
        },
        {
            id: 2,
            title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
            image: "https://images.unsplash.com/photo-1558380381-c280df4d1b8b",
            createdAt: "2025-07-14T09:30:00Z",
            updatedAt: "2025-07-14T09:30:00Z",
        },
        {
            id: 3,
            title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
            image: "https://images.unsplash.com/photo-1526470303-82c787d88682",
            createdAt: "2025-07-13T08:45:00Z",
            updatedAt: "2025-07-13T08:45:00Z",
        },
    ];

    return (
        <section className="relative max-width">
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
                {blogPosts.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

            {/* Leaf */}
            <Image
                src={LeafImage.src}
                alt="Leaf"
                width={LeafImage.width}
                height={LeafImage.height}
                className="absolute right-[20%] top-0 w-18 h-auto rotate-[-45deg] drop-shadow-2xl hidden md:inline"
            />
        </section>
    );
};

export default BlogSection;
