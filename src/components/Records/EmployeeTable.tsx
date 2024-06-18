import React, { useState, useEffect } from "react";
import type { TableColumnsType, TableProps } from "antd";
import { toast, ToastContainer } from "react-toastify";
import Button from "@mui/material/Button";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as AButton, Space, Table, Input } from "antd";
import { useNavigate } from "react-router-dom";

type OnChange = NonNullable<TableProps<Employee>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

export interface SimpleDialogProps<T> {
  setViewDialog: Function;
  setData: React.Dispatch<React.SetStateAction<T>>;
  id: number;
}

export function SimpleDialog(props: SimpleDialogProps<Employee[]>) {
  const { setViewDialog, setData, id } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [employee, setEmployee] = useState<Employee | null>(null);

  const fetchEmployee = async (id: number) => {
    console.log("The id is=================>",id);
    
    try {
      const response = await fetch(`http://localhost:1500/employees/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      
      const fetchedData = await response.json();
      
      setEmployee(fetchedData);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    fetchEmployee(id);
  }, [id]);

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
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const updateEmployee = async (e: any) => {
    e.preventDefault();
    
    setError("");  // Clear previous errors

    try {
      console.log("the employee to be updated is",id);
      const response = await fetch(
        `http://localhost:1500/employees/update/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(employee),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setLoading(false);

      if (response.status === 200) {
       
        toast.success("Employee Updated Successfully");
        setTimeout(() => {}, 2000);
        setViewDialog(false);
        await fetchEmployees();
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Error updating the employee";
        toast.error(errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error updating employee data:", error);
      toast.error("Error updating the employee");
      setError("An unexpected error occurred. Please try again.");
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
            <strong className="text-[#383E49]">Update Employee</strong>
          </DialogTitle>
          <p className="text-red-400">{error}</p>
          {employee && (
            <form
              className="text-[15px] text-[#48505E] p-3 w-full h-full flex flex-col justify-evenly"
              onSubmit={updateEmployee}
            >
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">First Name</div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.firstName}
                  onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">Last Name</div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.lastName}
                  onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">National ID</div>
                <input
                  type="text"
                  placeholder="National ID"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.national_id}
                  onChange={(e) => setEmployee({ ...employee, national_id: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">Phone number</div>
                <input
                  type="number"
                  placeholder="Phone number"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.telephone}
                  onChange={(e) => setEmployee({ ...employee, telephone: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">Email</div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.email}
                  onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">Department</div>
                <input
                  type="text"
                  placeholder="Department"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.department}
                  onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">Position</div>
                <input
                  type="text"
                  placeholder="Position"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.position}
                  onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">Laptop Manufacturer</div>
                <input
                  type="text"
                  placeholder="Laptop Manufacturer"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.laptop_manufacturer}
                  onChange={(e) => setEmployee({ ...employee, laptop_manufacturer: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">Model</div>
                <input
                  type="text"
                  placeholder="Model"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.model}
                  onChange={(e) => setEmployee({ ...employee, model: e.target.value })}
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center pr-4">Serial Number</div>
                <input
                  type="number"
                  placeholder="Serial Number"
                  className="border rounded-md p-3 focus:outline-none h-11 text-sm w-60"
                  value={employee.serial_number}
                  onChange={(e) => setEmployee({ ...employee, serial_number: e.target.value })}
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
                  {loading ? "Updating..." : "Update Employee"}
                </Button>
              </div>
            </form>
          )}
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

interface EmployeeTableProps {
  employeeData: Employee[];
  inputValue: string;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employeeData,
  inputValue,
}) => {
  const [data, setData] = useState(employeeData);

  useEffect(() => {
    if (employeeData.length !== 0) {
      setData(employeeData);
    } else {
      setData([]);
    }
  }, [employeeData]);

  useEffect(() => {
    setSearchQuery(inputValue);
  }, [inputValue]);
  const [viewDialog, setViewDialog] = useState(false);
  const [recordIdToUpdate, setRecordIdToUpdate] = useState<number>(-1);
  const [employeeNber, setEmployeeNber] = useState<number>(0);
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };


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
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };
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

  const handleDelete = async (id: number) => {
    console.log("id", id);

    try {
      const response = await axios.delete(
        `http://localhost:1500/employees/delete/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(`Successfully deleted record with id: ${id}`);
        await fetchEmployees();
        await updateTotalEmployees(); // Call the function to update the total number of employees
        toast.success("Employee Deleted Successfully");
        setTimeout(() => {}, 2000);
      } else {
        console.log(`Failed to delete record with id: ${id}`);
      }
    } catch (error) {
      console.log(`Error deleting record with id: ${id}`, error);
    }
  };
  const updateTotalEmployees = async () => {
    const response = await fetch("http://localhost:1500/employees/total", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const rdata = await response.json();
    setEmployeeNber(rdata.totalEmployees);
    console.log("========>", employeeNber);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const columns: TableColumnsType<Employee> = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      filters: data.map((employee) => ({
        text: employee.firstName,
        value: employee.firstName,
      })),
      filteredValue: filteredInfo.firstName || null,
      onFilter: (value, record) => record.firstName.includes(value as string),
      sorter: (a, b) => a.firstName.length - b.firstName.length,
      sortOrder: sortedInfo.columnKey === "firstName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      filters: data.map((employee) => ({
        text: employee.lastName,
        value: employee.lastName,
      })),
      filteredValue: filteredInfo.lastName || null,
      onFilter: (value, record) => record.lastName.includes(value as string),
      sorter: (a, b) => a.lastName.length - b.lastName.length,
      sortOrder: sortedInfo.columnKey === "lastName" ? sortedInfo.order : null,
      ellipsis: true,
      // width: 'fit-content'
      // width: '20%',
    },
    {
      title: "National ID",
      dataIndex: "national_id",
      key: "national_id",
      sorter: (a, b) => a.national_id.localeCompare(b.national_id),
      sortOrder:
        sortedInfo.columnKey === "national_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "telephone",
      sorter: (a, b) => a.telephone.localeCompare(b.telephone),
      sortOrder: sortedInfo.columnKey === "telephone" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortOrder:
        sortedInfo.columnKey === "department" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      sorter: (a, b) => a.position.localeCompare(b.position),
      sortOrder: sortedInfo.columnKey === "position" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Laptop Manufacturer",
      dataIndex: "laptop_manufacturer",
      key: "laptop_manufacturer",
      sorter: (a, b) =>
        a.laptop_manufacturer.localeCompare(b.laptop_manufacturer),
      sortOrder:
        sortedInfo.columnKey === "laptop_manufacturer"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      sorter: (a, b) => a.model.localeCompare(b.model),
      sortOrder: sortedInfo.columnKey === "model" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Serial Number",
      dataIndex: "serial_number",
      key: "serial_number",
      sorter: (a, b) => a.serial_number.localeCompare(b.serial_number),
      sortOrder:
        sortedInfo.columnKey === "serial_number" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <AButton
            onClick={() => {
              setViewDialog(true);
              setRecordIdToUpdate(record.id);
              console.log(record.id);
              
            }}
          >
            Update
          </AButton>
          <AButton onClick={() => handleDelete(record.id)} danger>
            Delete
          </AButton>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    console.log(searchQuery);
    if (searchQuery !== "") {
      const filteredData = searchQuery
        ? data.filter((employee) =>
            Object.values(employee).some((value) =>
              value.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
          )
        : data;
      setData(filteredData);
    } else {
      setData(employeeData);
    }
  }, [searchQuery]);
  return (
    <>
      <Space style={{ marginBottom: 12 }}></Space>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        className="h-[90%] w-full "
        pagination={{
          defaultPageSize: 6,
        }}
        scroll={{ x: 2000 }}
      />
      <h2 className=" font-medium text-[#444444] text-sm mt-1 lg:mt-0">
        <span className="text-[#000]">
          Total Employees :{" "}
          <span className="text-[#0469a3c2] text-lg">{employeeNber}</span>
        </span>
      </h2>
      {viewDialog ? (
        <SimpleDialog
          setViewDialog={setViewDialog}
          setData={setData}
          id={parseInt(recordIdToUpdate as unknown as string, 10)}
        />
      ) : null}
    </>
  );
};

export default EmployeeTable;
