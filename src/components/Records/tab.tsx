import React, { useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Button, Space, Table } from 'antd';

type OnChange = NonNullable<TableProps<Employee>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

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
  data: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
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
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      filters: [
        { text: 'John', value: 'John' },
        { text: 'Jane', value: 'Jane' },
      ],
      filteredValue: filteredInfo.firstName || null,
      onFilter: (value, record) => record.firstName.includes(value as string),
      sorter: (a, b) => a.firstName.length - b.firstName.length,
      sortOrder: sortedInfo.columnKey === 'firstName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      filters: [
        { text: 'Doe', value: 'Doe' },
        { text: 'Smith', value: 'Smith' },
      ],
      filteredValue: filteredInfo.lastName || null,
      onFilter: (value, record) => record.lastName.includes(value as string),
      sorter: (a, b) => a.lastName.length - b.lastName.length,
      sortOrder: sortedInfo.columnKey === 'lastName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'National ID',
      dataIndex: 'national_id',
      key: 'national_id',
      sorter: (a, b) => a.national_id.localeCompare(b.national_id),
      sortOrder: sortedInfo.columnKey === 'national_id' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Telephone',
      dataIndex: 'telephone',
      key: 'telephone',
      sorter: (a, b) => a.telephone.localeCompare(b.telephone),
      sortOrder: sortedInfo.columnKey === 'telephone' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortOrder: sortedInfo.columnKey === 'department' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      sorter: (a, b) => a.position.localeCompare(b.position),
      sortOrder: sortedInfo.columnKey === 'position' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Laptop Manufacturer',
      dataIndex: 'laptop_manufacturer',
      key: 'laptop_manufacturer',
      sorter: (a, b) => a.laptop_manufacturer.localeCompare(b.laptop_manufacturer),
      sortOrder: sortedInfo.columnKey === 'laptop_manufacturer' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
      sorter: (a, b) => a.model.localeCompare(b.model),
      sortOrder: sortedInfo.columnKey === 'model' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Serial Number',
      dataIndex: 'serial_number',
      key: 'serial_number',
      sorter: (a, b) => a.serial_number.localeCompare(b.serial_number),
      sortOrder: sortedInfo.columnKey === 'serial_number' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
  );
};

export default EmployeeTable;
