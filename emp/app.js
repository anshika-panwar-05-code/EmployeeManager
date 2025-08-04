require('dotenv').config();
const connectDB= require('./config/db');
const express = require('express');
const cors= require('cors');

const app = express();
const employeeRoutes = require('./routes/Employees');
connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());


app.use('/api', employeeRoutes);



app.listen(3000 ,()=>{
    console.log("connected server at prt no 3000");
})