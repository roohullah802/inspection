// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import leftBg from "../assets/left-bg.svg"
import logoWhite from "../assets/logo-icon-white.svg";
import logoColor from "../assets/logo-icon-color.svg";
import leftSideLogo from "../assets/left-side-logo.svg";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin: React.SubmitEventHandler = (e) => {
        e.preventDefault();
        console.log({ username, password });
    };

    return (
        <div className="flex min-h-screen w-full overflow-hidden bg-white">
            {/* LEFT PANEL */}
            <div className="relative hidden w-full max-w-[52%] flex-col justify-between overflow-hidden md:flex">
                {/* Background image */}
                <img
                    src={leftBg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Purple gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-[#6d4a9c]/40 via-[#2D0D4D]/92 to-[#2D0D4D]" />

                {/* Center content */}
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-10 text-center">
                    <img src={leftSideLogo} alt="Inspection System" className="h-32 w-32 md:h-32 md:w-32" />

                    <h1 className="mt-6 text-4xl font-extrabold text-(--bright-teal)">
                        Inspection System
                    </h1>
                    <p className="mt-2 text-lg font-medium text-white">Labour Department</p>

                    {/* Icon badges */}
                    <div>
                        <img src={logoWhite} alt="Inspection System" className="w-56 md:mt-12 md:w-56" />
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/15 px-8 py-4 text-xs text-white/70">
                    <span>
                        © 2026 - <span className="text-(--bright-teal)">Inspection System</span> Dashboard
                    </span>
                    <div className="flex items-center gap-4">
                        <span className="h-1 w-1 rounded-full bg-white/40" />
                        <span>
                            Made by <span className="font-semibold text-yellow-400">KPITB</span>
                        </span>
                        <a href="#" className="hover:text-white">About</a>
                        <a href="#" className="hover:text-white">Policy</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex w-full flex-1 flex-col justify-between bg-[#F8FAFE] px-8 py-8 md:px-16 lg:px-24">
                {/* Header logo */}
                <div className="flex items-center gap-3">
                    <img src={logoColor} alt="Inspection System" className="ml-4 mb-3 h-22 w-66" />
                </div>

                {/* Form */}
                <div className="mx-auto w-full max-w-sm flex-1 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-[#2D0D4D]">Sign In</h2>
                    <p className="mt-1 text-sm text-gray-400">
                        Please Enter your login and password
                    </p>
                    <div className="my-6 border-t border-dashed border-gray-200" />

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-gray-500">
                                ENTER USERNAME
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="e.g. Email or Mobile No"
                                className="w-full rounded-lg bg-[#EEF1F8] px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-(--bright-teal)"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-gray-500">
                                ENTER PASSWORD
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    className="w-full rounded-lg bg-[#EEF1F8] px-4 py-3 pr-11 text-sm text-gray-700 placeholder:text-gray-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-(--bright-teal)"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((p) => !p)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 w-full rounded-lg bg-(--bright-teal) py-3.5 text-sm font-semibold text-white transition-colors hover:bg-(--bright-teal)"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">Don't have an account?</p>
                        <button
                            type="button"
                            className="mt-3 w-full rounded-lg bg-[#2D0D4D] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d1568]"
                        >
                            Create an Account
                        </button>
                    </div>
                </div>

                <div />
            </div>
        </div>
    );
}