const fruits = ['apple', 'mango', 'orange', 'pineapple']
// return boolean to check whether all fruits  start with vowel characters [a,e,i,o,u]

// เพื่อนคนที่1
console.log(fruits.every(fruit => {
    console.log(fruit[0])
    return ['a', 'e', 'i', 'o', 'u'].includes(fruit[0].toLowerCase())

}))

// เพื่อนคนที่ 2
let check = ignoreFruits.every(
    (n) =>
      n.toLowerCase().startsWith('a') ||
      n.toLowerCase().startsWith('e') ||
      n.toLowerCase().startsWith('i') ||
      n.toLowerCase().startsWith('o') ||
      n.toLowerCase().startsWith('u')
  )

  // เพื่อนคนที่ 3
  const isStartWithVowel = fruits.every((fruit) => {
    for (vowel of ['a', 'e', 'i', 'o', 'u']) {
      if (fruit.toLowerCase().startsWith(vowel)) {
        return true
      }
    }
    return false
  })
   
  console.log(isStartWithVowel)

// concat with the first character of all fruits
'amop'








