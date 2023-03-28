import React, {useState} from "react";
import './Tasks.css'
import Card from "../UI/Card";
import TaskFilter from './TaskFilter';
import TaskList from "./TaskList";

const Tasks = (props) => {
    const [currentPriority,setCurrentPriority] =
    useState('all')

    const selectedPriorityChangeHandler = (selectedPriority) => {
        setCurrentPriority(selectedPriority)
    }

    const filteredTasks = props.taskData.filter(task => task.priority ===
        (currentPriority))
    const unFilteredTasks = props.taskData

    return (
        <Card className="tasks">
            <TaskFilter onChangePriority={selectedPriorityChangeHandler}></TaskFilter>
            <TaskList filteredTasks={filteredTasks} unFilteredtaks={unFilteredTasks} selectedPriority={currentPriority}></TaskList>
        </Card>
    )
}

export default Tasks