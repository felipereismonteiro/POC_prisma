import { Request, Response } from "express";
import { schoolRepository } from "../repositories/schoolsRepository.js";
import {
  CourseSchema,
  SchoolEntity,
  SchoolSchema,
  StudentSchema,
} from "../protocols/school.js";
import { defaultSchema, studentSchema } from "../schemas/schoolSchema.js";

// CRUD CREATE READ UPDATE DELETE

export async function getSchool(req: Request, res: Response) {
  try {
    const result = await schoolRepository.findSchool();

    return res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function getStudents(req: Request, res: Response) {
  try {
    const result = await schoolRepository.findStudents();

    return res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function getCourses(req: Request, res: Response) {
  try {
    const result = await schoolRepository.findCourses();

    return res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function postSchool(req: Request, res: Response) {
  try {
    const school = req.body as SchoolEntity;

    await defaultSchema.validateAsync(school);

    const result = await schoolRepository.postSchool(school);

    return res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function postStudent(req: Request, res: Response) {
  try {
    const student = req.body as StudentSchema;

    await studentSchema.validateAsync(student);

    const result = await schoolRepository.postStudent(student);

    return res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function postCourse(req: Request, res: Response) {
  try {
    const course = req.body as CourseSchema;

    await defaultSchema.validateAsync(course);

    const result = await schoolRepository.postCourse(course);

    return res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function deleteStudent(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);

    const userFounded = await schoolRepository.findOneStudent(id);
    if (!userFounded) {
      return res.status(404).send("User not founded");
    }

    const result = await schoolRepository.deleteStudent(id);

    return res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function deleteSchool(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const founded = await schoolRepository.findOneSchool(id);
    if (!founded) {
      return res.status(404).send("School not founded");
    }

    const result = await schoolRepository.deleteSchool(id);

    res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function deleteCourse(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const founded = await schoolRepository.findOneCourse(id);
    if (!founded) {
      return res.status(404).send("Course not founded");
    }

    const result = await schoolRepository.deleteCourse(id);
    res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function updateStudent(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const data = req.body as StudentSchema;

    await studentSchema.validateAsync(data);

    const foundedUser = await schoolRepository.findOneStudent(id);
    if (!foundedUser) {
      return res.status(404).send("Not founded");
    }

    const result = await schoolRepository.updateStudent(id, data);

    res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function updateCourse(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const data = req.body as CourseSchema;

    await defaultSchema.validateAsync(data);

    const courseFounded = await schoolRepository.findOneCourse(id);
    if (!courseFounded) {
      return res.status(404).send("couse not founded");
    }

    const result = await schoolRepository.updateCourse(id, data);
    res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export async function updateSchool(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const data = req.body as SchoolSchema;

    await defaultSchema.validateAsync(data);

    const founded = await schoolRepository.findOneSchool(id);
    if (!founded) {
      return res.status(404).send("School not founded");
    }

    const result = await schoolRepository.updateSchool(id, data);

    res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
}
