import { Link } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import { useContext } from "react";
import { AuthContext } from "../context/AllContext";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center pt-5 mx-auto w-11/12">
      <div>{user?.email}</div>
      <div>
        <ul className="flex gap-5 text-neutral-500 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/career"}>Career</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <img src={userIcon} alt="userIcon" />
        {user ? (
          <button
            onClick={signOutUser}
            className="bg-neutral-700 px-11 py-2 text-white font-semibold text-xl"
          >
            LogOut
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="bg-neutral-700 px-11 py-2 text-white font-semibold text-xl"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
