const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

//console.log(students[0])

function total (sum, num) {
  sum = sum+num
  return sum

}

function getAverageStudentScore(students) {
  // Start coding here
  let result=[];

  for (let index=0; index<students.length; index++) {
    for (let key in students[index]) {
      if(key ===`score`){
        result.push(students[index][key])
      } 
    }
  }
  
  return result.reduce(total, 0)/students.length
  
}

//getAverageStudentScore(students); // Output: 87.5

console.log(getAverageStudentScore(students))