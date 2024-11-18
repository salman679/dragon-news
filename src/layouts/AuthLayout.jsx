import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
  return (
    <>
      <header className="bg-zinc-100 ">
        <Navbar />
      </header>

      <main className="bg-zinc-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
