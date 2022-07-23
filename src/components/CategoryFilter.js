import React from "react";
import { useState } from "react"

function CategoryFilter( {category} ) {
  const [isActive, setIsActive] = useState(false)

  function handleSelected(event) {
    if(event.currentTarget.innerText === "All") {
      setIsActive(active => !active)
    } else {
      event.currentTarget.classList.toggle('selected');
    }
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      { category.map(element => { 
        return <button key={element} className={isActive ? "selected" : ""} onClick={handleSelected}>{element}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
