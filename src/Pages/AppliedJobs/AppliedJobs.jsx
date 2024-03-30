import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredFromLS } from "../../localStorage";
import AppliedJobCard from "../../Components/AppliedJobCard/AppliedJobCard";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const [applyingJobs, setApplyingJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const jobs = useLoaderData();
  useEffect(() => {
    const appliedJobs = getStoredFromLS();

    const jobsApplied = jobs.filter((job) => appliedJobs.includes(job.id));
    setApplyingJobs(jobsApplied);
    setDisplayJobs(jobsApplied);
  }, [jobs]);

  const handleSortJobType = (type) => {
    if (type === "all") {
      setDisplayJobs(applyingJobs);
    } else if (type === "remote") {
      const newDisplayJobs = applyingJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(newDisplayJobs);
    } else if (type === "onsite") {
      const newDisplayJobs = applyingJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(newDisplayJobs);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Carrer Hub | Applied Jobs</title>
      </Helmet>
      <div>
        <div className="relative h-[200px] flex justify-center items-center mb-10">
          <h2 className="text-center text-[#1A1919] font-extrabold text-[32px] ">
            Applied Jobs
          </h2>
          <img className="absolute bottom-0 left-0" src={bg1} alt="" />
          <img className="absolute top-0 right-0" src={bg2} alt="" />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <details className="dropdown">
          <summary className="m-1 btn">SortBy</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleSortJobType('all')}>
              <a>All</a>
            </li>
            <li onClick={() => handleSortJobType('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleSortJobType("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map((job) => (
          <AppliedJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
