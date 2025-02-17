import { useLocation } from "react-router-dom";
const JobDetails = () => {
  const location = useLocation();
  const job = location.state?.job; // Get job data from state

  if (!job) {
    return <p className="text-center text-red-500">Job data not found!</p>;
  }
    return (
      <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Job Details</h2>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <th className="p-3 text-left bg-gray-200 font-semibold w-1/3">Job Title</th>
              <td className="p-3">{job.jobTitle}</td>
            </tr>
            <tr className="border-b">
              <th className="p-3 text-left bg-gray-200 font-semibold">Location</th>
              <td className="p-3">{job.location}</td>
            </tr>
            <tr className="border-b">
              <th className="p-3 text-left bg-gray-200 font-semibold">Job Type</th>
              <td className="p-3">{job.jobType}</td>
            </tr>
            <tr className="border-b">
              <th className="p-3 text-left bg-gray-200 font-semibold">Salary</th>
              <td className="p-3">{job.salary}</td>
            </tr>
            <tr>
              <th className="p-3 text-left bg-gray-200 font-semibold">Description</th>
              <td className="p-3">{job.jobDescription}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      </>
    );
  };
  export default JobDetails;