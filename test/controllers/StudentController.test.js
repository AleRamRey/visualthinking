const StudentController = require("./../../lib/controllers/StudentController");

describe("Test for StudentController", () => {

    const students = Reader.readJasonFile("students.json");

    test("1. Obtiene todos los estudiantes", () => {
        const studentsAll = StudentController.getAllStudents(students);
        expect(studentsAll.length).toBe(50);
    })

});