import React from "react";
import TaskItem from "./TaskItem";
import './TaskList.css'

const TaskList =(props) => {
    if(props.filteredTasks.length === 0 && props.selectedPriority !== "all") {
        return <p className="task-list__fallback">No Tasks found!</p>
    }

    return (
        <ul className="task-list">
            {props.selectedPriority !== 'all' ?
                props.filteredTasks.map((task) => {
                return <TaskItem
                    id={task.id}
                    title={task.title}
                    priority={task.priority}
                    date={task.date}>
                </TaskItem>
            }) :
                props.unFilteredtaks.map((task) => {
                return <TaskItem
                    id={task.id}
                    title={task.title}
                    priority={task.priority}
                    date={task.date}>
                </TaskItem>
                })
            }
        </ul>
    )
}

export default TaskList