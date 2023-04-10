import React from "react";
import classes from  './AddTaskButton.module.css';

const AddTaskButton = () => {
    console.log('button component...')
    return (
        <div className={classes.button_format}>
            <button
                type="submit">
                Add Task
            </button>
        </div>
    );
};

export default AddTaskButton;