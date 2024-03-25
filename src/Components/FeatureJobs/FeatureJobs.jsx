import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeatureJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [jobsLength, setJobsLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-[#1A1919] font-extrabold text-5xl mb-4">
          Feature Jobs
        </h1>
        <p className="text-[#757575] text-base font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-3">
          {featuredJobs.slice(0, jobsLength).map((singleJob) => (
            <JobCard key={singleJob.id} job={singleJob} />
          ))}
        </div>
        <div className={jobsLength === featuredJobs.length &&  'hidden'}>
          <button
            onClick={() => setJobsLength(featuredJobs.length)}
            className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-extrabold "
          >
            Load more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
