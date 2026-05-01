"use client";

import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-20 py-20 lg:px-10">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-40 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p className="text-gray-400 text-sm leading-6 hover:text-gray-100">
            “Love reading? We’ve got you covered. Find your next favorite book, start your reading journey today.”
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social Links</h2>
          <div className="flex gap-4 text-xl">
            
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            </Link>

            <Link href="https://github.com" target="_blank">
              <FaGithub className="hover:text-gray-400 cursor-pointer" />
            </Link>

          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm leading-6 font-semibold hover:text-gray-100">
            Email: nayemk0087@gmail.com <br />
            WhatsApp: +8801888252746
          </p>
        </div>
      </div>
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
      {/* bottom */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 hover:text-gray-100 font-semibold">
          <p>© {new Date().getFullYear()} Books. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <p
              href="/privacy"
              className="hover:text-gray-100 dark:hover:text-white transition"
            >
              Privacy
            </p>
            <p
              href="/terms"
              className="hover:text-gray-100 dark:hover:text-white transition"
            >
              Terms
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;