
// // array example
// const arr = [1, false, [3,4], 'hello']
  
// console.log(arr[1])


// const dataToLookup = `city`

// const person = {
//     name: `jacob`,
//     city: `chicago`,
//     neighborhood: `Elmwood Park`
// }
// // dot notation example
// console.log(person.name)

// console.log(person['name'])
// // console.log(person[name]) = reference error due to no quotes

// console.log(person[dataToLookup])



const arr = [10, 20, 30]

arr.forEach(function(num){
    console.log(num)
})

arr.forEach(printNum)

function printNum(num) {
    console.log(num)
}