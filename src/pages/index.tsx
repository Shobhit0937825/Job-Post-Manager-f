import { useState } from "react";
import Select from "@/components/select";
import InputField from "@/components/inputField";
import TypeSelect from "@/components/job-selectBox";
import MultipleSelectBox from "@/components/multiple-selectBox";
import FormOverview from "@/components/formOverview";
import ToggleButton from "@/components/toggleButton";

function App() {
  const [postTitle, setPostTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [qualification, setQualification] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [multiSelect, setMultiSelect] = useState("");
  console.log(multiSelect, "---multiSelect---");
  const [currentJob, setCurrentJob] = useState(null);


  const [selectedJobType, setSelectedJobType] = useState(""); 

  const jobTypeOptions = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Internship", label: "Internship" },
    { value: "Contract", label: "Contract" },
  ];

  const jobOptions = [
    { value: "5 Days Working", label: "5 Days Working" },
    { value: "Remote Job", label: "Remote Job" },
    { value: "Remote Job", label: "Remote Job" },
    { value: "Remote Job", label: "Remote Job" },
  ];

  const [statement, setStatement] = useState("");

  const handleStatement = (event: any) => {
    setStatement(event.target.value);
  };

  const handleIntro = (event: any) => {
    setIntroduction(event.target.value);
  };

  const handleRole = (event: any) => {
    setRole(event.target.value);
  };

  const handleLoadJobData = (job: any) => {
    // Load the job data into the form fields
    // Example:
    setPostTitle(job?.postTitle || '');
    setIntroduction(job?.introduction || '');
    setRole(job?.role || '');
    // Set other form fields accordingly
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <div className="lg:w-2/4 p-6 mb-3">
        <h1 className="text-3xl font-bold mb-6">Job Post Manager</h1>
        <form>
          {/* <ToggleButton/> */}

          <InputField
            setData={setPostTitle}
            type="text"
            placeholder="Job Post Title"
            className="mb-4"
          />
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Introduction</h2>
            <textarea
              value={introduction}
              onChange={handleIntro}
              placeholder="Introduction"
              className="w-full rounded px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">
              Role and Responsibility
            </h2>
            <textarea
              value={role}
              onChange={handleRole}
              placeholder="Role"
              className="w-full rounded px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <Select setMin={setMin} setMax={setMax} className="mb-4" />
          <InputField
            setData={setQualification}
            type="text"
            placeholder="Qualification"
            className="mb-4"
          />
          <InputField
            setData={setSalary}
            type="text"
            placeholder="Salary Range"
            className="mb-4"
          />
          <textarea
            value={statement}
            onChange={handleStatement}
            placeholder="Call to action Concluding Statement"
            className="w-full rounded px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
          <InputField
            setData={setCompanyName}
            type="text"
            placeholder="Company Name"
            className="mb-4"
          />
          <InputField
            setData={setJobLocation}
            type="text"
            placeholder="Job Location"
            className="mb-4"
          />
          <div className="mb-4">
            <TypeSelect
              options={jobTypeOptions}
              setSelectedJobType={setSelectedJobType}
              selectedJobType={selectedJobType}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Select Multiple Job Options by help of CTRL key
            </h2>
            <MultipleSelectBox
              options={jobOptions}
              setMultiSelect={setMultiSelect}
            />
          </div>
        </form>
      </div>
      <div className="lg:w-2/4 p-6">
        <FormOverview
          selectedJobType={selectedJobType}
          postTitle={postTitle}
          introduction={introduction}
          role={role}
          salary={salary}
          qualification={qualification}
          companyName={companyName}
          jobLocation={jobLocation}
          min={min}
          max={max}
          statement={statement}
          multiSelect={multiSelect}
        />
      </div>
    </div>
  );
}

export default App;
