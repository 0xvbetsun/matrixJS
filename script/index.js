/**********1-st task**********/
/*console.log('%c 1-st task', 'background: green; color: white; display: block;');
var arr1 = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7];

//forEach
arr1.forEach(function(item, i, arr) {
    console.log( i + ": " + item + " (array:" + arr + ")" );
});

//filter
var negativeArr = arr1.filter(function(number) {
    return number < 0;
});
console.log( negativeArr );

//map
var doubles = arr1.map(function(num) {
    return num * 2;
});
console.log( doubles );

//every/some
function isPositive(number) {
    return number > 0;
}
console.log( arr1.every(isPositive) );
console.log( arr1.some(isPositive) );

//reduce
var result1 = arr1.reduce(function(sum, current) {
    return sum + current;
}, 0);
console.log( result1 );

/!**********2-nd task**********!/
console.log('%c 2-nd task', 'background: green; color: white; display: block;');
// Creating array
var arr = [];

var startCreateArr = new Date();
for (var i = 0; i < 1000000; i++) {
    arr.push(Math.floor(Math.random() * 1000) + 1);
}
console.log( arr );
var endCreateArr = new Date();

// function for normal array sorting
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
//normal array sorting
var startSort = new Date();
var arrSort = arr.sort(compareNumeric);
console.log( arrSort );
var endSort = new Date();

//reverse array sorting
var startSortReverse = new Date();
var arrSortReverse = arr.reverse();
console.log( arrSortReverse );
var endSortReverse = new Date();

//sum of all elements in the array
var result = arr.reduce(function (sum, current) {
    return sum + current;
});

console.log({
    "Сума всіх елементів масиву:": result,
    "Час створення:": endCreateArr - startCreateArr + "ms",
    "Час сортування:": endSort - startSort + "ms",
    "Час зворотнього сортування:": endSortReverse - startSortReverse + "ms"
});*/

/**********3-rd task**********/
console.log('%c 3-rd task', 'background: green; color: white; display: block;');
// Initial conditions
// var matrixA = [60, 80, 100];

function matrixACreate(){
    var matrixA = [];
    for (var i = 0; i < 3; i++){
        var indexA = document.getElementsByName('indA')[i].value;
        var numA = parseInt(indexA);
        matrixA.push(numA);
    }
    console.log(matrixA);
}
function matrixBCreate() {
    var matrixB = [];
    for (var j = 0; j < 4; j++){
        var indexB = document.getElementsByName('indB')[j].value;
        var numB = parseInt(indexB);
        matrixB.push(numB);
    }
    console.log(matrixB);
}
/*

var matrixB = [40, 60, 80, 60];
var matrixC = [ [1, 3, 4, 2],
                [4, 5, 8, 3],
                [2, 3, 6, 7] ];

// Blank array
var matrixD =[];

for (var i = 0; i < matrixA.length; i++) {     //initialization rows
    matrixD.push( [] );

    for (var j = 0; j < matrixB.length; j++) {  //initialization columns

        if (matrixA[i] >= matrixB[j]) {         //beginning of a solution
            matrixD[i][j] =  matrixB[j];
            matrixA[i] = matrixA[i] - matrixB[j];
            matrixB[j] = 0;

        } else if (matrixB[j] > matrixA[i]){
            matrixD[i][j] =  matrixA[i];
            matrixB[j] = matrixB[j] - matrixA[i];
            matrixA[i] = 0;

        } else{
            matrixD[i][j] = 0;
        }                                       //end solutions
        matrixD[i].push( matrixD[i][j] );       //array formalization
        matrixD[i].pop( matrixD[i][j] );        //cut off unnecessary part
    }
    console.log( matrixD[i] );                  //I leave it like this for better clarity
}
*/
