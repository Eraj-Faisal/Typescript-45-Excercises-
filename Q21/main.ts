//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//create an typescript object

interface itCourse {
    courseName: string;
    location: string;
    OnsiteStudents: number;

}

let itCourse = {
    courseName : "TypeScript and JavaScript",
    location : "Governer Sindh House",
    OnsiteStudents : 50000

}
console.log(itCourse);