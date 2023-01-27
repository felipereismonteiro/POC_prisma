import { prisma } from "../database/prisma.js";
import { CourseSchema, SchoolSchema, StudentSchema } from "../protocols/school.js";

function findSchool() {
    return prisma.school.findMany({ include: {students: true}});
}

function findOneSchool(id: number) {
    return prisma.school.findUnique({ where: {id: id}} )
}

function postSchool(school: SchoolSchema) {
    return prisma.school.create({
        data: school
    }) 
}

function updateSchool(id: number, data: SchoolSchema) {
    return prisma.school.update({where: {id: id}, data})
}

function deleteSchool(id: number) {
    return prisma.$transaction(async t => {
        await t.student.deleteMany({where: {school_id: id}});
        await t.school.delete({where: {id: id}});     
    })
}

function findStudents() {
    return prisma.student.findMany();
}

function postStudent(student: StudentSchema) {
    return prisma.student.create({
        data: student,
    })
}

function findOneStudent(id: number) {
    return prisma.student.findUnique({where: {id: id}})
}

function updateStudent(id:number , data: StudentSchema) {
    return prisma.student.update({ where: {id: id }, data})
}

function deleteStudent(id: number) {
    return prisma.student.delete({where: {id: id}})
}

function findCourses() {
    return prisma.courses.findMany();
}

function findOneCourse(id: number) {
    return prisma.courses.findUnique({where: {id: id}})
}

function postCourse(course: CourseSchema) {
    return prisma.courses.create({
        data: course
    })
}

function deleteCourse(id: number) {
    return prisma.courses.delete({ where: {id: id }} )
}

function updateCourse(id: number, data: CourseSchema) {
    return prisma.courses.update({ where: {id: id}, data})
}

export const schoolRepository ={
    findSchool,
    findCourses,
    findStudents,
    postSchool,
    postStudent,
    postCourse,
    deleteStudent,
    findOneStudent,
    deleteSchool,
    findOneSchool,
    findOneCourse,
    deleteCourse,
    updateStudent,
    updateCourse,
    updateSchool
}