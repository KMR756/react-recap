import { useState } from "react"


const App = () => {
  const [Count, setCount] = useState(0)
  const increamentNum = () => {
    setCount(Count + 1)
  }
  const decreamentNum = () => {
    setCount(Count - 1)
  }
  const resetNum = () => {
    setCount(0)
  }

  return (
    <div className="bg-black h-screen w-full text-white pt-10">
      <div className="w-full md:w-1/3 xl:w-1/2 mx-auto">
        <h1 className=" p-10 mx-2 md:mx-0 text-2xl md:text-9xl border-transparent bg-amber-950 rounded-3xl text-center">{Count}</h1>
        <div className="flex gap-4">
          <button onClick={increamentNum} className="block mt-10 text-center w-1/3 md:w-1/2 mx-auto font-extrabold text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl border-transparent px-2 md:px-4 xl:px-6 2xl:px-8 py-1 md:py-2 xl:py-4  bg-amber-500 rounded-4xl cursor-pointer">Increase</button>
          <button onClick={decreamentNum} disabled={Count === 0} className="block mt-10 text-center w-1/3 md:w-1/2 mx-auto font-extrabold text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl border-transparent px-2 md:px-4 xl:px-6 2xl:px-8 py-1 md:py-2 xl:py-4  bg-amber-500 rounded-4xl cursor-pointer disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed ">decrease</button>
        </div>
        <button onClick={resetNum} disabled={Count === 0} className="block mt-5 text-center w-1/3 md:w-1/2 mx-auto font-extrabold text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl not-[]: border-transparent px-2 md:px-4 xl:px-6 2xl:px-8 py-1 md:py-2 xl:py-4 bg-amber-500 rounded-4xl cursor-pointer  disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed">Reset</button>
      </div>
    </div>
  )
}

export default App