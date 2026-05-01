"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/navbar-logo.jpg"; 

const Navbar = () => {
  return (
    <div className="max-w-[90%] mx-auto border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        <div className="flex gap-2 items-center">
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
        </div>

        <ul className="flex items-center gap-5 text-gray-500 font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-books">All Books</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>

        <div className="flex gap-4 text-sm">
          <Link href="/signup">SignUp</Link>
          <Link href="/signin">SignIn</Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;