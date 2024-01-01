import React, { useState } from "react";
import './StudentForm.css';
import dateFormatting from "../../utils/dateUtils";

function StudentForm(props){

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [chosenCourse, setChosenCourse] = useState("");
    const [courseDate, setCourseDate] = useState("");

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const handleLastNameInput = (event) => {
        setLastName(event.target.value);
    }

    const handleCourseSelection = (event) => {
        setCourseDate(dateFormatting(props.courses[event.target.value].start_date));
        setChosenCourse(props.courses[event.target.value].id);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const student = {
            first_name: name,
            last_name: lastName,
            course_id: chosenCourse
        }
        props.register(student);
        props.cancel();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="new-registration__control">
                    <label>First name</label>
                    <input 
                        type="text"
                        required
                        value={name}
                        onChange={handleNameInput}
                    />
                    <label>Last name</label>
                    <input 
                        type="text"
                        required
                        value={lastName}
                        onChange={handleLastNameInput}
                    />
                </div>
                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select className="course-selection" onChange={handleCourseSelection}>
                        <option disabled selected>Please Choose A Course</option>
                        {props.courses.map( (element, index) => {
                            return(
                                <option value={index} key={index}>{element.name[0].toUpperCase() + element.name.slice(1) + " Course"}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date" disabled value={courseDate}/>
                </div>
                <br/><br/>
                <div className="new-registration__actions">
                    <button type="button" onClick={props.cancel}>Cancel</button>
                    <button type="submit">Register Student</button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm;