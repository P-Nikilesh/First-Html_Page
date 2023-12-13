// const celsiusToFahrenhiet=(temp)=>{
//     return (temp * 9 / 5) + 32
// }
// console.log(celsiusToFahrenhiet(100))




// const celsiusToFahrenhiet = (temp) => {
//     const newArr = temp.map(d => {
//         return {
//             c: d,
//             f: (d * 9 / 5) + 32
//         }
//     })
//     return newArr
// }

// console.log(celsiusToFahrenhiet([0, 100]))


//
// const factorial = (num) => {
//     if (num === 0) {
//         return 1;
//     } else {
//         return (num * factorial(num - 1))
//     }
// }

// console.log(factorial(5));

const input =document.getElementById('input')
const button =document.getElementById('but-1')
const para=document.getElementById('p1')
let text=" "

input.addEventListener('change',(e)=>{
    text=e.target.value
})

button.addEventListener('click',()=>{
    para.innerText=`Entered text:${text}`
})