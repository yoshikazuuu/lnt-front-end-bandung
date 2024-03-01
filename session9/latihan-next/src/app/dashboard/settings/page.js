import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen w-screen flex-col items-center justify-center p-24">
            Settings

            <Link className="border rounded-md py-1 px-2 text-black bg-white" href="/dashboard">Dashboard</Link>
        </main>
    );
}
