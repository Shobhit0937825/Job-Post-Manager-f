import React, { useState } from 'react';

function MultipleSelectBox({ options, setMultiSelect }: any) {
  const [selectedOptions, setSelectedOptions] = useState<any>([]); // State to store selected options

  // Event handler to update state when options selection changes
  const handleOptionsChange = (event: any) => {
    const selectedValues: any = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedOptions(selectedValues);
    setMultiSelect(selectedValues);
  };

  return (
    <div>
      <select id="jobOptions" multiple onChange={handleOptionsChange} className="block appearance-none w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MultipleSelectBox;
