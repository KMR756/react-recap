import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const User = () => {

    const {
        data,
        loading,
        error,
    } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) return <Loader />;

    if (error) {
        return <ErrorMessage message={error} />;
    }

    console.log(data);

    return (
        <div>

            <h1>Posts</h1>

            {data.slice(0, 10).map((user) => (
                <div key={user.id}>

                    <h3>{user.title}</h3>

                    <p>{user.body}</p>

                </div>
            ))}

        </div>
    );
};

export default User;