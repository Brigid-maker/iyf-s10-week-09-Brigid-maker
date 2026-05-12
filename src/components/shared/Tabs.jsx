import { useState } from 'react';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200
              ${activeTab === index
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}