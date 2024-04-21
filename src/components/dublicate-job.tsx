import React, { useState } from "react";
import Select from "@/components/select";
import InputField from "@/components/inputField";
import TypeSelect from "@/components/job-selectBox";
import MultipleSelectBox from "@/components/multiple-selectBox";
import FormOverview from "@/components/formOverview";

function Duplicate() {
  const [jobs, setJobs] = useState([]); // State to store the list of jobs
  const [currentJobIndex, setCurrentJobIndex] = useState(null); // State to store the index of the currently selected job

  // Function to handle adding a new job
  const handleAddJob = () => {
    const newJob = {
      postTitle: "",
      introduction: "",
      role: "",
      salary: "",
      qualification: "",
      companyName: "",
      jobLocation: "",
      min: "",
      max: "",
      selectedJobType: "",
      statement: "",
      jobOptions: []
    };
    setJobs([...jobs, newJob]);
    setCurrentJobIndex(jobs.length); // Set the index of the newly added job as the current index
  };

  // Function to handle duplicating a job
  const handleDuplicateJob = () => {
    if (currentJobIndex !== null) {
      const duplicatedJob = { ...jobs[currentJobIndex] };
      setJobs([...jobs, duplicatedJob]);
      setCurrentJobIndex(jobs.length); // Set the index of the duplicated job as the current index
    }
  };

  // Function to handle deleting a job
  const handleDeleteJob = () => {
    if (currentJobIndex !== null) {
      const updatedJobs = [...jobs];
      updatedJobs.splice(currentJobIndex, 1);
      setJobs(updatedJobs);
      setCurrentJobIndex(null); // Reset the current index after deleting the job
    }
  };

  // Function to handle selecting a job
  const handleSelectJob = (index) => {
    setCurrentJobIndex(index);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <div className="lg:w-2/4 p-6">
        <h1 className="text-3xl font-bold mb-6">Job Post Manager</h1>
        {/* Render job list */}
        {jobs.map((job, index) => (
          <div key={index} className="mb-4">
            <button onClick={() => handleSelectJob(index)}>Job {index + 1}</button>
          </div>
        ))}
        {/* Add, Duplicate, and Delete buttons */}
        <div className="flex space-x-4 mb-4">
          <button onClick={handleAddJob}>Add Job</button>
          <button onClick={handleDuplicateJob} disabled={currentJobIndex === null}>
            Duplicate Job
          </button>
          <button onClick={handleDeleteJob} disabled={currentJobIndex === null}>
            Delete Job
          </button>
        </div>
      </div>
      <div className="lg:w-2/4 p-6">
        {/* Render job form for the currently selected job */}
        {currentJobIndex !== null && (
          <FormOverview
            job={jobs[currentJobIndex]}
            setJob={(updatedJob) => {
              const updatedJobs = [...jobs];
              updatedJobs[currentJobIndex] = updatedJob;
              setJobs(updatedJobs);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Duplicate;
