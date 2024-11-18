import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div>
      <h4 className="text-xl font-bold mb-4">Login With</h4>

      <div className="flex flex-col gap-2">
        <button className="flex items-center justify-center gap-1 font-medium p-2 border rounded-lg">
          <FaGoogle />
          <span>Login With Google</span>
        </button>
        <button className="flex items-center justify-center gap-1 font-medium p-2 border rounded-lg">
          <FaGithub />
          <span>Login With Github</span>
        </button>
      </div>
    </div>
  );
}
