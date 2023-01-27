/*
  Warnings:

  - You are about to drop the `_courses_to_student` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courses_id` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_courses_to_student" DROP CONSTRAINT "_courses_to_student_A_fkey";

-- DropForeignKey
ALTER TABLE "_courses_to_student" DROP CONSTRAINT "_courses_to_student_B_fkey";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "courses_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_courses_to_student";

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_courses_id_fkey" FOREIGN KEY ("courses_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
