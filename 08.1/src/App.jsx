import { useState } from "react"


const App = () => {
  const [IsNewName, setIsNewName] = useState(false)
  const toggleName = () => {
    setIsNewName(!IsNewName)
  }
  return (
    <div className="bg-gray-700 h-screen w-full text-white">

      <h1 className="text-7xl font-bold text-center pt-10">
        My name is : {IsNewName ? "KM Rejoan Tanjim" : "Rahat"}
      </h1>

      <div className="flex justify-center gap-4">

        <button
          onClick={toggleName}
          className="mt-10 text-3xl bg-amber-100 text-black font-bold py-3 px-6 rounded-3xl cursor-pointer hover:bg-amber-200 transition"
        >
          {IsNewName ? "See Old name" : "change name"}
        </button>
      </div>
    </div>
  )
}

export default App