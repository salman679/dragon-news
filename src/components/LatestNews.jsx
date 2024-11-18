import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <div className="flex items-center gap-4 p-4 mt-7 bg-zinc-100">
      <span className="px-6 bg-rose-600 font-medium text-xl py-2 text-white">
        Latest
      </span>
      <Marquee>
        <p className="text-xl font-semibold">
          <Link>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
        </p>
      </Marquee>
    </div>
  );
}
