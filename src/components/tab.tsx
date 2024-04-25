import React from "react";

function TabComponent({ tabs, activeTab, onTabClick }: any) {
  const handleClick = (
    tabName: string,
    event: React.MouseEvent<HTMLButtonElement>,
    url: string
  ) => {
    event.preventDefault();
    onTabClick(tabName);
    window.location.href = url; 

  };

  return (
    <div>
      <div className="flex flex-col gap-1 px-4">
        {tabs.map((tab: any) => (
          <div key={tab.name} className="mr-4">
            <button
              className={`py-2 px-4 rounded-lg ${
                activeTab === tab.name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800" 
              } w-40`}
              onClick={(e) => handleClick(tab.name, e, tab.url)}
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
