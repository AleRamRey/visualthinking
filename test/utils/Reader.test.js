const Reader = require("../../lib/utils/Reader");

describe("Prueba archivo Reader", () => {

    test("1. Total de estudiantes", () => {
        const students = Reader.readJasonFile("students.json");
        expect(students.length).toBe(15);       
    });
});