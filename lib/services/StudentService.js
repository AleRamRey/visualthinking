class StudentService{

    static allStudents(students){
        return students;
    }

    static studentsWithCertification(students){
        const studentsFiltered = students.filter((student) => student.haveCertification === true);        
        const studentMails = studentsFiltered.map((student) => student.email);
        return studentMails;
    }

    static studentsByCreditsUp500(students){
        const studentsFiltered = students.filter((student) => student.credits > 500);
        return studentsFiltered;
    }
}

module.exports = StudentService;