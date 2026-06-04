let a = 100;
let b = 200;

function add()
{
  let c;
  c = a + b;
  return c;
  // console.log(c);
}

// add();
let res = add();
console.log(res);







function calcGrade(studentMarks, maxMarks){
  let percentage = (studentMarks / maxMarks) * 100;
  let grade;

  if(percentage >= 90)
  {
    studentGrade = 'A';
  }
  else if(percentage >= 80)
  {
    studentGrade = 'B';
  }
  else if(percentage >= 70)
  {
    studentGrade = 'C';
  }
  else
  {
    studentGrade = 'F';
  }

  console.log(studentGrade);
}

calcGrade(68, 100);
calcGrade(86, 100);