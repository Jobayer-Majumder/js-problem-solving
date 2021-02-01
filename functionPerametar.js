function getSum(num1 = 5, num2 = 5){
    return num1 + num2;

}
// const result = getSum();
// console.log(result);

// arrow function 

// const getMassage = name => console.log(`${name} is a good boy`)

// getMassage('justin timber')

const getFactorial = (num) => {
    let initNum = 1;
    for(let i = 1; i < num; i++){
        initNum  =  i * initNum;
    }
    return initNum
}
const total = getFactorial(4)
console.log(total)

