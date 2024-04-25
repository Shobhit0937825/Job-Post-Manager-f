import { useEffect, useState } from "react";
import Select from "@/components/select";
import InputField from "@/components/inputField";
import TypeSelect from "@/components/job-selectBox";
import MultipleSelectBox from "@/components/multiple-selectBox";
import FormOverview from "@/components/formOverview";
import TabComponent from "@/components/tab";
import CheckBox from "@/components/checkBox";
import ToggleButton from "@/components/toggleButton";
import uuid4 from 'uuid4'

function App() {
  const jobTypeOptions = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Internship", label: "Internship" },
    { value: "Contract", label: "Contract" },
  ];

  const jobOptions = [{ value: "5 Days Working", label: "5 Days Working" },{ value: "Remote Job", label: "Remote Job" }];

  const tabs = [ { name: "New Job" },{ name: "Job 1" },{ name: "Job 2" },{ name: "Job 3" }];

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
  const [formData, setFormData] = useState<any>([]);

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
  useEffect(() => {
    localStorage.setItem('jobFormData', JSON.stringify(formData));
  }, [formData]);
  
  function handleSubmitData(event: any) {
    event.preventDefault();

    const newFormData = {
      activeTab,
      postTitle,
      introduction,
      role,
      salary,
      qualification,
      companyName,
      jobLocation,
      min,
      max,
      multiSelect,
      selectedJobType,
    };
    const updatedFormData = [...formData,{id: uuid4(), newFormData} ];
    setFormData(updatedFormData);
  }

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <div className="lg:w-2/4 p-6 mb-3">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Job Post Manager
        </h1>
        <form className="flex border">
          <div className="my-4">
            <TabComponent
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />
          </div>

          <div className="p-4 border-l w-full">
            <div className="flex justify-between gap-6 ">
              <div className="flex space-x-4 w-full">
                <CheckBox
                  isChecked={isCheckedJobTitle}
                  setIsChecked={setIsCheckedJobTitle}
                />

                <InputField
                  setData={setPostTitle}
                  type="text"
                  placeholder="Job Post Title"
                />
              </div>

              <div className="gap-2 relative">
                <div className=" space-x-2 mt-1 mb-3b">
                  <h1>Active?</h1>
                  <ToggleButton
                    value={switchValue}
                    onChange={handleSwitchChange}
                  />
                </div>

                {switchValue && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 p-2 rounded shadow-md">
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

            <div className="mb-4 flex flex-col gap-4 mt-2">
              <div className="flex gap-4">
                <CheckBox
                  isChecked={isCheckedIntro}
                  setIsChecked={setIsCheckedIntro}
                />
                <label className="text-lg font-semibold underline  ">
                  Introduction
                </label>
              </div>
              <input
                type="text"
                value={introduction}
                onChange={handleIntro}
                placeholder="Introduction"
                className="w-auto h-14 rounded ml-8  px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4 flex flex-col gap-4 mt-2">
              <div className="flex gap-4">
                <CheckBox
                  isChecked={isCheckedRole}
                  setIsChecked={setIsCheckedRole}
                />
                <label className="text-lg font-semibold underline">
                  {" "}
                  Role and Responsibility
                </label>
              </div>

              <input
                type="text"
                value={role}
                onChange={handleRole}
                placeholder="Role"
                className="w-auto h-14 rounded ml-8  px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="flex gap-4 my-2">
              <CheckBox
                isChecked={isCheckedYear}
                setIsChecked={setIsCheckedYear}
              />
              <Select setMin={setMin} setMax={setMax} className="mb-4" />
            </div>

            <div className="flex gap-4 mb-2 w-full">
              <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
              <InputField
                setData={setQualification}
                type="text"
                placeholder="Qualification"
                className={`w-full mb-4 ${isChecked ? "" : "hidden"}`}
              />
            </div>
            <div className="flex gap-4 mb-2">
              <CheckBox
                isChecked={isCheckedSalary}
                setIsChecked={setIsCheckedSalary}
              />
              <InputField
                setData={setSalary}
                type="text"
                placeholder="Salary Range"
                className="mb-4"
              />
            </div>
            <div className="flex gap-4 mb-2">
              <CheckBox
                isChecked={isCheckedStatement}
                setIsChecked={setIsCheckedStatement}
              />
              <textarea
                value={statement}
                onChange={handleStatement}
                placeholder="Call to action Concluding Statement"
                className="w-full rounded px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300 mb-4"
              />
            </div>
            <div className="flex gap-4 mb-2">
              <CheckBox
                isChecked={isCheckedCompany}
                setIsChecked={setIsCheckedCompany}
              />
              <InputField
                setData={setCompanyName}
                type="text"
                placeholder="Company Name"
                className="mb-4"
              />
            </div>
            <div className="flex gap-4 mb-2">
              <CheckBox
                isChecked={isCheckedLocation}
                setIsChecked={setIsCheckedLocation}
              />
              <InputField
                setData={setJobLocation}
                type="text"
                placeholder="Job Location"
                className="mb-4"
              />
            </div>

            <div className=" grid grid-cols-2 ">
              <div className="flex space-x-2">
                <CheckBox
                  isChecked={isCheckedType}
                  setIsChecked={setIsCheckedType}
                />
                <TypeSelect
                  options={jobTypeOptions}
                  setSelectedJobType={setSelectedJobType}
                  selectedJobType={selectedJobType}
                />
              </div>

              <div className="flex flex-col ">
                <h2 className="text-xs font-semibold mb-2">
                  Select Multiple Job Options by help of CTRL key
                </h2>
                <div className="flex gap-4 w-full">
                  <CheckBox
                    isChecked={isCheckedMultiSelecter}
                    setIsChecked={setIsCheckedMultiSelecter}
                  />
                  <MultipleSelectBox
                    options={jobOptions}
                    setMultiSelect={setMultiSelect}
                  />
                </div>
              </div>
              <button onClick={handleSubmitData}>Submit</button>
            </div>
          </div>
        </form>
      </div>

      <div className="lg:w-2/4 p-6 mt-12">
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
