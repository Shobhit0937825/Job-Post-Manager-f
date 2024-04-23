import React, { useState } from 'react'

function Select({setMin, setMax}:any) {
    const [minYear, setMinYear] = useState<any>(""); 
    const [maxYear, setMaxYear] = useState<any>(""); 
  
    // Constants for the range of years
    const minAllowedYear = 0;
    const maxAllowedYear = 10;
  
    const years = [];
    for (let year = maxAllowedYear; year >= minAllowedYear; year--) {
      years.push(year);
    }
  
    // Event handler for changing the minimum year
    const handleMinYearChange = (event: any) => {
      setMinYear(parseInt(event.target.value));
      setMin(parseInt(event.target.value))
    };
  
    // Event handler for changing the maximum year
    const handleMaxYearChange = (event : any) => {
      setMaxYear(parseInt(event.target.value));
      setMax(parseInt(event.target.value))
      
    };
  
  return (
    <div>
            <label htmlFor="minYear"> Experience Range (years) : Min</label>
            <select id="minYear" value={minYear} onChange={handleMinYearChange}>
              <option value="">Select</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <label htmlFor="maxYear">Max</label>
            <select id="maxYear" value={maxYear} onChange={handleMaxYearChange}>
              <option value="">Select</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
  )
}

export default Select