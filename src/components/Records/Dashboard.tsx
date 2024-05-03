import { VscAccount } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import Table from "./Table";
const Dashboard = () => {
    
    return (
        <div className="flex flex-row w-full h-full ">

        <div className="flex flex-col justify-between w-[10%] items-start bg-white p-3">
            <div className="flex flex-col items-start justify-between h-28 text-[#0469a3c2]">
                <span>Employee</span>
                <span>Management</span>
                <span>System</span>
            </div>
            <div className="items-start">
                <h1 className="cursor-pointer m-0 hover:text-[#0469a3c2]">Employees</h1>
            </div>
            <div>
                <div className="flex flex-row items-center">
                   <FiLogOut /> Logout
                </div>
            </div>
        </div>
        <div className="flex flex-col w-[90%]">

        <div className="h-[10%] flex flex-row justify-between p-3 bg-white border-x-4 border-[#f0f1f3]">
            <div className="flex flex-col justify-center w-2/3 text-stone-500 "><input type="text" placeholder="Search" className="border-2 border-[#D9D9D9] h-10 p-2 focus:outline-none text-sm rounded-md w-64" /></div>
            <div className="flex flex-col justify-center w-1/3 items-end">
                <div className="flex flex-row  w-2/3 items-center">

                <VscAccount />
                <div className="px-3">Vanessa</div>
                </div>
            </div>
        </div>
        <div className="h-full w-6/6">
            <Table />
        </div>
        </div>
        </div>
    )
}

export default Dashboard;