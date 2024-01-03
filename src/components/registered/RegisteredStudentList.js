import React from "react";
import "./RegisteredStudentList.css";
import RegisteredStudent from "./RegisteredStudent";

function RegisteredStudentList(props){

    //console.log(props.courses)

    return(
        <ul className="registrations-list">
            {props.students.map( (student, index) => {
                return(
                    <RegisteredStudent student={student} course={props.course} key={index}/>
                )
            })}
        </ul>
    )
}

export default RegisteredStudentList;