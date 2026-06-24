import { useEffect, useState } from "react"
import { api } from "../services/api"
import Loader from "./Loader"
import ErrorMessage from "./ErrorMessage"

const Post = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true)
                const data = await api.getPosts();
                setPosts(data)

            } catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [])
    // console.log(posts);
    if (loading) return <Loader />
    if (error) return <ErrorMessage />
    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase()))

    // console.log(filteredPosts);

    return (
        <div>
            <input type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            {filteredPosts.slice(0, 10).map((post) => (
                <div><h2>{post.title}</h2></div>
            ))}
        </div>

    )
}

export default Post