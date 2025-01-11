import toast from "react-hot-toast";
import { useState, useCallback } from "react";

const useGetLetter = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getletter = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:2000/letter/get", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setPosts(data);
      if (data.error) {
        throw new Error(data.error); // Handle custom error from API
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, []);

  return { getletter, posts, loading };
};

export default useGetLetter;
