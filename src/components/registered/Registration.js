import React, { useState } from "react";
import "./Registration.css"
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentFilter from "./RegisteredStudentFilter";

function Registration(props){

    console.log("from registration")
    console.log(props.students)

    const [filteredCourse, setFilteresCourse] = useState(props.courses[0]);

    const filteredStudentList = props.students.filter( (student) => {
        return student.course_id === filteredCourse;
    })

    const handleFilter = (course) => {
        setFilteresCourse(course)
    }

    return(
        <div className="registrations card">
            <RegisteredStudentFilter courses={props.courses} onChangeFilter={handleFilter}/>
            <RegisteredStudentList students={filteredStudentList} courses={props.courses}/>
        </div>
    )
}

export default Registration;