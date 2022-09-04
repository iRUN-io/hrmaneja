import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      
      <ul className="nav">
        <TabNavItem title="Project Management" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Task Management" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Mode Management" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <TabContentOne />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <TabContentTwo />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <TabContentThree />
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;