import { useState } from "react";
import Select from "@/components/select";
import InputField from "@/components/inputField";
import TypeSelect from "@/components/job-selectBox";
import MultipleSelectBox from "@/components/multiple-selectBox";
import FormOverview from "@/components/formOverview";
import SwitchTest from "@/components/toggleButton";
import TabComponent from "@/components/tab";

function App() {
  const jobTypeOptions = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Internship", label: "Internship" },
    { value: "Contract", label: "Contract" },
  ];

  const jobOptions = [
    { value: "5 Days Working", label: "5 Days Working" },
    { value: "Remote Job", label: "Remote Job" },
  ];
  const tabs = [
    { name: "New Job" },
    { name: "Job 1" },
    { name: "Job 2" },
    { name: "Job 3" },
  ];

  const [activeTab, setActiveTab] = useState("");
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
  const [selectedJobType, setSelectedJobType] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedJobTitle, setIsCheckedJobTitle] = useState(false);
  const [isCheckedIntro, setIsCheckedIntro] = useState(false);
  const [isCheckedRole, setIsCheckedRole] = useState(false);
  const [isCheckedSalary, setIsCheckedSalary] = useState(false);
  const [isCheckedStatement, setIsCheckedStatement] = useState(false);
  const [isCheckedCompany, setIsCheckedCompany] = useState(false);
  const [isCheckedLocation, setIsCheckedLocation] = useState(false);
  const [isCheckedYear, setIsCheckedYear] = useState(false);
  const [isCheckedType, setIsCheckedType] = useState(false);
  const [isCheckedMultiSelecter, setIsCheckedMultiSelecter] = useState(false);

  const handleSwitchChange = () => {
    setSwitchValue((prevValue) => !prevValue);
  };
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
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

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <div className="lg:w-2/4 p-6 mb-3">
        <h1 className="text-3xl font-bold mb-6">Job Post Manager</h1>
        <form>
          <div>
            <TabComponent
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />
          </div>
          <div className="flex justify-between">
            <input
              type="checkbox"
              checked={isCheckedJobTitle}
              onChange={(e) => setIsCheckedJobTitle(e.target.checked)}
              className="ml-2"
            />

            <InputField
              setData={setPostTitle}
              type="text"
              placeholder="Job Post Title"
              className="mb-4"
            />
            <div className="flex gap-2">
              <h1>Active?</h1>
              <SwitchTest value={switchValue} onChange={handleSwitchChange} />
              {switchValue && (
                <div className="flex gap-2 items-center">
                  <button className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Delete
                  </button>
                  <button className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 9a1 1 0 011-1h2V6a1 1 0 112 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V11H5a1 1 0 01-1-1zm12.293-5.293a1 1 0 011.414 1.414L13.414 10l3.293 3.293a1 1 0 01-1.414 1.414L12 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414L12 8.586l3.293-3.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Duplicate
                  </button>
                </div>
              )}
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2">Introduction</h2>

          <div className="mb-4 flex gap-4">
            <input
              type="checkbox"
              checked={isCheckedIntro}
              onChange={(e) => setIsCheckedIntro(e.target.checked)}
              className="ml-2"
            />
            <textarea
              value={introduction}
              onChange={handleIntro}
              placeholder="Introduction"
              className="w-full rounded px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">
            Role and Responsibility
          </h2>
          <div className="mb-4 ">
            <div className="flex gap-4">
              <input
                type="checkbox"
                checked={isCheckedRole}
                onChange={(e) => setIsCheckedRole(e.target.checked)}
                className="ml-2"
              />

              <textarea
                value={role}
                onChange={handleRole}
                placeholder="Role"
                className="w-full rounded px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              checked={isCheckedYear}
              onChange={(e) => setIsCheckedYear(e.target.checked)}
              className="ml-2"
            />
            <Select setMin={setMin} setMax={setMax} className="mb-4" />
          </div>
          <div className="flex gap-4 mb-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="ml-2"
            />
            <InputField
              setData={setQualification}
              type="text"
              placeholder="Qualification"
              className={`mb-4 ${isChecked ? "" : "hidden"}`} // Hide the input field if checkbox is not checked
            />
          </div>
          <div className="flex gap-4 mb-2">
            <input
              type="checkbox"
              checked={isCheckedSalary}
              onChange={(e) => setIsCheckedSalary(e.target.checked)}
              className="ml-2"
            />
            <InputField
              setData={setSalary}
              type="text"
              placeholder="Salary Range"
              className="mb-4"
            />
          </div>
          <div className="flex gap-4 mb-2">
            <input
              type="checkbox"
              checked={isCheckedStatement}
              onChange={(e) => setIsCheckedStatement(e.target.checked)}
              className="ml-2"
            />
            <textarea
              value={statement}
              onChange={handleStatement}
              placeholder="Call to action Concluding Statement"
              className="w-full rounded px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300 mb-4"
            />
          </div>
          <div className="flex gap-4 mb-2">
            <input
              type="checkbox"
              checked={isCheckedCompany}
              onChange={(e) => setIsCheckedCompany(e.target.checked)}
              className="ml-2"
            />
            <InputField
              setData={setCompanyName}
              type="text"
              placeholder="Company Name"
              className="mb-4"
            />
          </div>
          <div className="flex gap-4 mb-2">
            <input
              type="checkbox"
              checked={isCheckedLocation}
              onChange={(e) => setIsCheckedLocation(e.target.checked)}
              className="ml-2"
            />
            <InputField
              setData={setJobLocation}
              type="text"
              placeholder="Job Location"
              className="mb-4"
            />
          </div>
          <div className="flex gap-4 mb-2">
            <input
              type="checkbox"
              checked={isCheckedType}
              onChange={(e) => setIsCheckedType(e.target.checked)}
              className="ml-2"
            />
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
            <div className="flex gap-4">
              <input
                type="checkbox"
                checked={isCheckedMultiSelecter}
                onChange={(e) => setIsCheckedMultiSelecter(e.target.checked)}
                className="ml-2"
              />
              <MultipleSelectBox
                options={jobOptions}
                setMultiSelect={setMultiSelect}
              />
            </div>
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
          showQualification={isChecked}
          showJobTitle={isCheckedJobTitle}
          showIntro={isCheckedIntro}
          showRole={isCheckedRole}
          showSalary={isCheckedSalary}
          showStatement={isCheckedStatement}
          showCompany={isCheckedCompany}
          showLocation={isCheckedLocation}
          showJobType={isCheckedType}
          showYear={isCheckedYear}
          showMultiselecter={isCheckedMultiSelecter}
        />
      </div>
    </div>
  );
}

export default App;
