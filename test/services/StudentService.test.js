const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Test for StudentService", () => {

    const students = Reader.readJasonFile("students.json");

    test("1. Obtiene todos los estudiantes", () => {
        const studentsAll = StudentService.allStudents(students);
        expect(studentsAll.length).toBe(51);        
    }),     

    test("2. Obtiene los emails de los estudiantes con certificacion", () => {
        const studentFilter = StudentService.studentsWithCertification(students);
        expect(studentFilter.length).toBe(29);
    }),

    test("3. Obtiene los estudiantes con creditos mayores de 500", () => {
        const studentsFilter = StudentService.studentsByCreditsUp500(students);
        expect(studentsFilter.length).toBe(27);          
    });
   
});