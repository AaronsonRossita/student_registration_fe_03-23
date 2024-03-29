import { axiosInstance } from "./axiosInstance";

// const COURSES_ALL_END_POINT = () => "/course/all";
// const STUDENTS_ALL_END_POINT = () => "/student/all";
// const STUDENTS_CREATE_END_POINT = () => "/student/create";


// export const getAllCourses = () => {
//     return axios.get(COURSES_ALL_END_POINT());
// }

// export const getAllStudents = () => {
//     return axios.get(STUDENTS_ALL_END_POINT());
// }

// export const registerStudent = (student) => {
//     return axios.post(STUDENTS_CREATE_END_POINT(),student);
// }

export const getAllCourses = () => {
    return axiosInstance.get(`/course/all`)
}

export const getAllStudents = () => {
    return axiosInstance.get(`/student/all`) 
}

export const createStudent = (student) => {
    return axiosInstance.post(`/student/create`,student)
}