"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
    return (
        <div className="flex max-w-2xl mx-auto items-center justify-center shadow border px-4 py-10 mt-20 rounded-xl">
            <div className="text-center max-w-lg">
                {/* Title */}
                <h2 className="mt-4 text-4xl font-semibold">
                    This page is not found
                </h2>

                {/* Description */}
                <p className="mt-2 text-muted-foreground">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <Link href="/">
                        <Button color="primary">Go Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}