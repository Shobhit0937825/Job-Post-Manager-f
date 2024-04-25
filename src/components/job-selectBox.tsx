import React, { useState } from 'react';

function TypeSelect({ options, setSelectedJobType, selectedJobType }: any) {

  const handleJobTypeChange = (event: any) => {
    setSelectedJobType(event.target.value);
  };

  return (
    <div className="mt-4">
  <select
    id="jobType"
    value={selectedJobType}
    onChange={handleJobTypeChange}
    className="block rounded px-2.5 pb-2.5 pt-5 text-sm border peer flex-grow w-full"
    >
    <option value="">Select Job Type</option>
    {options.map((option: any) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
</div>

  );
}

export default TypeSelect;