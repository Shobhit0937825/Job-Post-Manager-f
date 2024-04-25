import React, { useState } from 'react'

function Select({setMin, setMax}:any) {
    const [minYear, setMinYear] = useState<any>(""); 
    const [maxYear, setMaxYear] = useState<any>(""); 
  
    const minAllowedYear = 0;
    const maxAllowedYear = 10;
  
    const years = [];
    for (let year = maxAllowedYear; year >= minAllowedYear; year--) {
      years.push(year);
    }
  
    const handleMinYearChange = (event: any) => {
      setMinYear(event.target.value);
      setMin(parseInt(event.target.value))
    };
  
    const handleMaxYearChange = (event : any) => {
      setMaxYear(event.target.value);
      setMax(parseInt(event.target.value))
      
    };
  
  return (
         <div className='flex justify-items-stretch'>
            <label htmlFor="minYear"> Experience Range (years) : </label>
            
            <div className='px-2 '>
            <label htmlFor="minYear" className='pr-2'> Min</label>
            <select className='border pr-2 ' id="minYear" value={minYear} onChange={handleMinYearChange}>
            <option value="">Select</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            </div>

            <div className='px-2 '>
            <label htmlFor="maxYear" className='pr-2'> Max</label>
            <select className='border pr-2 '  id="maxYear" value={maxYear} onChange={handleMaxYearChange}>
              <option value="">Select</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            </div>
          </div>
  )
}

export default Select