import { Router } from "express";
import { deleteCourse, deleteSchool, deleteStudent, getCourses, getSchool, getStudents, postCourse, postSchool, postStudent, updateCourse, updateSchool, updateStudent } from "../controllers/schoolController.js";

export const SchoolRoute = Router();

SchoolRoute.get("/schools", getSchool);
SchoolRoute.get("/students", getStudents);
SchoolRoute.get("/courses", getCourses);

SchoolRoute.post("/school", postSchool);
SchoolRoute.post("/student", postStudent);
SchoolRoute.post("/course", postCourse);

SchoolRoute.delete("/school/:id", deleteSchool);
SchoolRoute.delete("/student/:id", deleteStudent);
SchoolRoute.delete("/course/:id", deleteCourse);

SchoolRoute.put("/school/:id", updateSchool);
SchoolRoute.put("/student/:id", updateStudent);
SchoolRoute.put("/course/:id", updateCourse);