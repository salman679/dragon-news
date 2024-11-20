import { Link, useLoaderData } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function DetailsCard() {
  const { data } = useLoaderData();

  const newsDetail = data[0];

  return (
    <div className="border rounded-2xl p-7 mb-24">
      <div className="rounded-xl mb-5">
        <img className="w-full h-full" src={newsDetail?.image_url} alt="" />
      </div>

      <h4 className="font-bold text-2xl">{newsDetail?.title}</h4>
      <p className="text-gray-700 mt-3">{newsDetail?.details}</p>

      <button>
        <Link
          to={`/category/${newsDetail?.category_id}`}
          className="px-4 py-2 bg-red-700 flex gap-2 items-center text-white font-medium text-lg mt-3"
        >
          <FaLongArrowAltLeft />
          <span> All news in this category</span>
        </Link>
      </button>
    </div>
  );
}
