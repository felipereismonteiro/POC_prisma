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
CREATE TABLE "_courses_to_student" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_courses_to_student_AB_unique" ON "_courses_to_student"("A", "B");

-- CreateIndex
CREATE INDEX "_courses_to_student_B_index" ON "_courses_to_student"("B");

-- AddForeignKey
ALTER TABLE "_courses_to_student" ADD CONSTRAINT "_courses_to_student_A_fkey" FOREIGN KEY ("A") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_courses_to_student" ADD CONSTRAINT "_courses_to_student_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
