// Sidebar.js
import React from 'react';

function Sidebar({ setCurrentJob, jobData }: any) {
  return (
    <div className="h-full w-1/4 bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Options</h2>
      <button onClick={() => setCurrentJob(null)}>New Job</button>
      {jobData.map((job: any, index: number) => (
        <button key={index} onClick={() => setCurrentJob(job)}>
          Job Post {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
