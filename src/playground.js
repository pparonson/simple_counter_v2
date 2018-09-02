const R = require("ramda")

// const grades = [60, 55, 80, 90, 99, 92, 75, 72]
// // calc avg grade
// // how many in each grade range?
//
// // ((a, b) → a) → a → [b] → a
// const total = R.reduce(R.add, 0, grades)
// const avg = total / grades.length
// const letterGradeCount = R.reduce(groupByGrade, {}, grades)
//
// // helper fns
// function groupByGrade(acc, item) {
//   const {a = 0, b = 0, c = 0, d = 0, f = 0} = acc
//   if (item >= 90) {
//     return {...acc, a: a + 1}
//   } else if (item >= 80) {
//     return {...acc, b: b + 1}
//   } else if (item >= 70) {
//     return {...acc, c: c + 1}
//   } else if (item >= 60) {
//     return {...acc, d: d + 1}
//   } else if (item < 60) {
//     return {...acc, f: f + 1}
//   } else {
//     // default case
//     return {...acc}
//   }
// }
//
// console.log(`Total: ${total}, Average: ${avg}`)
// console.log(JSON.stringify(letterGradeCount, null, 2));

// ____________________________________________________________________________

// const friends = ["nate", "jim", "scott", "dean"]
//
// // function greet(greeting, name) {
// //   return `${greeting} ${name}`
// // }
//
// // function greet(greeting) {
// //   return (name) => `${greeting} ${name}`
// // }
//
// const greet = R.curry( (greeting, name) => `${greeting} ${name}` )
//
// const greetFriends = R.map(greet("Hello"), friends)
//
// // console.log(greet("Hello")("Elle"));
// console.log(greetFriends);

// ____________________________________________________________________________

// const sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//
// // split the sentence
// // (String | RegExp) → String → [String]
// // const wordList = R.split(" ", sentence)
//
// // get the word count
// // [a] → Number
// // const wordCount = R.length(wordList)
//
// const result = R.compose(
//   R.length
//   , R.split(" ")
// )
//
// console.log(result(sentence));

// ____________________________________________________________________________
