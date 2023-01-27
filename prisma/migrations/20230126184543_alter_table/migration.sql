/*
  Warnings:

  - You are about to drop the `_CoursesToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CoursesToStudent" DROP CONSTRAINT "_CoursesToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_CoursesToStudent" DROP CONSTRAINT "_CoursesToStudent_B_fkey";

-- DropTable
DROP TABLE "_CoursesToStudent";

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "courses_id" INTEGER NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_courses_id_fkey" FOREIGN KEY ("courses_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
