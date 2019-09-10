// function noom(array){
//   let streak = 0
//   let longestStreak = 0;
//   for (let i = 0; i < array.length; i++){
//     let budget = array[i][0];
//     let totalCal = array[i][1] + array[i][2] + array[i][3];
//     if (budget > totalCal){
//       streak++
//     } else {
//       streak = 0
//     }
//     console.log(streak, longestStreak)
//     if(longestStreak < streak) {
//       longestStreak = streak
//     }
//   }
//   return longestStreak
// }

// noom([[1620,400,800,600],
// [1620,350,650,500],
// [1650,350,650,700],
// [1650,300,600,500],
// [1600,300,650,500],
// [1600,300,600,450],
// [1750,400,700,600],
// [1650,400,750,600],
// ])

//4

function noom(array){
  array = array.split('\n');
  console.log(array, array.length)
  array = array.map(elem => elem.split(','));
  console.log(array, array.length)

 let streak = 0;
 let longestStreak = 0;
 for (let i = 0; i < array.length; i++){
   let budget = +array[i][0];

   let totalCal = Number(array[i][1]) + Number(array[i][2]) + Number(array[i][3]);
   if (budget >= totalCal){
     streak++;
   } else {
     streak = 0;
   }

   if(longestStreak < streak) {
     longestStreak = streak;
   }
 }
 // process.stdout.write(""+longestStreak+"\n");
 return longestStreak
}

noom('1620,400,800,600\n1620,350,650,500\n1650,350,650,700\n1650,300,600,500\n1600,300,650,500\n1600,300,600,450\n1750,400,700,600\n1650,400,750,600')

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// var input = "";
// process.stdin.on("data", function (chunk) {
//     input += chunk;
// });
// process.stdin.on("end", function () {
//     // now we can read/parse input

// });



// function noom(array){
//    array = array.split('\n');
//    array = array.map(elem => elem.split(','));

//   let streak = 0;
//   let longestStreak = 0;
//   for (let i = 0; i < array.length; i++){
//     let budget = +array[i][0];

//     let totalCal = Number(array[i][1]) + Number(array[i][2]) + Number(array[i][3]);
//     if (budget >= totalCal){
//       streak++;
//     } else {
//       streak = 0;
//     }

//     if(longestStreak < streak) {
//       longestStreak = streak;
//     }
//   }
//   // process.stdout.write(""+longestStreak+"\n");
// }
