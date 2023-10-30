// เพื่อนคนที่ 1
// const nums = [5,10,1000,2,3,50]
 
// nums.sort(
//     (a,b) =>{
//         if(a > b){
//             return 1
           
//         }
//         else if(a<b){
//             return -1
//         }
//         else{
//             return 0
//         }
//     }
// )
// console.log(nums)

const animals = ['ant', 'dogs', 'cats', 'Bird', 'Birds']
animals.sort()
console.log(animals)
const nums = [5, 1, 10, 1000, 2, 3, 50]
nums.sort()
console.log(nums) //[ 1, 10, 1000, 2,  3,  5, 50]

//Homework
const persons = [
    { id: 1, fullname: 'Susan Jo' },
    { id: 3, fullname: 'John Lee' },
    { id: 2, fullname: 'ann Smith' }
  ]

  //return sorted array by fullname (ascending order and ignore case)
  //[ { id: 2, fullname: 'ann Smith' },   { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },]

//friend1
// const sortignorecase = person.sort((a, b) => {
//   if (a.fullname.toUpperCase() < b.fullname.toUpperCase()) {
//       return -1
//   } else if (a.fullname.toUpperCase() > b.fullname.toUpperCase()) {
//       return 1
//   } else return 0
// })

// console.log(sortignorecase)

//friend2
persons.sort((a, b) => {  
  return a.fullname.localeCompare(b.fullname)
  }
)





