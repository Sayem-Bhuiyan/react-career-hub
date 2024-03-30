import PropTypes from 'prop-types';


const AppliedJobCard = ({job}) => {
    const {
        remote_or_onsite,
        job_title,
        salary,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information,
      } = job
  return (
    <div>
      <h2>{remote_or_onsite}</h2>
    </div>
  );
};
AppliedJobCard.propTypes = {
    job: PropTypes.object,
}

export default AppliedJobCard;
