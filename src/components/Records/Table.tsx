import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
import EmployeeTable from "./tab";

export interface SimpleDialogProps {
  setViewDialog: Function;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { setViewDialog } = props;
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [national_id, setNationalID] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [laptop_manufacturer, setLaptopManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [serial_number, setSerialNumber] = useState("");

  const createEmployee = async (e: any) => {
    e.preventDefault();
    console.log("Creating employee");
    setLoading(true);
    const response = await fetch("http://localhost:1500/employees/new", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        national_id,
        telephone,
        email,
        department,
        position,
        laptop_manufacturer,
        model,
        serial_number,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setLoading(false);
    if (response.status == 200) {
      window.location.reload();
    } else {
      setError("Fill all the fields accordingly");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="w-screen h-screen max-h-fit py-5 bg-black/10 absolute top-0 left-0 flex items-center justify-center z-1">
      <div
        className="absolute w-full h-full z-[3]"
        onClick={() => setViewDialog(false)}
      ></div>
      <div className="z-[4] px-6 py-3 bg-white rounded-2xl h-[95%] flex lg:flex-row md:flex-row flex-col justify-between">
        <CloseIcon
          className="lg:text-stone-400 md:text-stone-400 text-transparent cursor-pointer ml-auto"
          onClick={() => setViewDialog(false)}
        />
        <div className="flex flex-col px-3 lg:h-full lg:text-start">
          <DialogTitle className="text-[#383E49] flex flex-row justify-between">
            <strong className="text-[#383E49]">New Employee</strong>
          </DialogTitle>
          <p className="text-red-400">{error}</p>
          <form className="text-[15px] text-[#48505E] p-3 w-full h-full flex flex-col justify-evenly" onSubmit={createEmployee}>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">FirstName</div>
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">Last Name</div>
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">National ID</div>
              <input
                type="text"
                placeholder="National ID"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setNationalID(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">
                Phone number
              </div>
              <input
                type="number"
                placeholder="Phone number"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">Email</div>
              <input
                type="email"
                placeholder="Email"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">Department</div>
              <input
                type="text"
                placeholder="Department"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">Position</div>
              <input
                type="text"
                placeholder="Position"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">
                Laptop Manufacturer
              </div>
              <input
                type="text"
                placeholder="Laptop Manufacturer"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setLaptopManufacturer(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">Model</div>
              <input
                type="text"
                placeholder="Model"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center pr-4">
                Serial Number
              </div>
              <input
                type="text"
                placeholder="Serial Number"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setSerialNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between pt-2">
              <button
                className="border p-2 text-sm rounded-md text-[#858D9D] hover:text-md hover:text-gray-500"
                onClick={() => setViewDialog(false)}
              >
                Discard
              </button>
              <Button
                variant="outlined"
                className="border p-2 text-white bg-[#1366D9] text-sm h-11 rounded-md"
                type='submit'
              >
                Add Employee
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

  interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    national_id: string;
    telephone: string;
    email: string;
    department: string;
    position: string;
    laptop_manufacturer: string;
    model: string;
    serial_number: string;
  }

  interface TableProps {
    searchQuery: string;
  }

  const Table: React.FC<TableProps> = ({ searchQuery }) => {
    const [viewDialog, setViewDialog] = useState(false);
    const [employees, setEmployees] = useState<Employee[]>([]);


    useEffect(() => {
      const fetchEmployees = async () => {
        try {
          const response = await fetch("http://localhost:1500/employees", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const data = await response.json();
          setEmployees(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching employee data:", error);
        }
      };

      fetchEmployees();
    }, []);

   const [inputValue, setInputValue] = useState("")

    return (
      <div className="p-3 text-[#48505E] flex flex-col">
        <div className="bg-white h-16 flex flex-row justify-between p-3 items-center">
          <h2 className="text-xl font-medium text-[#444444]">Employee</h2>
          <input
            type="text"
            placeholder="Search employee"
            className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
            onChange={(e) => setInputValue(e.target.value)}

            />
            
          <button
            className="border px-6 py-4 bg-[#1366D9] text-white text-sm rounded-md hover:bg-white hover:border-[#1366D9] hover:text-[#1366d9]"
            onClick={() => setViewDialog(true)}
          >
            Add Employee +
          </button>
          {viewDialog ? <SimpleDialog setViewDialog={setViewDialog} /> : null}
        </div>
        <div className="w-full flex content-center justify-center">
          <div className="w-full">
            <EmployeeTable employeeData={employees} inputValue={inputValue}/>

          </div>
        </div>
  
      </div>
    );
  };

  export default Table;
