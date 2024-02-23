import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute top-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]">
      {/* Halo Ibu! */}
      <div className="w-72 h-28 bg-gradient-to-tl from-blue-300 to-yellow-300 rounded-2xl delay-500 hover:bg-blue-400 hover:scale-105 transition-all duration-200 active:scale-95 cursor-pointer">
        <div className="flex w-full justify-center items-center h-full p-5">
          <div className="grow text-center bg-red-400">
            W
            {/* <Image src="/vercel.svg" alt="" width={100} height={100} /> */}
          </div>
          <div className="grow text-center bg-blue-400">
            S
            {/* <p className="text-2xl font-bold">ChitChat</p>
            <p className="text-gray-500">You have a new message!</p> */}
          </div>
        </div>
      </div>

      <div className="card-holder">
        <div className="flex gap-4 w-full justify-center items-center h-full p-5">
          <div className="">
            <Image src="/vercel.svg" alt="" width={100} height={100} />
          </div>
          <div className="text-black space-y-2">
            <p className="text-2xl font-bold">ChitChat</p>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 "> */}
      {/* <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" />
        <div className="w-72 h-28 bg-white rounded-xl" /> */}
      {/* {[
          { name: "Jerry", message: "You have a new message!" },
          { name: "Budi", message: "You have a new message!" },
          { name: "Yanto", message: "You have a new message!" },
          { name: "asd", message: "You have a new message!" },
          { name: "sdf", message: "You have a new message!" },
          { name: "ChitChat", message: "You have a new message!" },
          { name: "ChitasdfChat", message: "You have a new message!" },
          { name: "asdf", message: "You have a new message!" },
          { name: "asd", message: "You have a new message!" },
          { name: "ChitChat", message: "You have a new message!" },
          { name: "asdf", message: "You have a new message!" },
          { name: "ChitChat", message: "You have a new message!" },
        ].map((data, index) => (
          <div key={index} className="w-[240px] h-42 bg-primary-500 rounded-xl">
            <div className="flex gap-4 w-full justify-center items-center h-full p-5">
              <div className="">
                <Image src="/vercel.svg" alt="" width={100} height={100} />
              </div>
              <div className="text-black space-y-2">
                <p className="text-[1rem] font-bold">{data.name}</p>
                <p className="text-[#c967d6]">{data.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
} 
