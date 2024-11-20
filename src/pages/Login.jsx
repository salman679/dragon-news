import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AllContext";

export default function Login() {
  const { setUser, signInUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  }
  return (
    <div className="flex justify-center items-center">
      <div
        className="card bg-base-100 w-full max-w-md shrink-0 rounded-none my-24 mt-16 p-10"
        style={{ minHeight: `calc(100vh - 100px)}` }}
      >
        <h3 className="font-bold text-2xl text-center">Login your account</h3>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
            {error && (
              <label className="label">
                <p className="text-lg font-bold">{error.login}</p>
              </label>
            )}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center">
          Dont’t Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
