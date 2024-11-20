import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AllContext";

export default function Register() {
  const { setUser, createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 6) {
      setError({ ...error, name: "your name at least must be 6 cherecter." });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        setUser(result.user);

        updateUserProfile({ displayName: name, photoURL: photo });

        navigate("/");
      })
      .catch(() => {
        // console.log(error.code);
        // console.log(error.message);
      });

    setUser({ name, photo, email, password });

    // setUser
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className="card bg-base-100 w-full max-w-md shrink-0 rounded-none my-24 mt-16 p-10"
        style={{ minHeight: `calc(100vh - 100px)}` }}
      >
        <h3 className="font-bold text-2xl text-center">
          Register your account
        </h3>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input bg-zinc-100 rounded-none"
              required
            />
            {error?.name && (
              <label className="label">
                <span className="label-text font-bold">{error.name}</span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Your Photo Url"
              className="input bg-zinc-100 rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input bg-zinc-100 rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input  rounded-none bg-zinc-100"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center">
          You Have An Account ?{" "}
          <Link to={"/auth/login"} className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
