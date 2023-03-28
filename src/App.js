import React, {useState} from "react";
import './App.css';
import Tasks from "./components/Tasks/Tasks";
import NewTask from './components/NewTask/NewTask';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const DUMMY_TASKS = [
    {
        id: 'e1',
        date : new Date(2024, 6, 10),
        title : 'Study React',
        priority: 'high'
    },
    {
        id: 'e2',
        date : new Date(2024, 4, 10),
        title : 'Study JS',
        priority: 'high'
    },
    {
        id: 'e3',
        date : new Date(2023, 8, 10),
        title : 'Study HTML',
        priority: 'low'
    }
    ]
const App = () => {
    const [tasks, setTasks] = useState(DUMMY_TASKS)
    const [users, setUsers] = useState([])

    const AddUserHandler = (username, age) => {
        setUsers((previousUsers) => {
            return [
                ...previousUsers,
                {
                    id: Math.random().toString(),
                    name: username,
                    age: age
                }
            ]
        })
    }

    const addTaskHandler = (task) => {
        setTasks((previousTask) => {
            return [task, ...previousTask]
        })
    }

  return (
      <div className="App">
          <AddUser onAddUser={AddUserHandler}/>
          <UsersList users={users}/>
          {
              users.length !== 0 &&
              <NewTask onAddTask={addTaskHandler}></NewTask>
          }
          <Tasks taskData={tasks}></Tasks>
      </div>
  );
}

export default App;
