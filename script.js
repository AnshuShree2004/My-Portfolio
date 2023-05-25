let number1 = document.getElementById('number1')

let counter = 0;


setInterval(() => {
    if( counter === 67){
    clearInterval()
} else{
    counter += 1;
    number1.innerHTML = counter + '%';
}
},30)

let number2 = document.getElementById('number2')
let counter1 = 0;

setInterval(() => {
    if( counter1 === 54){
    clearInterval()
} else{
    counter1 += 1;
    number2.innerHTML = counter1 + '%';
}
},35)

let number3 = document.getElementById('number3')
let counter2 = 0;

setInterval(() => {
    if( counter2 === 59){
    clearInterval()
} else{
    counter2 += 1;
    number3.innerHTML = counter2 + '%';
}
},33)


let number4 = document.getElementById('number4')
let counter3 = 0;

setInterval(() => {
    if( counter3 === 55){
    clearInterval()
} else{
    counter3 += 1;
    number4.innerHTML = counter3 + '%';
}
},36)







