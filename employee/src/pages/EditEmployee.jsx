import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', position: '', salary: '' });

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await API.get(`/employees/${id}`);
      setForm(res.data);
    };
    fetchEmployee();
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await API.put(`/employees/${id}`, form);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Edit Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={form.name} className="w-full border p-2" onChange={handleChange} />
        <input type="email" name="email" value={form.email} className="w-full border p-2" onChange={handleChange} />
         <select
          name="position"
          className="w-full border p-2"
          onChange={handleChange}
          value={form.position}
        >
          <option value="">Select Position</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
          <option value="HR">HR</option>
          <option value="Intern">Intern</option>
        </select>

        <input type="number" name="salary" value={form.salary} className="w-full border p-2" onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
