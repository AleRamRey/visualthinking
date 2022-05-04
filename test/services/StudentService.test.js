const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Test for StudentService", () => {

    const students = Reader.readJasonFile("students.json");

    test("1. Obtiene todos los estudiantes", () => {
        const allStudents = StudentService.getAllStudents(students);
        expect(allStudents.length).toBe(50);        
    })//,     

    //test("2. Obtiene los emails de los estudiantes con certificacion",()=>{
    //    const amountExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
    //    expect(amountExplorers).toBe(5);        
    //}),

    //test("3. Obtiene los estudiantes con creditos mayor 500",()=>{
    //    const userNameExplorer = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
    //    expect(userNameExplorer[0]).toBe("ajolonauta1");        
    //});
   
});