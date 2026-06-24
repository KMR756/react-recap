const BASE_URL = "https://jsonplaceholder.typicode.com"
const BASE_URL_PRODUCT = "https://fakestoreapi.com"
export const api = {
    // get user API start
    async getUser() {
        const response = await fetch(`${BASE_URL}/users`)
        if (!response.ok) {
            throw new Error("Faild to fetch users");
        }

        return response.json()


    },
    // ********************

    // get post start
    async getPosts() {
        const response = await fetch(`${BASE_URL}/posts`)
        if (!response.ok) {
            throw new Error("faild to fetch posts")
        }
        return response.json()
    },

    // **************

    // get comment 
    async getComments() {
        const response = await fetch(`${BASE_URL}/comments`)
        if (!response.ok) {
            throw new Error("comment fetch faild...")
        }
        return response.json()
    },
    // *****************

    // get product 
    async getPhotos() {
        const response = await fetch(`${BASE_URL_PRODUCT}products`)
        if (!response.ok) {
            throw new Error("Product fetching faild...")
        }
        return response.json()
    },
    // ******************

    // get product start
    async getProducts() {
        const response = await fetch(`${BASE_URL_PRODUCT}/products`)
        if (!response.ok) {
            throw new Error("product fetching faild...")
        }
        return response.json()
    }
    // ********************




}