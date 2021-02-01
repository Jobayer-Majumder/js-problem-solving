// var nums = [10, 15, 20, 15, 16, 10, 30];
// var calc = [];
// for(let i = 0; i < nums.length; i++){
//     var element = nums[i];
//     var index = calc.indexOf(element);
//     if(index == -1){
//         calc.push(element);
//     }
// }
// console.log(calc);


function findDuplicate(nums){
    let calc = [];
    for(let i = 0; i < nums.length; i++){
        let input = nums[i];
        let index = calc.indexOf(input);
        if(index == -1){
            calc.push(input);
        }
    }
    return calc;
}
const result = findDuplicate([10,20,13,15,10,15]);
console.log(result);




