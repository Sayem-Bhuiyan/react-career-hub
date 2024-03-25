import { useLoaderData, useParams } from "react-router-dom";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdSubtitles, MdOutlineMailOutline, MdLocationOn  } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { saveToLS } from "../../localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const clickedJob = jobs.find((job) => job.id == id);
  const {

    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = clickedJob;

  const { phone, email, address } = contact_information;
  return (
    <div className="mb-20">
      <div className="relative h-[200px] flex justify-center items-center mb-10">
        <h2 className="text-center text-[#1A1919] font-extrabold text-[32px] ">
          Job Details
        </h2>
        <img className="absolute bottom-0 left-0" src={bg1} alt="" />
        <img className="absolute top-0 right-0" src={bg2} alt="" />
      </div>

      <div className="flex">
        <div className="w-7/12 pr-7">
          <h2 className="text-base mb-6">
            <span className="text-[#1A1919] font-extrabold">Job Description: </span>
            <span className="text-[#757575] font-medium">
                {job_description}
            </span>
          </h2>
          <h2 className="text-base mb-6 text-[#1A1919] font-extrabold">
            Job Responsibility: 
            <span className="text-[#757575] font-medium ">
                {job_responsibility}
            </span>
          </h2>
          <h2 className="text-base mb-6 text-[#1A1919] font-extrabold">
            Educational Requirements: <br />
            
          </h2>
          <p className="text-[#757575] text-base font-medium mb-6">
                {educational_requirements}
            </p>
            <h2 className="text-base mb-6 text-[#1A1919] font-extrabold">Experiences: </h2>
            <p className="text-[#757575] text-base font-medium" >
                {experiences}
            </p>
        </div>


        <div className="w-5/12 bg-gradient-to-r from-[#7E90FE]/10 to-[#9873FF]/10 rounded-xl ">
          <div className="p-[30px]">
             <h2 className="text-[#1A1919] text-xl font-extrabold mb-6">Job Details</h2>
             <hr  className=" mb-6"/>
             <div className="text-xl flex gap-1 items-center mb-4">
                <HiOutlineCurrencyDollar className="text-[#7E90FE] text-2xl" />
                <h2 className="text-[#474747] text-xl font-extrabold">Salary: <span className="text-[#757575] font-semibold">{salary} (per month)</span></h2>
             </div>
             <div className="text-xl flex gap-1 items-center mb-8">
                <MdSubtitles className="text-[#7E90FE] text-2xl" />
                <h2 className="text-[#474747] text-xl font-extrabold">Job Title: <span className="text-[#757575] font-semibold">{job_title}</span></h2>
             </div>
             <h2 className="text-[#1A1919] text-xl font-extrabold mb-6">Contact Information</h2>
             <hr  className=" mb-6"/>
             <div className="text-xl flex gap-1 items-center mb-8">
                <FaPhoneAlt className="text-[#7E90FE] text-2xl" />
                <h2 className="text-[#474747] text-xl font-extrabold">Phone : <span className="text-[#757575] font-semibold">{phone}</span></h2>
             </div>
             <div className="text-xl flex gap-1 items-center mb-8">
                <MdOutlineMailOutline className="text-[#7E90FE] text-2xl" />
                <h2 className="text-[#474747] text-xl font-extrabold">Email : <span className="text-[#757575] font-semibold">{email}</span></h2>
             </div>
             <div className="text-xl flex gap-1  mb-10">
                <MdLocationOn className="text-[#7E90FE] text-4xl" />
                <h2 className="text-[#474747] text-xl font-extrabold">Address : <span className="text-[#757575] font-semibold">{address}</span></h2>
             </div>
          </div>
          <button onClick={() => saveToLS(id)} className="btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-extrabold ">
          Apply Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
