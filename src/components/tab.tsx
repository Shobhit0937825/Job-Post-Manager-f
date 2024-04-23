import React from "react";

function TabComponent({ tabs, activeTab, onTabClick }: any) {
  const handleClick = (
    tabName: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    onTabClick(tabName);
  };

  return (
    <div>
      <div className="flex">
        {tabs.map((tab: any) => (
          <div key={tab.name} className="mr-4">
            <button
              className={`py-2 px-4 rounded-lg ${
                activeTab === tab.name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
              onClick={(e) => handleClick(tab.name, e)}
            >
              {tab.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabComponent;
