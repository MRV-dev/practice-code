// let a = 100;
// let b = 200;

// function add()
// {
//   let c;
//   c = a + b;
//   return c;
//   // console.log(c);
// }

// // add();
// let res = add();
// console.log(res);







// function calcGrade(studentMarks, maxMarks){
//   let percentage = (studentMarks / maxMarks) * 100;
//   let grade;

//   if(percentage >= 90)
//   {
//     studentGrade = 'A';
//   }
//   else if(percentage >= 80)
//   {
//     studentGrade = 'B';
//   }
//   else if(percentage >= 70)
//   {
//     studentGrade = 'C';
//   }
//   else
//   {
//     studentGrade = 'F';
//   }

//   console.log(studentGrade);
// }

// calcGrade(68, 100);
// calcGrade(86, 100);


// Object literal
let s = {
  name: 'Drew',
  grade: 'A',
  age: 20,

  Coding : function(){
    console.log("Student can code....");
  },
  Singing : function(){
    console.log("Student can sing....");
  },
  Dancing : function(){
    console.log("Student can dance....");
  },
}

// console.log(s.name);
// console.log(s.age);

// s.Coding();
// s.Singing();
// s.Dancing();



// Object constructor
let gameCharacter = {
  name: 'Anton',
  health: 100,
  level: 1,

  takenDamage: function(damage){
    this.health -= damage;
    console.log(`Took ${damage} damage! Health: ${this.health}`);


    if(this.health <= 0){
      console.log(`You Died!`);
    }
    else if (this.health <= 20){
      this.health -= damage;
      console.log(`Player Health Critical: ${this.health}`);
    }
    else{
       console.log(`Good Condition!`);
    }
  },

  levelUp: function(){
    this.level += 1;
    console.log(`player leveled up: ${this.level}`);
  },
}

gameCharacter.takenDamage(0);
gameCharacter.levelUp();