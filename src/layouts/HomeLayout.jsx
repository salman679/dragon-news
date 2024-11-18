import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RightNav from "../components/RightNav";
import LeftNav from "../components/LeftNav";

export default function HomeLayout() {
  return (
    <>
      <header className="container mx-auto w-11/12">
        <Header />
      </header>
      <nav className="mx-auto w-11/12">
        <Navbar />
      </nav>
      <main className="mx-auto w-11/12 grid md:grid-cols-12 gap-6 mt-16">
        <aside className="col-span-3">
          <LeftNav />
        </aside>
        <div className="col-span-6">
          <Outlet />
        </div>

        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </>
  );
}
