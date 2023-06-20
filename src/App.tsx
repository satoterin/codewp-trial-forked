import React, { useState } from "react";
import Tabs from "./Components/Tabs";
// Tabs Components
import Overview from "./Components/Overview";
import Vision from "./Components/Vision";

type TabsType = {
	label: string;
	index: number;
	Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
	{
		label: "Overview",
		index: 1,
		Component: Overview
	},
	{
		label: "Vision",
		index: 2,
		Component: Vision
	},
];

export default function App() {
	const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

	return (
		<div className="w-screen h-screen">
			<div className="ml-auto w-[344px] bg-[#1e1e1e] text-[#ffffff] h-screen">
				<Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
			</div>
		</div>
	);
}
