"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/navbar-logo.jpg";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [user, setUser] = useState(null);

    // 🔹 Example: simulate auth 
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <div className="w-full shadow">
            <div className="max-w-[90%] mx-auto px-6 py-4 flex items-center justify-between">
            {/* 🔹 Left: Logo */}

            <Link href="/">
                <Image
                    src={logoImg}
                    alt="logo"
                    width={80}
                    height={60}
                    priority
                    className="rounded"
                />
            </Link>

            {/* 🔹 Center: Nav Links */}
            <ul className="space-x-6 font-semibold text-gray-500 hidden md:flex">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/books" className="hover:text-gray-300">All Books</Link>
                <Link href="/profile" className="hover:text-gray-300">My Profile</Link>
            </ul>

            {/* 🔹 Right: Auth Section */}
            <div>
                {!user ? (
                    <Link href="/login">
                        <button className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600">
                            Login
                        </button>
                    </Link>
                ) : (
                    <div className="flex items-center gap-3">
                        <span>{user.name}</span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
              </div>
        </div>
    );
};

export default Navbar;