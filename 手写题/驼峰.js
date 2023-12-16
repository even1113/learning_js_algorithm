/*
Input: ("a_cv_ma","hump");
Output: "aCvMa"

Input: ("aCvMa","underline");
Output: "a_cv_ma"
*/

const input1 = "a_cv_ma"
const input2 = "aCvMa"
const type1 = "hump"
const type2 = "underline"
function work (str, type) {
  if (type === "hump") {
    return str.replace(/_([a-z]|[A-Z])/g, (...args) => {
      console.log(args)
      return args[1].toUpperCase()
    })
  } 
  if (type === "underline") {
    return str.replace(/([A-Z])/g, (...args) => {
      console.log(args)
      return '_' + args[0].toLowerCase()
    })
  }
  
}

console.log(work(input1, type1))
console.log(work(input2, type2))
