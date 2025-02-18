import { useEffect, useState } from "react";
import JobCard from "../../components/jobCard/JobCard";

const Dashboard = () => {
  const [postJobData, setPostJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');

  useEffect(() => {
    getPostJobData();
  }, []);

  const getPostJobData = async () => {
    try {
      const jobData = JSON.parse(localStorage.getItem("postJobData")) || [];
      console.log("FetchJobData => ", jobData);
      setPostJobData(jobData);
      setFilteredJobs(jobData);  // Initially show all jobs
    } catch (error) {
      console.log("Fetch Post Job Error => ", error);
    }
  };

  // Filter jobs based on selected filters
  const applyFilters = () => {
    let filtered = postJobData;

    if (locationFilter) {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(locationFilter.toLowerCase()));
    }

    if (jobTypeFilter) {
      filtered = filtered.filter(job => job.jobType.toLowerCase().includes(jobTypeFilter.toLowerCase()));
    }

    if (salaryFilter) {
      filtered = filtered.filter(job => job.salary.toLowerCase().includes(salaryFilter.toLowerCase()));
    }

    setFilteredJobs(filtered);
  };

  // Handle filter change and apply filters
  const handleFilterChange = () => {
    applyFilters();
  };

  // Reset filters
  const resetFilters = () => {
    setLocationFilter('');
    setJobTypeFilter('');
    setSalaryFilter('');
    setFilteredJobs(postJobData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Job Listings</h1>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Filter by Location"
            className="p-2 border rounded w-[100%] sm:w-[30%] md:w-[auto]"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Job Type"
            className="p-2 border rounded w-[100%] sm:w-[30%] md:w-[auto]"
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Salary"
            className="p-2 border rounded w-[100%] sm:w-[30%] md:w-[auto]"
            value={salaryFilter}
            onChange={(e) => setSalaryFilter(e.target.value)}
          />
          <button
            onClick={handleFilterChange}
            className="px-4 py-2 rounded cursor-pointer filter-btn w-[100%] sm:w-[30%] md:w-[auto]">
            Apply Filters
          </button>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded filter-btn cursor-pointer w-[100%] sm:w-[30%] md:w-[auto]">
            Reset Filters
          </button>
        </div>
      </div>

      {
        !filteredJobs.length ? <>
          {/* if job post length is Empty */}
          <div className="bg-red-100 text-red-700 border-red-400 rounded-md"><h1 className="text-center py-2">Job Post is Empty!</h1></div>
        </>:<>
        
          {/* if add job Post */}

        {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} id={index + 1} />
        ))}
      
      </div>

        </>
      }
    </div>
  );
};

export default Dashboard;
