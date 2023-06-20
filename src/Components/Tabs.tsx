import React, { FC } from "react";

type TabsProps = {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  className?: string;
};

/**
 * Avalible Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param onClick Function to set the active tab
 */

const Tabs: FC<TabsProps> = ({
  className = "tabs-component flex border-b-[1px] border-[#1e1e1e]",
  tabs = [],
  selectedTab = 0,
  onClick,
}) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div
    >
      <div role="tablist" className="w-full text-[#ffffff30] border-b-[1px] border-[#383838]">
        {tabs.map((tab) => (
          <button
            className={`${selectedTab === tab.index ? "active text-[#ffffff] border-b-2" : ""} w-1/2 h-[48px] hover:text-[#ffffff]`}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div>
    </div>
  );
};
export default Tabs;
