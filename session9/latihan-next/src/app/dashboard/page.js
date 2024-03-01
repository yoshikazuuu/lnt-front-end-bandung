"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0)
    return (
        <main className="flex min-h-screen w-screen flex-col items-center justify-center p-24">
            Dashboard

            <br />

            <p onClick={() => setCount(prev => prev + 1)}>
                Click: {count}
            </p>

            <Link className="border rounded-md py-1 px-2 text-black bg-white" href="/">Homepage</Link>
            <Link className="border rounded-md py-1 px-2 text-black bg-white" href="/dashboard/settings">Settings</Link>
        </main>
    );
}
