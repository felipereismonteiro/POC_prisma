import { prisma } from "../src/database/prisma.js";
import chalk from "chalk";

async function main() {
  async () => await prisma.school.createMany({
    data: [{ name: "gambarini" }, { name: "campesina" }, { name: "emest" }],
  });
  await prisma.courses.createMany({
    skipDuplicates: true,
    data: [
      { name: "quimica" },
      { name: "programacao" },
      { name: "engenharia" },
    ],
  });
  async () => await prisma.student.createMany({
    data: [
      { name: "Feliciano da Silva", school_id: 1 },
      { name: "Roberto afonso", school_id: 2 },
      { name: "Afonso padilha dos Santos", school_id: 3 },
    ],
  });
  async () => await prisma.registration.createMany({
    data: [
      { courses_id: 1, student_id: 1 },
      { courses_id: 2, student_id: 2 },
      { courses_id: 3, student_id: 3 },
    ],
  });
}

main()
  .then(() => {
    console.log(chalk.green("Deu bom!!!"));
    
  })
  .catch((e) => {
    console.log(chalk.red("Vish deu ruim por isso aqui " + e.message));
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
