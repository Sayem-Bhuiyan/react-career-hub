import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredFromLS } from "../../localStorage";
import AppliedJobCard from "../../Components/AppliedJobCard/AppliedJobCard";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";

const AppliedJobs = () => {
  const [applyingJobs, setApplyingJobs] = useState([]);

  const jobs = useLoaderData();
  useEffect(() => {
    const appliedJobs = getStoredFromLS();
    console.log(appliedJobs, jobs);

    const jobsApplied = jobs.filter((job) => appliedJobs.includes(job.id));
    setApplyingJobs(jobsApplied);
  }, [jobs]);
  return (
    <div>
      <div>
        <div className="relative h-[200px] flex justify-center items-center mb-10">
          <h2 className="text-center text-[#1A1919] font-extrabold text-[32px] ">
            Applied Jobs
          </h2>
          <img className="absolute bottom-0 left-0" src={bg1} alt="" />
          <img className="absolute top-0 right-0" src={bg2} alt="" />
        </div>
      </div>
      {applyingJobs.map((job) => (
        <AppliedJobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
