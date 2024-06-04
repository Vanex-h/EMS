import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import Table from "./Table";
import { parseJwt } from "../../utils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");
  const navigate= useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   setUsername(parseJwt(token!));
  //   console.log(username);
  // }, []);
  const userProfile=async()=>{
    const response= await fetch("http://localhost:1500/users/profile",
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
   const data = await response.json();
    setUsername(data.user.email);
    console.log("========>",username);
  }
  useEffect(() => {
    userProfile();
  }, []); 

  return (
    <div className="flex flex-row w-full h-full ">
      <div className="flex flex-col justify-between w-[10%] items-start px-3 bg-white p-3">
        <div className="flex flex-col px-2 items-start justify-between h-28 text-[#0469a3c2]">
          <span>Employee</span>
          <span>Management</span>
          <span>System</span>
        </div>
        <div className="items-start">
          <h1 className="cursor-pointer px-2 m-0 hover:text-[#0469a3c2]">
            Employees
          </h1>
        </div>
        <div>
          <button className="px-2 flex flex-row items-center" onClick={() => {
            localStorage.removeItem("token");
            navigate('/login');
          }}>
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
      <div className="">
        <div className="h-[10%] flex flex-row justify-between p-3 bg-white border-x-4 border-[#f0f1f3]">
          <div className="flex flex-col justify-center w-2/3 text-stone-500 ">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-[#D9D9D9] h-10 p-2 focus:outline-none text-sm rounded-md w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center w-1/3 items-end">
            <div className="flex flex-row w-2/3 items-center">
              <VscAccount />
              <div className="px-3">{username}</div>
            </div>
          </div>
        </div>
        <div className="h-[90%] w-6/6">
          <Table searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
