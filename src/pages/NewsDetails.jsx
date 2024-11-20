import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import RightNav from "../components/RightNav";

export default function NewsDetails() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="w-11/12 mx-auto mt-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <h5 className="font-bold text-lg mb-5">Dragon News</h5>

            <DetailsCard />
          </div>
          <aside className="col-span-3">
            <RightNav />
          </aside>
        </div>
      </main>
    </>
  );
}
