function calcNum (num1, num2, num3){
    console.log('num 1 =', num1);
    console.log('num 2 =', num2);
    num3()
        
}

calcNum(12, 14, anOther);

function anOther(){
    console.log('this is other');
}