import Link from "next/link";
import Image from "next/image"

export default async function Home({ params }) {
    const response = await fetch(`https://api.github.com/users/${params.user}`);
    const data = await response.json();

    console.log(data);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">

            <div className="w-96 flex flex-col gap-1 justify-center items-center h-[500px] my-10 bg-gray-400/10 rounded-lg">
                <Image src={data.avatar_url} alt="Ena" width={200} height={200} className="rounded-full" />
                <h1 className="text-2xl font-extrabold">{data.name}</h1>
                <p className="text-gray-500">{data.login}</p>

                <p className="text-gray-500 p-10 pt-5 text-sm">{data.bio}</p>
            </div>

            <Link className="border rounded-md py-1 px-2 text-black bg-white" href="/">Homepage</Link>
        </main>
    );
}