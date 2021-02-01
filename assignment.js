// problem no-1
// kilometerToMeter function start from here

function kilometerToMeter(input) {
    var result = input * 1000;
    return result;
}
var total = kilometerToMeter(4);
console.log(total);

// kilometerToMeter function end here



// problem no 2
// budgetCalc function start from here

function budgetCalc(watch, phone, laptop) {
    budget = 0;
    if (watch >= 1 || phone >= 1 || laptop >= 1) {
        var watchResult = watch * 50;
        var phoneResult = phone * 100;
        var laptopResult = laptop * 500;
        budget = watchResult + phoneResult + laptopResult;
    }
    return budget;
}

var result = budgetCalc(1, 4, 1)
console.log(result)

// budgetCalc function here




// problem no-3
// hotelCost function start from here

function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var resultBeforeTeen = 10 * 100;
        var AfterTeen = days - 10;
        var resultAfterTeen = AfterTeen * 80;
        totalCost = resultAfterTeen + resultBeforeTeen;
    }
    else {
        var resultBeforeTeen = 10 * 100;
        var resultAfterTeen = 10 * 80;
        var afterTwenty = days - 20;
        var resultAfterTwenty = afterTwenty * 50;
        totalCost = resultBeforeTeen + resultAfterTeen + resultAfterTwenty;
    }
    return totalCost;
}
var result = hotelCost(30);
console.log(result)

// hotelCost function end here---





// problem no-4
// megafriend function start from  here

function megaFriend(nameOfFriends) {
    var initArray = 0;
    var bigName = [];
    for (var i = 0; i < nameOfFriends.length; i++) {
        var names = nameOfFriends[i].length;
        if (names > initArray) {
            var initArray = names;
            bigName = nameOfFriends[i];
        }
    }
    return bigName
}
var result = megaFriend(['jobayer', 'tomal', 'alifa', 'sanjidaa'])
console.log(result);

// megafriend function end here


