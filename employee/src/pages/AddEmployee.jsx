import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '../api';


const AddEmployee = () => {
  const [form, setForm] = useState({ name: '', email: '', position: '', salary: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/employees', form);
      navigate('/')

    } catch (error) {
      console.log("Error in creating employee", error);

    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10 p-4  bg-white rouded shadow">
      <input type="text" name='name' placeholder='Name' value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="text" name='email' placeholder='Email' value={form.email} onChange={handleChange}  className="w-full border p-2 rounded"/>
      <select name='position' value={form.position} onChange={handleChange}  className="w-full border p-2 rounded">
        <option value="">Select Position</option>
        <option value="Manager">Manager</option>
        <option value="HR">HR</option>
        <option value="Intern">Intern</option>
        <option value="Employee">Employee</option>


      </select>
      <input type="number" name='salary' placeholder='Salary' value={form.salary} onChange={handleChange}  className="w-full border p-2 rounded"/>
      <button  type='submit'  className="bg-blue-600 text-white px-4 py-2 rounded w-full">Add</button>
    </form>
  )


}



export default AddEmployee;

