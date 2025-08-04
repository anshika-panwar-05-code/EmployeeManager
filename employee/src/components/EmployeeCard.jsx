import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition duration-300 min-h-[170px] flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold capitalize">{employee.name}</h3>
        <p className="text-gray-600">{employee.email}</p>
        <p className="italic capitalize text-gray-500">{employee.position}</p>
      </div>

      <div className="flex gap-4 mt-4">
        <Link
          to={`/employee/${employee._id}`}
          className="text-white bg-blue-500 hover:underline rounded-lg px-4 p-1 border-4"
        >
          View
        </Link>
        <Link
          to={`/edit/${employee._id}`}
          className=" text-white bg-green-600 hover:underline rounded-lg px-4 p-1 border-4"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(employee._id)}
          className=" text-white bg-red-600 hover:underline rounded-lg px-4 p-1 border-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
