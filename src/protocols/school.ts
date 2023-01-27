export type SchoolEntity = {
  id: number;
  name: string;
};

export type StudentEntity = {
    id: number,
    name: string,
    school_id: number
};

export type CourseEntity = {
    id: number, 
    name: string
}

export type SchoolSchema = Omit<SchoolEntity, "id">;
export type StudentSchema = Omit<StudentEntity, "id">;
export type CourseSchema = Omit<CourseEntity, "id">;