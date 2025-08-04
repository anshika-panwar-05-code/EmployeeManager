import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await API.get(`/employees/${id}`);
      setEmployee(res.data);
    };
    fetchDetails();
  }, [id]);

  if (!employee) return <div>Loading...</div>;

 return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">👤 Employee Details</h2>

      <div className="space-y-3 text-gray-700 text-base">
        <p>
          <span className="font-semibold">Name:</span> {employee.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {employee.email}
        </p>
        <p>
          <span className="font-semibold">Position:</span> {employee.position}
        </p>
        <p>
          <span className="font-semibold">Salary:</span> ₹{employee.salary || 'N/A'}
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDetails;
