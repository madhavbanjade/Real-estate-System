import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  //this helps to track  the changes.
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData, // this tracks the data enter in the form and stay there and keep tracking..
      [e.target.id]: e.target.value,
    });
  };
  // console.log(formData);

  //This method is for hitting the api  of backend from frontend
  const handleSubmit = async (e) => {
    e.preventDefault();
    //By using the fetch you do not need to whole link api
    //Go through vite.config.js
    try {
      setLoading(true);
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //The type of data being sent..
        },
        body: JSON.stringify(formData), //The actual data being sent in json format.
      });
      // console.log(formData);
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto mt-[100px]">
      <h1 className="text-3xl text-center  font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="userName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg "
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
          {loading ? "Loading...." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-3 ">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
