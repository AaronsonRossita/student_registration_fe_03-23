import React from "react";
import "./RegisteredStudent.css"
import CourseDate from "./CourseDate";

function RegisteredStudent(props){

    return(
        <div className="registration-student card">
            <CourseDate date={props.course.start_date}/>
            <div className="registration-student__description">
                <h2>{props.student.studentName}</h2>
                <div className="registration-student__course">
                    {props.course.displayName}
                </div>
            </div>
        </div>
    )
}

export default RegisteredStudent;