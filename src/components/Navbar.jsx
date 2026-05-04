"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/navbar-logo.jpg";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
  };

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

        <ul className="hidden md:flex items-center gap-5 text-gray-500 font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-books">All Books</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>

        <div className="flex items-center gap-4">

          {!user && (
            <ul className="flex gap-3">
              <Button variant="secondary" size="sm">
                <Link href="/signin">Login</Link>
              </Button>
              <Button variant="secondary" size="sm">
                <Link href="/signup">Register</Link>
              </Button>
            </ul>
          )}
          {user && (
            <div className="flex gap-4 items-center">
              <Avatar size="sm">
                <Avatar.Image
                  alt="User"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="danger">
                SignOut
              </Button>
            </div>
          )}

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden pb-4 px-2">
          <ul className="flex flex-col gap-3 text-gray-500 font-semibold">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/all-books" onClick={() => setMenuOpen(false)}>All Books</Link></li>
            <li><Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;