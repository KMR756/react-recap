import Comments from "./components/Comments"
import Posts from "./components/Post"
import Products from "./components/Products"
import User from "./components/User"


const App = () => {
  return (
    <div className="h-full w-full bg-black text-white">
      <User />
      {/* <Products /> */}
      <Posts />
      <Comments />
    </div>
  )
}

export default App