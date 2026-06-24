import { useEffect, useState } from "react"
import { api } from "../services/api.js"
import Loader from "./Loader.jsx"
import ErrorMessage from "./ErrorMessage.jsx"

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const data = await api.getProducts();
                setProducts(data)


            } catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchProducts();
    }, [])
    console.log(products);
    if (loading) return <Loader />
    if (error) return <ErrorMessage />
    return (
        <>
            {products.map((product) => (
                <img src={product.image} alt="" />
            ))}
        </>
    )
}

export default Products