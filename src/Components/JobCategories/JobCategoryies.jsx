import { useLoaderData } from "react-router-dom";
import CategoryCard from "../CategroyCard/CategoryCard";

const JobCategoryies = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div className="mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-[#1A1919] font-extrabold text-5xl mb-4">
          Job Categroy List
        </h1>
        <p className="text-[#757575] text-base font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="flex gap-5 items-center justify-between mt-10">
          {categories.map((category) => (
            <CategoryCard key={category.id} categroy={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategoryies;
