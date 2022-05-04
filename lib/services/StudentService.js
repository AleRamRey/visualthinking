class StudentService{

    static getAllStudents(students){
        const allStudents = getAllStudents();
        return allStudents;
    }

    //static getAmountOfExplorersByMission(explorers, mission){
    //    const explorersByMission = ExplorerService.filterByMission(explorers, mission);
    //    return explorersByMission.length;
    //}

    //static getExplorersUsernamesByMission(explorers, mission){
    //    const explorersByMission = ExplorerService.filterByMission(explorers, mission);
    //    const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
    //    return explorersUsernames;
    //}
}

module.exports = StudentService;