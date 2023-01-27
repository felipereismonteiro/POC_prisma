/*
  Warnings:

  - You are about to drop the column `courses_id` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_courses_id_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "courses_id";

-- CreateTable
CREATE TABLE "_CoursesToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CoursesToStudent_AB_unique" ON "_CoursesToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_CoursesToStudent_B_index" ON "_CoursesToStudent"("B");

-- AddForeignKey
ALTER TABLE "_CoursesToStudent" ADD CONSTRAINT "_CoursesToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoursesToStudent" ADD CONSTRAINT "_CoursesToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
