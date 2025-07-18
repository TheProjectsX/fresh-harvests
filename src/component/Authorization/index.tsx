"use client";

import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Authorization = ({
    type,
    setType,
}: {
    type: "login" | "register" | null;
    setType: React.Dispatch<React.SetStateAction<"login" | "register" | null>>;
}) => {
    const [passVisible, setPassVisible] = useState<boolean>(false);

    useEffect(() => {
        if (type) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [type]);

    if (!type) return null;

    return (
        <div
            className="absolute top-0 bottom-0 left-0 right-0 bg-black/20 z-[90] cursor-pointer flex justify-center items-center px-4"
            onClick={(e) => {
                if (e.currentTarget === e.target) {
                    setType(null);
                }
            }}
        >
            {type === "login" && (
                <div className="bg-white max-w-[450px] w-full px-5 sm:px-7 py-8 rounded-lg z-[90] cursor-auto relative">
                    <h3 className="font-semibold text-3xl mb-4 text-center">
                        Login
                    </h3>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className="mb-6"
                    >
                        <label className="flex flex-col gap-1.5 font-secondary mb-4">
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                className="px-3 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-[dodgerBlue]"
                                placeholder="Enter your email"
                            />
                        </label>
                        <label className="relative flex flex-col gap-1.5 font-secondary mb-4">
                            <p>Password</p>
                            <input
                                type={passVisible ? "text" : "password"}
                                name="password"
                                className="px-3 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-[dodgerBlue]"
                                placeholder="Enter your password"
                            />

                            <button
                                className="text-xl absolute right-3 bottom-3 cursor-pointer"
                                onClick={() => setPassVisible((prev) => !prev)}
                            >
                                {passVisible ? (
                                    <IoEyeOffOutline />
                                ) : (
                                    <IoEyeOutline />
                                )}
                            </button>
                        </label>

                        <div className="flex justify-between mb-4">
                            <label className="flex items-center gap-2 text-sm font-medium select-none">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm"
                                />
                                Remember me
                            </label>
                            <button className="font-semibold text-sm hover:underline underline-offset-4 cursor-pointer">
                                Forgot Password
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary px-8 py-2 rounded-md text-white w-full cursor-pointer"
                        >
                            Login
                        </button>
                    </form>

                    <div className="flex items-center gap-1.5 mb-4">
                        <span className="h-[1px] flex-1 bg-[#D9D9D9]"></span>
                        <span className="text-[#4A4A52] text-sm font-semibold">
                            Or Sign in With
                        </span>
                        <span className="h-[1px] flex-1 bg-[#D9D9D9]"></span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <button className="px-2 py-1.5 flex-1 border border-[#D9D9D9] rounded-lg flex items-center justify-center gap-2 text-lg font-semibold cursor-pointer">
                            <FcGoogle className="text-xl" /> Google
                        </button>
                        <button className="px-2 py-1.5 flex-1 border border-[#D9D9D9] rounded-lg flex items-center justify-center gap-2 text-lg font-semibold cursor-pointer">
                            <FaFacebook className="text-blue-600 text-xl" />{" "}
                            Facebook
                        </button>
                    </div>

                    <p className="text-center font-semibold text-sm">
                        Don't have an account?{" "}
                        <span
                            className="text-primary cursor-pointer hover:underline underline-offset-4"
                            onClick={() => setType("register")}
                        >
                            Sign Up
                        </span>
                    </p>

                    <button
                        className="text-xl absolute right-4 top-4 cursor-pointer p-1.5 rounded-full hover:bg-gray-100"
                        onClick={() => setType(null)}
                    >
                        <RxCross1 />
                    </button>
                </div>
            )}

            {type === "register" && (
                <div className="bg-white max-w-[450px] w-full px-5 sm:px-7 py-8 rounded-lg z-[90] cursor-auto relative">
                    <h3 className="font-semibold text-3xl mb-4 text-center">
                        Register
                    </h3>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className="mb-6"
                    >
                        <label className="flex flex-col gap-1.5 font-secondary mb-4">
                            <p>Full Name</p>
                            <input
                                type="text"
                                name="name"
                                className="px-3 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-[dodgerBlue]"
                                placeholder="Enter your name"
                            />
                        </label>
                        <label className="flex flex-col gap-1.5 font-secondary mb-4">
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                className="px-3 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-[dodgerBlue]"
                                placeholder="Enter your email"
                            />
                        </label>
                        <label className="relative flex flex-col gap-1.5 font-secondary mb-4">
                            <p>Password</p>
                            <input
                                type={passVisible ? "text" : "password"}
                                name="password"
                                className="px-3 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-[dodgerBlue]"
                                placeholder="Enter your password"
                            />

                            <button
                                className="text-xl absolute right-3 bottom-3 cursor-pointer"
                                onClick={() => setPassVisible((prev) => !prev)}
                            >
                                {passVisible ? (
                                    <IoEyeOffOutline />
                                ) : (
                                    <IoEyeOutline />
                                )}
                            </button>
                        </label>

                        <button
                            type="submit"
                            className="bg-primary px-8 py-2 rounded-md text-white w-full cursor-pointer"
                        >
                            Register
                        </button>
                    </form>

                    <div className="flex items-center gap-1.5 mb-4">
                        <span className="h-[1px] flex-1 bg-[#D9D9D9]"></span>
                        <span className="text-[#4A4A52] text-sm font-semibold">
                            Or Sign Up With
                        </span>
                        <span className="h-[1px] flex-1 bg-[#D9D9D9]"></span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <button className="px-2 py-1.5 flex-1 border border-[#D9D9D9] rounded-lg flex items-center justify-center gap-2 text-lg font-semibold cursor-pointer">
                            <FcGoogle className="text-xl" /> Google
                        </button>
                        <button className="px-2 py-1.5 flex-1 border border-[#D9D9D9] rounded-lg flex items-center justify-center gap-2 text-lg font-semibold cursor-pointer">
                            <FaFacebook className="text-blue-600 text-xl" />{" "}
                            Facebook
                        </button>
                    </div>

                    <p className="text-center font-semibold text-sm">
                        Already have an account?{" "}
                        <span
                            className="text-primary cursor-pointer hover:underline underline-offset-4"
                            onClick={() => setType("login")}
                        >
                            Log In
                        </span>
                    </p>

                    <button
                        className="text-xl absolute right-4 top-4 cursor-pointer p-1.5 rounded-full hover:bg-gray-100"
                        onClick={() => setType(null)}
                    >
                        <RxCross1 />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Authorization;
