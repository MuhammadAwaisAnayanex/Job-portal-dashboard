import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const PostJob = () => {

  // useNavigate
  const navigate =useNavigate("")

  // State for form inputs
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    jobType: "",
    salary: "",
    jobDescription: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.jobType) newErrors.jobType = "Job Type is required";
    if (!formData.salary) newErrors.salary = "Salary is required";
    if (!formData.jobDescription) newErrors.jobDescription = "Job Description is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors
    setErrors({});

    // Save job data to local storage
    const postJobData = JSON.parse(localStorage.getItem("postJobData")) || [];
    postJobData.push(formData);
    localStorage.setItem("postJobData", JSON.stringify(postJobData));

    // Reset form
    setFormData({
      jobTitle: "",
      location: "",
      jobType: "",
      salary: "",
      jobDescription: "",
    });

    toast("Job posted successfully!")
    navigate("/")
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Title */}
        <div>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
        </div>

        {/* Location */}
        <div>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
        </div>

        {/* Job Type */}
        <div>
          <input
            type="text"
            name="jobType"
            placeholder="Job Type"
            value={formData.jobType}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          {errors.jobType && <p className="text-red-500 text-sm">{errors.jobType}</p>}
        </div>

        {/* Salary */}
        <div>
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          {errors.salary && <p className="text-red-500 text-sm">{errors.salary}</p>}
        </div>

        {/* Job Description */}
        <div>
          <textarea
            name="jobDescription"
            placeholder="Job Description"
            value={formData.jobDescription}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
          {errors.jobDescription && <p className="text-red-500 text-sm">{errors.jobDescription}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Post Job
        </button>
      </form>
      <ToastContainer />
    </div>
    
  );
};

export default PostJob;