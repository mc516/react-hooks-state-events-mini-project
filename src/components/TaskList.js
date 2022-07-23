import React from "react";
import Task from "./Task"

function TaskList( {taskData} ) {
  

  function handDelete(event) {
    event.currentTarget.parentNode.remove()
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      { taskData.map(task => { return <Task key={task.text} text={task.text} category={task.category} deleteTask={handDelete}/> } )} 
       
    </div>
  );
}

export default TaskList;
