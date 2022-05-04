const StudentController = require("./../lib/controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "VisualThinking Api welcome!"});
});

app.get("/v1/students/", (request, response) => {
    const students = StudentController.getAllStudents();
    response.json(students);
});

app.get("/v1/students/emails/", (request, response) => {
    const students = StudentController.getStudentsWithCertificacion();
    response.json(students);
});

app.get("/v1/students/credits/", (request, response) => {
    const students = StudentController.getStudentsWithMoreThan500Credits();
    response.json(students);
});

app.listen(port, () => {
    console.log(`VisualThinking API in localhost:${port}`);
});