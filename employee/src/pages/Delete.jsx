// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate, Navigate } from 'react-router-dom';
// import API from '../api';
// import axios from 'axios';

// const Delete = () => {

//   const[employee,setEmployee]= useState(null);

//   useEffect(()=>{
//     const fetchEmployee = async()=>{
//       try{
//         const res= await API.get(`/employees/${id}`)
//         setEmployee(res.data);

//       }catch(error){
//         console.log("Error in fetching",error);

//       }
//     }
//     fetchEmployee();

//   },[id]);


//   const handleDelete = async()=>{
//     try {
//       await API.delete(`/employees/${id}`);
//       Navigate('/');
      
//     } catch (error) {
//       console.log("not deleted",error);
      
//     }
//   }
//   return(
//     <div>
//       <h2>Delete Employee</h2>
//       <p>do you want to delete this {employee.name} </p>
//     </div>
//   )
  
  
// };

// export default Delete;
