import React from "react";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className=" top-0 left-0 h-full w-16 m-0 flex flex-col bg-secondary text-white shadow-lg">
            <SideBarIcon icon ={<MdOutlineQuiz size="28"/>} />
            <SideBarIcon icon = {<BsFillCloudMoonFill size="28"/>} />
            <SideBarIcon icon = {<FaRunning size="28"/>} />
        </div>
    );
};

const SideBarIcon = ({  icon  }) =>(
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default Sidebar;