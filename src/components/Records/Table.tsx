

const Table = () => {
    return (
        <div className="h-full p-3 text-[#48505E]">
          <div className="bg-white h-16 flex flex-row justify-between p-3 items-center">
            <h2 className="text-xl font-medium text-[#444444]">Employee</h2>
            <button className="border px-6 py-4 bg-[#1366D9] text-white text-sm rounded-md hover:bg-white hover:border-[#1366D9] hover:text-[#1366d9]" >Add Employee +</button>
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
