import React, { useState } from "react";
import "./Registration.css"
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentFilter from "./RegisteredStudentFilter";

function Registration(props){


    const [filteredCourse, setFilteresCourse] = useState(1);
    const [selectedCourse, setSelectedCourse] = useState(props.courses[0]);

    const filteredStudentList = props.students.filter( (student) => {
        return student.course_id == filteredCourse;
    })


    const handleFilter = (courseId) => {
        setFilteresCourse(courseId)
        setSelectedCourse(props.courses.filter( (course) => {
            return course.id ==  courseId
        })[0])    
    }

    return(
        <div className="registrations card">
            <RegisteredStudentFilter courses={props.courses} onChangeFilter={handleFilter}/>
            <RegisteredStudentList students={filteredStudentList} course={selectedCourse}/>
        </div>
    )
}

export default Registration;