import React from "react";
import "./RegisteredStudentList.css";
import RegisteredStudent from "./RegisteredStudent";

function RegisteredStudentList(props){

    return(
        <ul className="registrations-list">
            {props.students.map( (student, index) => {
                return(
                    // <RegisteredStudent student={student} course={props.courses[student.course]} key={index}/>
                    <li>{student.first_name}</li>
                )
            })}
        </ul>
    )
}

export default RegisteredStudentList;