const StudentController = require("./../../lib/controllers/StudentController");

describe("Test for StudentController", () => {

    test("1. Obtiene todos los estudiantes", () => {
        const students = StudentController.getAllStudents();
        expect(students.length).toBe(50);
    }),

    test("2. Obtiene los emails de los estudiantes con certificacion", () => {
        const students = StudentController.getStudentsWithCertificacion();
        expect(students.length).toBe(29);
    }),

    test("3. Obtiene los estudiantes con creditos mayores de 500",()=>{
        const students = StudentController.getStudentsWithMoreThan500Credits();
        expect(students.length).toBe(27);        
    })

});
