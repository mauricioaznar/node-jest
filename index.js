function formateo(numero){
    const arrNumber = numero.toString().split("")
    const l1 = arrNumber.length
    let rest = l1
    for (let i = 0; i < Math.floor(l1/3);i++){
        arrNumber.splice(rest-3,0,",")
        rest = arrNumber.indexOf(",")
    }
    if(arrNumber.indexOf(",")===0){
        arrNumber.shift()
    }
    return arrNumber.join("")

}

const numero = 401561567575757

console.log(formateo(numero))
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)
