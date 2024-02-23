// "use client";

// import { useState, useRef, useEffect } from "react";

// export default function Home() {
//   // const [count, setCount] = useState(0);
//   // const [nama, setNama] = useState("");

//   // const handleNama = (e) => {
//   //   setNama(e.target.value);
//   // }

//   // return (
//   //   <div className="flex gap-4 flex-col w-screen h-screen justify-center items-center">
//   //     <button onClick={() => setCount(prev => prev + 12)} className="bg-white text-black p-3 rounded-md">Click me!</button>
//   //     <p className="text-3xl">Counter: {count}</p>

//   //     <input type="text" placeholder="Nama" className="text-black" onChange={handleNama}></input>
//   //     <p className="text-3xl">Nama: {nama}</p>

//   //   </div>
//   // );

//   // const ref = useRef(null);
//   // const [refresh, setRefresh] = useState(false);

//   // console.log(ref);
//   // const handleClick = (e) => {
//   //   ref.current++;
//   //   alert("clicked" + ref.current + "time(s)");
//   // }

//   // useEffect(() => {
//   //   console.log("useState");
//   // }, [ref]);

//   // const ref = useRef(null);
//   // console.log(ref);

//   // const handleFocus = () => {
//   //   ref.current.focus();
//   // }

//   // return (<div className="flex gap-4 flex-col w-screen h-screen justify-center items-center">
//   //   <button onClick={handleClick} className="bg-white text-black p-3 rounded-md">clicked { } time(s)</button>

//   //   <button onClick={() => setRefresh(prev => !prev)} className="bg-white text-black p-3 rounded-md">Refresh</button>

//   //   {/* <input ref={ref} type="text" className="text-black"></input>

//   //   <button onClick={handleFocus}>focus</button> */}

//   // </div>)

//   const [count, setCount] = useState(0);
//   const [data, setData] = useState({}); // {}

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json().then(json => setData(json)));
//   }, []);

//   return (<div className="flex gap-4 flex-col w-screen h-screen justify-center items-center">

//   </div>);

// }

// function Apalah({ nama }) {

// }

"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    setIsDark(prev => !prev);
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme, isDark }}>
      <Text />
    </ThemeContext.Provider>
  )
}

function Text() {
  const { theme, handleTheme, isDark } = useContext(ThemeContext);
  return (
    <div className={isDark ? "bg-white text-black" : "bg-black text-white"}>
      <div className="flex text-xl flex-col h-screen justify-center items-center">
        Halo {theme}
        <button onClick={handleTheme}>Change theme</button>
      </div>
    </div>
  )
}