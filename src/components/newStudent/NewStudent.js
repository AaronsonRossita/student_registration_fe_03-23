import React, { useState } from "react";
import './NewStudent.css';
import StudentForm from "./StudentFrom";

function NewStudent(props){

    const [isEditing, setIsEditing] = useState(false);

    const handleRegister = () => {
        setIsEditing(true);
    }

    const handleCancel = () => {
        setIsEditing(false);
    }

    return(
        <div className="new-registration">
            {isEditing ? <StudentForm courses={props.courses} cancel={handleCancel} register={props.register}/> : <button onClick={handleRegister}>Register Student</button>}
        </div>
    )
}

export default NewStudent;