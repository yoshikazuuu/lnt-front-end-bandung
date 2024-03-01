import Link from "next/link";
import { navigate } from "./actions";

export default function Home() {
  return (
    <main className="flex gap-2 min-h-screen flex-col items-center justify-center p-24">
      Homepage
      {/* <Image src="/images/ena-1.png" alt="Ena" width={1000} height={300} />*/}

      <form action={navigate}>
        <input type="text" name="id" className="border rounded-md py-1 px-2 text-black bg-white" />
        <button className="border rounded-md py-1 px-2 text-black bg-white">Search</button>
      </form>

      <Link className="border rounded-md py-1 px-2 text-black bg-white" href="/dashboard">Dashboard Link</Link>
    </main>
  );
}
