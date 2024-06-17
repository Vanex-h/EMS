import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface SimpleDialogProps<T> {
  setViewDialog: Function;
  setData: React.Dispatch<React.SetStateAction<T>>
}

export function SimpleDialog(props: SimpleDialogProps<Employee[]>) {
  const { setViewDialog, setData } = props;
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

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:1500/employees", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

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
      await fetchEmployees();
      setViewDialog(false);
      toast.success("Employee Created Successfully");
      setTimeout(() => {
      }, 2000);
    } else {
      toast.error("Error in creating the employee");
      setTimeout(() => {
      }, 2000);
      setError("Fill all the fields accordingly");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="w-screen h-screen max-h-fit py-5 bg-black/10 absolute top-0 left-0 flex items-center justify-center z-[2]">
      <ToastContainer />
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
          <form
            className="text-[15px] text-[#48505E] p-3 w-full h-full flex flex-col justify-evenly"
            onSubmit={createEmployee}
          >
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
                type="number"
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
                type="submit"
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

const Table = () => {
  const [viewDialog, setViewDialog] = useState(false);
  const [employeeNber, setEmployeeNber] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [username, setUsername] = useState("");
  const emloyeeNumber = async () => {
    const response = await fetch("http://localhost:1500/employees/total", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    setEmployeeNber(data.totalEmployees);
    console.log("========>", employeeNber);
  };

  useEffect(() => {
    emloyeeNumber();
  }, []);

  const userProfile = async () => {
    const response = await fetch("http://localhost:1500/users/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    setUsername(data.user.email);
    console.log("========>", username);
  };

  useEffect(() => {
    userProfile();
  }, []);
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

  const [inputValue, setInputValue] = useState("");

  return (

    <div className="h-screen w-[100%] ">
      <ToastContainer />
      <div className="w-full h-[10%] flex xs:flex-col  sm:flex-col lg:flex-row justify-around bg-white border-x-4 border-[#f0f1f3]">
        <div className=" h-full flex flex-col text-lg justify-center text-[#0469a3c2] font-semibold">
          EMPLOYEE TABLE
        </div>
        <div className=" h-full text-sm flex flex-col justify-center">
          <div>

          <span>
          Hello there 👋,</span> <span className="text-gray-800 font-semibold">
            {username}
            </span>
          </div>
        </div>
      </div>
      <div className="py-3 px-2 h-[90%] text-[#48505E] flex flex-col ">
        <div className="bg-white h-44 lg:h-20 flex flex-col md:flex-row lg:flex-row justify-evenly lg:justify-between p-3 items-center">
          
          <input
            type="text"
            placeholder="Search employee"
            className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className="border px-6 py-4 lg:px-6 lg:py-4 bg-[#0469a3c2] text-white text-sm rounded-md hover:bg-white hover:border-[#0469a3c2] hover:text-[#0469a3c2]"
            onClick={() => setViewDialog(true)}
          >
            Add Employee +
          </button>
          {viewDialog ? <SimpleDialog setViewDialog={setViewDialog} setData={setEmployees} /> : null}
        </div>
        <div className="w-full flex content-center justify-center">
          <div className="w-full">
            <EmployeeTable employeeData={employees} inputValue={inputValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
