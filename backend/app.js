 const express = require('express');
 const dotenv = require('dotenv');
 const mongoose = require('mongoose');
 const tasksRouter = require('./routes/task/task')


//  Configuration
const app = express();
dotenv.config();

const PORT = process.env.PORT;

//middleware
app.use(express.static('./public'))
app.use(express.json());


app.use('/api/v1/tasks',tasksRouter)



//routes

// app.get('/api/v1/tasks')     - get all the tasks
// app.post('/api/v1/tasks')    - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id')- update task
// app.delete('/api/v1/tasks/:id')- delete task



//MongoDB connection
const connect = async () => {
    try {
      await mongoose.connect(process.env.MongoDB);
      console.log("3. Backend Server is connected to MongoDB successfully!");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("Backend Server is disconnected from MongoDB !");
  });
  
  mongoose.connection.on("connected", () => {
    console.log(
      "2. Backend Server has successfuly initiated connection to MongoDB!"
    );
  });
  
  //Backend Server Connection Here
  app.listen(PORT, () => {
    connect();
    console.log("1. App is successfully Connected to backend server!");
  });
  