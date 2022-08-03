import Student from "./contruct.js";

export const operations={
  StudentList:[],
  
  create(id,name,roll,standard,section){
    const newStudent=new Student(id,name,roll,standard,section);
    
    this.StudentList.push(newStudent);
    console.log("Added Student",newStudent);
    return newStudent;
  }
}