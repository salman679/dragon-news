import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res.data.news_category))
      .catch(() => {
        // console.log(error)
      });
  }, []);

  return (
    <div>
      <h4 className="font-semibold text-xl text-neutral-700 mb-4">
        All Category({categories?.length})
      </h4>

      <div className="flex flex-col gap-2">
        {categories?.map((category) => (
          <NavLink
            to={`/category/${category?.category_id}`}
            key={category?.category_id}
            className={({ isActive }) =>
              isActive
                ? `font-semibold text-xl text-left pl-12 py-4 rounded bg-neutral-200`
                : `font-medium text-xl text-left pl-12 py-4 text-neutral-400 `
            }
          >
            {category?.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
