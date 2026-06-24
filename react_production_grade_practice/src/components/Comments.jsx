import { useEffect, useState } from "react"
import { api } from "../services/api"
import Loader from "./Loader"
import ErrorMessage from "./ErrorMessage"


const Comments = () => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchCommects = async () => {
            try {
                setLoading(true)
                const data = await api.getComments()
                setComments(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchCommects()
    }, [])
    // console.log(comments);
    if (loading) return <Loader />
    if (error) return <ErrorMessage />
    return (
        <div>
            {comments.map((comment) => (
                <h5>{comment.email}</h5>
            ))}
        </div>
    )
}

export default Comments