'use client'

import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Motion = () => {
    return (
        <div className="flex justify-center">
            <Link href="/all-books">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="font-semibold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
                  Browse All Books
                </Button>
              </motion.div>
            </Link>
          </div>
    );
};

export default Motion;