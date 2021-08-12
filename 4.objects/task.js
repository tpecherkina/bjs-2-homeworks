function Student(name, gender, age) {
  this.age = age,
  this.gender = gender,
  this.name = name

}

let student1 = new Student("Tanya", 'female', 32);
let student2 = new Student("Masha", "female", 24);
let student3 = new Student("Piotr", "male", 38);

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
  }
  
 Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){ 
   this.marks = [mark]
    } else {
       this.marks.push(mark)
    }
 }
 
Student.prototype.addMarks = function (...rest) {
  this.marks = [...rest];
}


Student.prototype.getAverage = function () {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < this.marks.length; i++) {
 sum += this.marks[i];
}
  let average = sum / this.marks.length;
  
  return average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
    this.excluded = reason;
}


