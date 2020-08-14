//feetToMile conversion

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
// var result = feetToMile(42235);
// console.log(result);

//woodCalculator
function woodCalculator(chair, table, bed){
    var woodChair = chair *1;
    var woodTable = table * 3;
    var woodBed = bed * 5;
    var woodTotal = woodChair + woodTable + woodBed;
    return woodTotal;

}
// var result = woodCalculator(15, 10, 10);
// console.log(result);

//tinyFriend

function tinyFriend(name){
    var smallestName = name[0];
    for(var i = 0; i < name.length; i++){
        var elements = name[i];
        if(elements.length < smallestName.length){
            smallestName = elements;
        } 
    }
    return smallestName;
}
// var friendName = ["Mazharul", "Dk", "Sabbir", "Rommon", "Joy"];
// var result = tinyFriend(friendName);
// console.log(result);

