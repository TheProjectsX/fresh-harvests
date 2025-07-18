import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({
    blog,
}: {
    blog: {
        id: string | number;
        title: string;
        image: string;
        createdAt: string;
        updatedAt: string;
    };
}) => {
    return (
        <div>
            <div className="aspect-[3/2] mb-3">
                <Image
                    src={blog.image}
                    alt="Blog Image"
                    width={384}
                    height={260}
                    className="w-full h-full rounded-3xl"
                />
            </div>
            <p className="font-secondary mb-1">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}
            </p>
            <Link href={`/blog/${blog.id}`}>
                <h4 className="font-medium text-lg mb-2 line-clamp-2 hover:underline underline-offset-2">
                    {blog.title}
                </h4>
            </Link>

            <Link
                href={`/blog/${blog.id}`}
                className="flex items-center gap-1 text-primary hover:underline underline-offset-4 w-fit"
            >
                Read More <FaArrowRight />
            </Link>
        </div>
    );
};

export default BlogCard;
