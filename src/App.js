
import { useEffect, useState } from 'react';
import './App.css';
import NewStudent from "./components/newStudent/NewStudent"
import Registration from "./components/registered/Registration"
import { createStudent, getAllCourses, getAllStudents } from './network/api';


function App() {

  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);


  useEffect( () => {
    // getAllCourses()
    //   .then(res => setCourses(res.data))
    //   .catch(err => alert(err.message))
    // getAllStudents()
    //   .then(res => {
    //     setStudents(res.data);
    //   })
    //   .catch(err => alert(err.message))
    const fetchStudentsAndCourses = async () => {
      try{
        const courses = await getAllCourses();
        const students = await getAllStudents();
        setCourses(courses.data);
        setStudents(students.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchStudentsAndCourses()
  },[])

  const handleStudentRegistration = (student) => {
    createStudent(student)
      .then(res => console.log("Student with id " + res.data + " was created"))
      .catch(err => alert(err.message))
  }

  return (
    <div >
      <NewStudent courses={courses} register={handleStudentRegistration}/>
      <Registration courses={courses} students={students}/>
    </div>
  );
}

export default App;
