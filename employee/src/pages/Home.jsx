import React, { useEffect, useState } from 'react';
import API from '../api';
import EmployeeCard from '../components/EmployeeCard';
import Loader from '../components/Loader';
import GetEmp from './GetEmp';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const res = await API.get('/employees');
      setEmployees(res.data);
    } catch (err) {
      console.error('Failed to fetch employees', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
     const empToDelete = employees.find(emp => emp._id === id);
  if (!empToDelete) return;

  if (window.confirm(`Are you sure you want to delete this ${empToDelete.name}?`)) {
    await API.delete(`/employees/${id}`);
    setEmployees(prev => prev.filter(emp => emp._id !== id)); // remove from UI
  }
};

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Employees</h1>
      <GetEmp/>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {employees.map((emp) => (
            <EmployeeCard key={emp._id} employee={emp} onDelete={handleDelete} />

          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
