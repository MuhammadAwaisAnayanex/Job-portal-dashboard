import { Link } from "react-router-dom";

const JobCard = ({ job ,id}) => {
  console.log("cardJob => ",job)
  console.log("JobID => ",id)
    return (
      <div className="p-6 job-card">
        <h2 className="text-xl font-bold mb-2"><span>Title:</span> {job.jobTitle}</h2>
        <p className="mb-2"><span className="font-bold me-2">Location:</span> {job.location}</p>
        <p className=" mb-2"><span className="font-bold me-2">Type:</span>{job.jobType}</p>
        <p className=" font-semibold"><span className="font-bold me-2">Salary:</span>{job.salary}</p>
        <Link className=" px-4 py-2 rounded  mt-3 inline-block" to={`/job-detail/${id}`} state={{ job }}>Job Detail</Link>

      </div>
    );
  };
  export default JobCard;