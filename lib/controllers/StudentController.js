const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

class StudentController {
    
    static getAllStudents(){
        const students = Reader.readJasonFile("students.json");    
        return students;
    }

    static getStudentsWithCertificacion(){
        const partners = Reader.readJsonFile("students.json");
        return StudentService.studentsWithCertification(partners);
    }

    static getStudentsWithMoreThan500Credits(){
        const explorers = Reader.readJsonFile("students.json");
        return StudentService.studentsByCreditsUp500(explorers);
    }

}

module.exports = StudentController;