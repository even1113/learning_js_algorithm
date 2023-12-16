/*
Input: "https://jsrun.net/new?key1=value1&key2=value2&key3=value3";
Output: {
key1:"value1",
key2:"value2"
}
*/

const input = "https://jsrun.net/new?key1=value1&key2=value2&key3=value3"


const format = (url) => {
  const obj = {}
  let index = url.indexOf('?')
  let newUrl = url.substring(index+1)
  if (index > 0) {
    const newArr = newUrl.split('&')
    newArr.forEach(item=>{
      const arr = item.split('=')
      obj[arr[0]] = arr[1]
    })
  }
  return obj
}
console.log(format(input))

