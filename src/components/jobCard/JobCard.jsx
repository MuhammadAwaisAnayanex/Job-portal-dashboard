import { Link } from "react-router-dom";

const JobCard = ({ job ,id}) => {
  console.log("cardJob => ",job)
  console.log("JobID => ",id)
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2"><span>Title:</span> {job.jobTitle}</h2>
        <p className="text-gray-600 mb-2"><span className="font-bold me-2">Location:</span> {job.location}</p>
        <p className="text-gray-600 mb-2"><span className="font-bold me-2">Type:</span>{job.jobType}</p>
        <p className="text-gray-600 font-semibold"><span className="font-bold me-2">Salary:</span>{job.salary}</p>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-3 inline-block" to={`/job-detail/${id}`} state={{ job }}>Job Detail</Link>

      </div>
    );
  };
  export default JobCard;