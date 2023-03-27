import React, {useState} from "react";
import './TaskFilter.css';

const TaskFilter = (props) =>{
    const [selectedPriority, setSelectedPriority] = useState('all')

    const priorityChangeHandler = (event) => {
        const NextSelectedPriority =
            selectedPriority === "all" ? "high"
                : selectedPriority === "high"
                ? "medium"
                : selectedPriority === "medium"
                ? "low"
                : "all";

        props.onChangePriority(NextSelectedPriority);
        setSelectedPriority(NextSelectedPriority);
    }

    return (
        <div className='task-filter'>
            <label>Filter by priority</label>
            <div className='task-filter__control'>
                <button type="button" value={selectedPriority} onClick={priorityChangeHandler}>{selectedPriority}</button>
            </div>
        </div>
    );
};

export default TaskFilter
