// let a = "123tap13";
// // let b = Number(a);
// let b = parseInt(a);
// console.log(a);
// console.log(typeof a);
// console.log(b);
// console.log(typeof b);

// console.log('5' === 5)


// let day = 5;

// switch (userRole) {
//   case "admin":
//     console.log("Admin access granted")
//     break;
//   case "editor":
//     console.log("Editor access granted")
//     break;
//   case "student":
//     console.log("Student access granted")
//     break;
//   default:
//     console.log("Access denied")
// }

// switch (day) {
//   case 0:
//   case 6:
//     console.log("Happy Weekend")
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("Happy Weekdays")
//     break;
//   case 5:
//     console.log("TGIF!")
// }


// let i;
// let o;
// let row;

// for(i = 1; i <= 5; i++){

//   row = "";
//   for(o = 1; o <= 10; o++){
//     row = row + "*";
//   }
//   console.log(row);

// }

let i;
let o;
let row;
let n = 11;

// for(i = 0; i < n; i++){

//   row = "";
//   for(o = 0; o < n; o++){
//     if(o == 0 || o == n-1  || i == 0 || i == n-1 || o == Math.floor(n/2) || i == Math.floor(n/2) || 
//     i == o || i + o == n-1){

//       row = row + "*"

//     } else {

//       row = row + " "

//     }
//   }
//   console.log(row);

// }

for(i = 0; i < n; i++){

  row = "";
  for(o = 0; o < n; o++){
    if(o == 0 || o == n-1 || (o == i && i <= n/2) || (o + i == n-1 && i <= n/2)){

      row = row + "*"

    } else {

      row = row + " "

    }
  }
  console.log(row);

}



// for(i = 1; i <= 5; i++){
//   console.log("*");
// }