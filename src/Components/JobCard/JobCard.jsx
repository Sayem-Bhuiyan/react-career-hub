import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const JobCard = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, salary, location} = job;
    return (
        <div className='border p-10 rounded-xl text-left'>
            <img src={logo} className='mb-8' alt="" />
            <h2 className='text-[#474747] text-2xl font-extrabold mb-2'>{job_title}</h2>
            <p className='text-[#757575] text-xl font-semibold mb-4'>{company_name}</p>
            <div className='space-x-3 mb-4'>
                <button className='btn border border-[#7E90FE] bg-transparent text-[#7E90FE] text-base font-extrabold'>{remote_or_onsite}</button>
                <button className='btn border border-[#7E90FE] bg-transparent text-[#7E90FE] text-base font-extrabold'>{job_type}</button>
            </div>
            <div className='flex items-center gap-6 mb-6'>
                <h2 className='flex text-xl text-[#757575] font-semibold items-center'>
                    <span><IoLocationOutline className='text-xl' /></span>
                    <span className='ml-1'>
                        {location}
                    </span>
                </h2>
                <h2 className='flex text-xl text-[#757575] font-semibold items-center'>
                    <HiOutlineCurrencyDollar className='text-xl' />
                    <span className='ml-1'>{salary}</span>
                </h2>
            </div>
            <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-extrabold '>View Details</button>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object,
}

export default JobCard;