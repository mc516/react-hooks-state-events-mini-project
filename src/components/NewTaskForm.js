import React from "react";

function NewTaskForm( {category} ) {
  const categoryListNoAll = category.filter(element => element !== "All")

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categoryListNoAll.map(element => {return <option>{element}</option> }) }
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
