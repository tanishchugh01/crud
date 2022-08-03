import Student from "./contruct.js";

export const operations = {
  StudentList: [],

  create(id, name, roll, standard, section) {
    const newStudent = new Student(id, name, roll, standard, section);

    this.StudentList.push(newStudent);
    return newStudent;
  },

  delete(id) {
    this.StudentList=this.StudentList.filter((Student) => Student.id !== id);
  },
  
  edit(id){
    return this.StudentList.find(student=>student.id===id);
  },
  
  update(id, name, roll, standard, section){
    const student=this.StudentList.find(student=>student.id===id);
    
    student.name=name;
    student.roll=roll;
    student.standard=standard;
    student.section=section;
    
    return this.StudentList;
  }
};
