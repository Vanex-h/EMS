import React from "react";
import "./../../App.css";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const createEmployee = async () => {
    console.log("Creating employee");
    setLoading(true);
    const response = await fetch("http://localhost:1500/createEmployee", {
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
      },
    });
    setLoading(false);
    if (response.status == 200) {
      navigate("/records");
    } else {
      setError("Something is wrong");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div
      className={`w-screen lg:h-screen max-h-fit py-5 md:h-full bg-black/10  absolute top-0 left-0 flex items-center justify-center`}
    >
      <div
        className="absolute w-full h-full z-[3]"
        onClick={() => setViewDialog(false)}
      ></div>
      <div className=" z-[4] px-6 py-3 bg-white rounded-2xl h-[95%] flex lg:flex-row md:flex-row flex-col justify-between">
        <CloseIcon
          className="lg:text-stone-400 md:text-stone-400 text-transparent cursor-pointer ml-auto"
          onClick={() => setViewDialog(false)}
        />
        <div className="flex flex-col px-3 lg:h-full lg:text-start ">
          <DialogTitle className="text-[#383E49] flex flex-row justify-between">
            <strong className="text-[#383E49]">New Employee</strong>
            {/* <CloseIcon
                className="lg:text-stone-400 md:text-stone-400 "
                onClick={() => setViewDialog(false)}
            /> */}
          </DialogTitle>
          <form
            action=""
            className="text-[15px] text -[#48505E] p-3 w-full h-full flex flex-col justify-evenly "
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
                type="text"
                placeholder="Serial Number"
                className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                onChange={(e) => setSerialNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between pt-2">
              <Button
                className="border p-2 text-sm rounded-md text-[#858D9D] hover:bg-[#858D9D] hover:text-white"
                disabled={Loading}
                onClick={createEmployee}
              >
                Discard{" "}
              </Button>
              {/* <button
                className="border p-2 text-white bg-[#1366D9] text-sm h-11 rounded-md hover:bg-transparent hover:border-[#1366D9] hover:text-[#1366D9]"
                disabled={Loading}
                onClick={async() => {
                  console.log("working on it...")
                  await createEmployee()
                }}
              >
                {Loading ? "Loading..." : "Add Employee"}
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function SimpleDialogDemo() {
  const [viewDialog, setViewDialog] = React.useState(false);

  return (
    <div className="flex items-center m-auto justify-between h-screen ">
      <Button
        variant="outlined"
        onClick={() => setViewDialog(true)}
        className=""
      >
        THEE DIALOG BOX
      </Button>

      {viewDialog ? <SimpleDialog setViewDialog={setViewDialog} /> : null}
    </div>
  );
}
