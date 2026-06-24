import { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";

const useAxios = (endpoint) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        let isMounted = true;

        const controller = new AbortController();

        const fetchData = async () => {

            try {

                setLoading(true);

                setError("");

                const response = await axiosInstance.get(endpoint, {
                    signal: controller.signal,
                });

                if (isMounted) {
                    setData(response.data);
                }

            } catch (err) {

                if (err.name !== "CanceledError") {

                    setError(
                        err.response?.data?.message ||
                        err.message ||
                        "Something went wrong"
                    );
                }

            } finally {

                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
            controller.abort();
        };

    }, [endpoint]);

    return {
        data,
        loading,
        error,
    };
};

export default useAxios;