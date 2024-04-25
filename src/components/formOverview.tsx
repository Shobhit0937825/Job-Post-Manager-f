import React from "react";

function FormOverview({ selectedJobType, postTitle, introduction, role, salary, qualification, companyName, jobLocation, statement, min, max, multiSelect, showQualification,showJobTitle, showIntro,showRole,showSalary,showStatement,showCompany,
   showLocation, showJobType, showYear, showMultiselecter,
}: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <div className="flex gap-5">
        <h1 className="text-2xl font-bold mb-4">
        {showJobTitle && (postTitle.value ?  ` ${postTitle.value}` : "JOB TITLE")}
        </h1>
        {multiSelect &&
          multiSelect.map((item: any, index: number) => (
            <span
              key={index}
              className="text-white bg-blue-500 px-2 py-1 rounded mr-2"
            >
              {item}
            </span>
          ))}
      </div>
      {showIntro && <h3 className="text-lg font-semibold mb-2">
        Introduction: {introduction}
      </h3>}
      
      <div className="mb-4">
        {showRole && (
        <h3 className="text-lg font-semibold mb-2">
          Role And Responsibility: {role}
        </h3>)}
      </div>
      {showYear && (

      <h3 className="text-lg font-semibold mb-2">
        Preferred Experience:  {min} to {max} yrs
      </h3>
      )}

      {showQualification && (
        <h3 className="text-lg font-semibold mb-2">
          Qualifications: {qualification.value}
        </h3>
      )}
      {showSalary && (
      <h3 className="text-lg font-semibold mb-2">
        Salary Range:  {salary.value}
      </h3>)}
      {showStatement && (
      <h3 className="text-lg font-semibold mb-2">
        Concluding Statement:  {statement}
      </h3>
      )}
      {showCompany && (

      <h3 className="text-lg font-semibold mb-2">
        Company:  {companyName.value}
      </h3>
      )}
      {showLocation && (

      <h3 className="text-lg font-semibold mb-2">
        Location:  {jobLocation.value}
      </h3>
      )}
      {showJobType && (

      <h3 className="text-lg font-semibold mb-2">
        Job Type: {selectedJobType}
      </h3>
      )}
    </div>
  );
}

export default FormOverview;
