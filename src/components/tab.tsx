import React from 'react';

function TabComponent({ tabs, activeTab, onTabClick }: any) {
  return (
    <div>
      <div className="flex">
        {tabs.map((tab: any) => (
          <div key={tab.name} className="mr-4">
            <button
              className={`py-2 px-4 rounded-lg ${
                activeTab === tab.name ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}
              onClick={() => onTabClick(tab.name)}
            >
              {tab.name}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab: any) => (
          <div key={tab.name} style={{ display: activeTab === tab.name ? 'block' : 'none' }}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabComponent;
