const PostJob = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Post a Job</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Job Title" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Location" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Job Type" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Salary" className="w-full p-2 border rounded" />
          <textarea placeholder="Job Description" className="w-full p-2 border rounded" rows="4" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Post Job
          </button>
        </form>
      </div>
    );
  };
  export default PostJob;