import React from "react";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";

    
const Sidebar = () => {
    
    return (
        <div className=" top-0 left-0 h-full w-16 m-0 flex flex-col bg-secondary text-white shadow-lg">
            <SideBarIcon icon ={<MdHome size="28"/>} redirectURL = "/" />
            <SideBarIcon icon = {<BsFillCloudMoonFill size="28"/>} redirectURL = "/napping-page" />
            <SideBarIcon icon = {<FaRunning size="28"/>} redirectURL = "/exercise-page"/>
        </div>
    );
};

const SideBarIcon = ({ icon, redirectURL }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (redirectURL) {
        navigate(redirectURL);
      }
    };
  
    return (
      <div className="sidebar-icon" onClick={handleClick}>
        {icon}
      </div>
    );
  };
  
  

export default Sidebar;