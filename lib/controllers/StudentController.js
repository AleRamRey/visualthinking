const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

class StudentController {
    
    static getAllStudents(){
        const students = Reader.readJasonFile("students.json");    
        return students;
    }

    static getStudentsWithCertificacion(){
        const students = Reader.readJasonFile("students.json");
        return StudentService.studentsWithCertification(students);
    }

    static getStudentsWithMoreThan500Credits(){
        const students = Reader.readJasonFile("students.json");
        return StudentService.studentsByCreditsUp500(students);
    }

}

module.exports = StudentController;