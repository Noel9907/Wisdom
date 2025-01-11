import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";

const usePostLetter = () => {
  const [Loading, setLoading] = useState(false);

  const createletter = async ({ name, letter }) => {
    const sucsess = handleInputerrors(name, letter);

    if (!sucsess) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:2000/letter/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, letter }),
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return { createletter, Loading };
};

export default usePostLetter;

function handleInputerrors(name, letter) {
  if (!name || !letter) {
    toast.error("Fill all the feilds");
    return false;
  } else {
    return true;
  }
}
