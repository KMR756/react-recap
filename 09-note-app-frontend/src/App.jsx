import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title, note);
    setTitle('')
    setNote('')

  }
  return (
    <div className="bg-black h-screen p-20 text-white flex flex-col
     lg:flex-row ">
      <div className="bg-zinc-900 lg:w-1/2 h-fit rounded-2xl">
        <form onSubmit={submitHandler} className="flex items-center p-20 flex-col ">
          {/* first input */}
          <input className="border-2 text-6xl rounded-2xl my-10" type="text" placeholder="Enter Note" value={title} onChange={(e) => {
            setTitle(e.target.value)

          }} />
          <textarea className="h-40 border-2 w-full rounded-2xl text-4xl p-2 my-2" name="" placeholder="Enter Details" id="" value={note} onChange={(e) => {
            setNote(e.target.value)
          }}></textarea>
          <button className="mt-10 py-2 px-3 border-transparent bg-amber-50 text-black font-bold text-xl rounded cursor-pointer">Add Notes</button>
        </form>
      </div>
      <div className="p-20 lg:w-1/2">
        <h1 className="font-black text-6xl ">Your Notes</h1>
        <div className=" my-20 flex flex-wrap gap-10">
          <div className="lg:w-1/4 h-70 bg-zinc-900 rounded-2xl flex flex-col">
            <h1 className="text-center  p-6 font-bold text-2xl ">Note title  dcdcdasc csfscvfc csdfsde</h1>
            <p className="px-5 text-lg text-justify overflow-y-auto scrollbar-none" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt similique tenetur delectus consequatur odit quidem nihil neque fugit. Ipsam consequuntur molestiae, obcaecati architecto nisi explicabo eaque similique minus quam vsvsfcvsd cvsfvscf.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App