import React from "react";
import "./RegisteredStudentFilter.css";

function RegisteredStudentFilter(props){

    const handleSelect = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return(
        <div className="registrations-filter">
            <div className="registrations-filter__control">
                <label>Filter by Course Name</label>
                <select onChange={handleSelect}>
                    {props.courses.map( (course, index) => {
                        return(
                            <option value={course.id} key={index}>{course.name.toUpperCase()}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default RegisteredStudentFilter;