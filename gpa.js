// function calculate_gpa
// pass in student_grades
const calculateGPA = (studentGrades) => {
  // set grade_total to 0
  let gradeTotal = 0
  // for each grade in student_grades
  for (let i = 0; i < studentGrades.length; i++) {
    // if grade is not a 1, 2, 3, or 4
    if (studentGrades[i] < 1 || studentGrades[i] > 4) {
      // print "invalid grade"
      // iprint grade
      console.log('Invalid Grade: ' + studentGrades[i])
      // print "can't complete calculation"
      // exit function
      return "Can't complete calculation"
      // else add grade to grade_total
    } else {
      gradeTotal += studentGrades[i]
      // iendif
    }
    // endfor
  }
  // set gpa to grade_total / number of grades
  const gpa = gradeTotal / studentGrades.length
  // return gpa
  return gpa
  // endfunction
}

// set reggie_grades to 4, 4, 3, 4
const reggieGrades = [4, 4, -2, 4]
// print the results of calling calculate_gpa with reggie_grades -> 3.75
console.log(calculateGPA(reggieGrades))

// set dave_grades to 1, 2, 3, 2
const daveGrades = [1, 2, 3, 2]
// print the results of calling calculate_gpa with dave_grades -> 2
console.log(calculateGPA(daveGrades))
