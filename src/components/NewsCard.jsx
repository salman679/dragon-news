import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

function NewsCard() {
  const { data } = useLoaderData();

  function getDate(date) {
    return date ? date.split(" ")[0] : "UnAvailable";
  }

  return (
    <>
      {data.map((news) => (
        <div
          key={news._id}
          className="mx-auto bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center p-4 bg-zinc-100">
            <img
              src={news.author.img}
              alt="Author"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <h4 className="text-sm font-semibold">
                {news.author.name ? news.author.name : "Unavailable"}
              </h4>
              <p className="text-xs text-gray-500">
                {getDate(news.author.published_date)}
              </p>
            </div>
            <div className="ml-auto flex space-x-2 text-gray-500">
              <FaRegBookmark className="cursor-pointer" />
              <FaShareAlt className="cursor-pointer" />
            </div>
          </div>

          {/* Title */}
          <div className="px-4">
            <h2 className="text-lg font-bold mb-2">{news.title}</h2>
          </div>

          {/* Image */}
          <div className="px-4">
            <img
              src={news.image_url}
              alt="News"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>

          {/* Details */}
          <div className="px-4 py-2">
            <p className="text-xs text-gray-500 mb-2">
              {news.details.slice(0, 450)}...{" "}
              <Link to={`/news/${news._id}`} className="text-primary">
                Read More
              </Link>
            </p>
          </div>

          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="flex items-center text-yellow-500">
              <FaStar />
              <span className="ml-1 text-sm font-semibold">
                {news.rating.number}
              </span>
            </div>
            <div className="flex items-center text-gray-500">
              <FaEye />
              <span className="ml-1 text-sm">{news.total_view}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default NewsCard;
