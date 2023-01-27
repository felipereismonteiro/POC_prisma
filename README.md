``
To run the project, follow the next steps:
``
- npm i - to install the packages 
- npm i prisma - to install prisma
- configure .env file as the example
- npx prisma migrate dev
- npm run prisma:seed

``
Routes
``
> GET
 
- /schools
- /students
- /courses

> POST

- /schools - { name: "school_name" }
- /students - { name: "student_name", school_id: number }
- /courses - { name: "course_name"}

> PUT

- /schools - { name: "school_name" }
- /students - { name: "student_name", school_id: number }
- /courses - { name: "course_name"}

> DELETE

- /schools/:id 
- /students/:id
- /courses/:id 

# No need of authorization