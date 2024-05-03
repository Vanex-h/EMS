import React from "react";
import "./../../App.css";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";


export interface SimpleDialogProps {
  setViewDialog: Function;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { setViewDialog } = props;

  return (
    <div className={`w-screen lg:h-screen max-h-fit py-5 md:h-full bg-black/10  absolute top-0 left-0 flex items-center justify-center`}>
      <div className="absolute w-full h-full z-[3]" onClick={() => setViewDialog(false)}></div>
      <div className=" z-[4] px-6 py-3 bg-white rounded-2xl h-[95%] flex lg:flex-row md:flex-row flex-col justify-between">
      <CloseIcon
            className="lg:text-stone-400 md:text-stone-400 text-transparent cursor-pointer ml-auto"
            onClick={() => setViewDialog(false)}
          />
            <div className="flex flex-col px-3 lg:h-full lg:text-start ">
            <DialogTitle className="text-[#383E49] flex flex-row justify-between" >
                <strong className="text-[#383E49]">New Employee</strong>
                {/* <CloseIcon
                className="lg:text-stone-400 md:text-stone-400 "
                onClick={() => setViewDialog(false)}
            /> */}
            </DialogTitle>
            <form action="" className="text-[15px] text -[#48505E] p-3 w-full h-full flex flex-col justify-evenly ">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">FirstName</div>
                    <input type="text" placeholder="First Name" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">Last Name</div>
                    <input type="text" placeholder="Last Name" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">National ID</div>
                    <input type="text" placeholder="National ID" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">Phone number</div>
                    <input type="number" placeholder="Phone number" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">Email</div>
                    <input type="email" placeholder="Email" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">Department</div>
                    <input type="text" placeholder="Department" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">Position</div>
                    <input type="text" placeholder="Position" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">Laptop Manufacturer</div>
                    <input type="text" placeholder="Laptop Manufacturer" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">Model</div>
                    <input type="text" placeholder="Model" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center pr-4">Serial Number</div>
                    <input type="text" placeholder="Serial Number" className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60" />
                </div>  
                <div className="flex flex-row justify-between pt-2">
                <button className="border p-2 text-sm rounded-md text-[#858D9D] hover:text-md hover:text-gray-500" onClick={()=>setViewDialog(false)}>Discard </button>
                <Button variant="outlined" className="border p-2 text-white bg-[#1366D9] text-sm h-11 rounded-md ">Add Employee</Button>
                </div>
            </form>
            </div>      
      </div>
    </div>
  );
}

const Table = () => {
  const [viewDialog, setViewDialog] = React.useState(false);
    return (
        <div className="h-full p-3 text-[#48505E]">
          <div className="bg-white h-16 flex flex-row justify-between p-3 items-center">
            <h2 className="text-xl font-medium text-[#444444]">Employee</h2>
            <button className="border px-6 py-4 bg-[#1366D9] text-white text-sm rounded-md hover:bg-white hover:border-[#1366D9] hover:text-[#1366d9]"  onClick={() => setViewDialog(true)}>Add Employee +</button>
            {viewDialog ? <SimpleDialog setViewDialog={setViewDialog} /> : null}
          </div>
       <table className="table-fixed w-full h-auto bg-white border-collapse border border-transparent">
        
  <thead>
    <tr className="text-[#667085] border-b border-transparent">
      <th className=" py-2">ID</th>
      <th className=" py-2">FirstName</th>
      <th className=" py-2">LastName</th>
      <th className=" py-2">National Identity</th>
      <th className=" py-2">Telephone</th>
      <th className=" py-2">Email</th>
      <th className=" py-2">Department</th>
      <th className=" py-2">Position</th>
      <th className=" py-2">Laptop Manufacturer</th>
      <th className=" py-2">Model</th>
      <th className="px-4 py-2">Serial Number</th>
    </tr>
  </thead>
  <tbody>
    <tr className=" border-b border-transparent">
      <td className=" py-2">102</td>
      <td className=" py-2">Samanta</td>
      <td className=" py-2">ISHIMWE</td>
      <td className=" py-2 text-sm">120000710913307</td>
      <td className=" py-2">0788888888</td>
      <td className=" py-2 text-[13px]">samanta@gmail.com</td>
      <td className=" py-2">Human resource</td>
      <td className=" py-2">Manager</td>
      <td className=" py-2">HP</td>
      <td className=" py-2">Envy</td>
      <td className="px-4 py-2">3400</td>
    </tr>
    <tr className=" border-b border-transparent">
      <td className=" py-2">102</td>
      <td className=" py-2">Samanta</td>
      <td className=" py-2">ISHIMWE</td>
      <td className=" py-2 text-sm">120000710913307</td>
      <td className=" py-2">0788888888</td>
      <td className=" py-2 text-[13px]">samanta@gmail.com</td>
      <td className=" py-2">Human resource</td>
      <td className=" py-2">Manager</td>
      <td className=" py-2">HP</td>
      <td className=" py-2">Envy</td>
      <td className="px-4 py-2">3400</td>
    </tr>
    <tr className=" border-b border-transparent">
      <td className=" py-2">102</td>
      <td className=" py-2">Samanta</td>
      <td className=" py-2">ISHIMWE</td>
      <td className=" py-2 text-sm">120000710913307</td>
      <td className=" py-2">0788888888</td>
      <td className=" py-2 text-[13px]">samanta@gmail.com</td>
      <td className=" py-2">Human resource</td>
      <td className=" py-2">Manager</td>
      <td className=" py-2">HP</td>
      <td className=" py-2">Envy</td>
      <td className="px-4 py-2">3400</td>
    </tr>
    <tr className=" border-b border-transparent">
      <td className=" py-2">102</td>
      <td className=" py-2">Samanta</td>
      <td className=" py-2">ISHIMWE</td>
      <td className=" py-2 text-sm">120000710913307</td>
      <td className=" py-2">0788888888</td>
      <td className=" py-2 text-[13px]">samanta@gmail.com</td>
      <td className=" py-2">Human resource</td>
      <td className=" py-2">Manager</td>
      <td className=" py-2">HP</td>
      <td className=" py-2">Envy</td>
      <td className="px-4 py-2">3400</td>
    </tr>
    <tr className=" border-b border-transparent">
      <td className=" py-2">102</td>
      <td className=" py-2">Samanta</td>
      <td className=" py-2">ISHIMWE</td>
      <td className=" py-2 text-sm">120000710913307</td>
      <td className=" py-2">0788888888</td>
      <td className=" py-2 text-[13px]">samanta@gmail.com</td>
      <td className=" py-2">Human resource</td>
      <td className=" py-2">Manager</td>
      <td className=" py-2">HP</td>
      <td className=" py-2">Envy</td>
      <td className="px-4 py-2">3400</td>
    </tr>
    <tr className=" border-b border-transparent">
      <td className=" py-2">102</td>
      <td className=" py-2">Samanta</td>
      <td className=" py-2">ISHIMWE</td>
      <td className=" py-2 text-sm">120000710913307</td>
      <td className=" py-2">0788888888</td>
      <td className=" py-2 text-[13px]">samanta@gmail.com</td>
      <td className=" py-2">Human resource</td>
      <td className=" py-2">Manager</td>
      <td className=" py-2">HP</td>
      <td className=" py-2">Envy</td>
      <td className="px-4 py-2">3400</td>
    </tr>
    <tr className=" border-b border-transparent">
      <td className=" py-2">102</td>
      <td className=" py-2">Samanta</td>
      <td className=" py-2">ISHIMWE</td>
      <td className=" py-2 text-sm">120000710913307</td>
      <td className=" py-2">0788888888</td>
      <td className=" py-2 text-[13px]">samanta@gmail.com</td>
      <td className=" py-2">Human resource</td>
      <td className=" py-2">Manager</td>
      <td className=" py-2">HP</td>
      <td className=" py-2">Envy</td>
      <td className="px-4 py-2">3400</td>
    </tr>
  </tbody>
</table>
<div className="h-16 flex flex-row p-3 bg-white justify-between w-[100%]">
  <button className="border px-3 text-sm hover:bg-[#48505E] hover:text-white rounded-md">Previous</button>
  <div className="text-[15px] flex flex-row items-center justify-evenly w-24">Page <br /><div className="font-medium">1</div> of <div className="font-medium">10</div></div>
  <button className="border px-3 text-sm hover:bg-[#48505E] hover:text-white rounded-md">Next</button>
</div>

        </div>
    );
}

export default Table;
