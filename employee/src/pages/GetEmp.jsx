import React, { useState } from 'react';
import axios from '../api';
import { Link } from 'react-router-dom';

const GetEmp = () => {
  const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch employees by name
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/employees/search', {
        params: { name: search }
      });
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };

  // Optional: Trigger search on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchEmployees();
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={fetchEmployees}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : employees.length > 0 ? (
        employees.map((emp) => (
          <div
            key={emp._id}
            className="bg-white p-4 rounded shadow mb-4"
          >
            <h3 className="text-lg font-semibold">{emp.name}</h3>
            <p>{emp.email}</p>
            <p className="italic">{emp.position}</p>

            <div className="mt-2 flex gap-2">
              <Link
                to={`/employee/${emp._id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                View
              </Link>
              <Link
                to={`/edit/${emp._id}`}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </Link>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => alert(`Delete ${emp.name} clicked`)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
};

export default GetEmp;
