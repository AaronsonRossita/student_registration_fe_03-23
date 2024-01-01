import React from "react";
import "./CourseDate.css";

function CourseDate(props){
    
    let day = props.date.getDate();
    let month = props.date.toLocaleString('default', { month: 'long' });
    let year = props.date.getFullYear();

    return(
        <div className="registration-date">
            <div>
                {day + " / " + month + " / " + year}
            </div>
        </div>
    )
}

export default CourseDate;