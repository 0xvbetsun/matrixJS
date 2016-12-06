/**********1-st task**********/
/*
console.log('%c 1-st task', 'background: green; color: white; display: block;');
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
*/

/**********2-nd task**********/
console.log('%c 2-nd task', 'background: green; color: white; display: block;');
// Creating array
var arr = [];
function startCreate() {
    var startCreateArr = new Date();
    for (var i = 0; i < 1000000; i++) {
        arr.push(Math.floor(Math.random() * 1000) + 1);
    }
    var endCreateArr = new Date();
    var arrSlc = arr.slice(0, 100);
    var arrInput = document.getElementsByClassName("arrInp")[0];
    var createTime = document.getElementsByClassName("arrTime")[0];
    arrInput.innerHTML = "Перші 100 членів масиву: <br>[" + arrSlc.join("; ") + "]";
    createTime.innerHTML = "Час створення: " + (endCreateArr - startCreateArr) + " ms";
    console.log(arr);
    console.log({"Час створення:": endCreateArr - startCreateArr + "ms"});
}
// function for normal array sorting
function startSortArr() {
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
//normal array sorting
    var startSort = new Date();
    var arrSort = arr.sort(compareNumeric);
    var endSort = new Date();
    var arrSlc = arr.slice(0, 100);
    var arrInput = document.getElementsByClassName("arrInp")[1];
    var createTime = document.getElementsByClassName("arrTime")[1];
    arrInput.innerHTML = "Перші 100 членів масиву: <br>[" + arrSlc.join("; ") + "]";
    createTime.innerHTML = "Час сортування: " + (endSort - startSort) + " ms";
    console.log( arrSort );
    console.log({"Час сортування:": endSort - startSort + "ms"});
}

//reverse array sorting
function reverseSort() {
    var startSortReverse = new Date();
    var arrSortReverse = arr.reverse();
    var endSortReverse = new Date();
    var arrSlc = arr.slice(0, 100);
    var arrInput = document.getElementsByClassName("arrInp")[2];
    var createTime = document.getElementsByClassName("arrTime")[2];
    arrInput.innerHTML = "Перші 100 членів масиву: <br>[" + arrSlc.join("; ") + "]";
    createTime.innerHTML = "Час зворотнього сортування: "+ (endSortReverse - startSortReverse) + " ms";
    console.log( arrSortReverse );
    console.log({"Час зворотнього сортування:": endSortReverse - startSortReverse + "ms"});
}


//sum of all elements in the array
function sumOfAll() {
    var result = arr.reduce(function (sum, current) {
        return sum + current;
    });
    var sumArr = document.getElementsByClassName("sum")[0];
    sumArr.innerHTML = "Сума всіх елементів масиву: " + result;
    console.log({"Сума всіх елементів масиву:": result });
}


/**********3-rd task**********/
console.log('%c 3-rd task', 'background: green; color: white; display: block;');
// Initial conditions
// var matrixA = [60, 80, 100];
var matrixA = [];
var matrixB = [];
var matrixC = [];

// console.log(plan);
function matrixACreate() {
    for (var i = 0; i < 3; i++) {
        var indexA = document.getElementsByName('indA')[i].value;
        var numA = parseInt(indexA);
        matrixA.push(numA);
        var planA = document.getElementById("supportPlan").rows[1 + i].cells;
        planA[5].innerHTML = numA;
    }

    console.log(matrixA);
}
function matrixBCreate() {
    for (var j = 0; j < 4; j++) {
        var indexB = document.getElementsByName('indB')[j].value;
        var numB = parseInt(indexB);
        matrixB.push(numB);
        var planB = document.getElementById("supportPlan").rows[4].cells;
        planB[1 + j].innerHTML = numB;
    }
    console.log(matrixB);
}
function matrixCCreate() {
    for (var i = 0; i < matrixA.length; i++) {
        var matrix = [];
        for (var j = matrixB.length * i; j < matrixB.length * i + matrixB.length; j++) {
            var indexC = document.getElementsByName('indC')[j].value;
            var numC = parseInt(indexC);
            matrix.push(numC);
            var planC = document.getElementById("supportPlan").rows[1 + i].cells;
            planC[1 + j - 4 * i].innerHTML = numC;
        }
        matrixC.push(matrix);
    }
    console.log(matrixC);
}

// Blank array
var matrixD = [];
function solvePlan() {
    for (var i = 0; i < matrixA.length; i++) {     //initialization rows
        matrixD.push([]);
        var planD = document.getElementById("supportPlan").rows[1 + i].cells;
        for (var j = 0; j < matrixB.length; j++) {  //initialization columns

            if (matrixA[i] >= matrixB[j]) {         //beginning of a solution
                matrixD[i][j] = matrixB[j];
                matrixA[i] = matrixA[i] - matrixB[j];
                planD[1 + j].innerHTML = matrixB[j];
                matrixB[j] = 0;


            } else if (matrixB[j] > matrixA[i]) {
                matrixD[i][j] = matrixA[i];
                matrixB[j] = matrixB[j] - matrixA[i];
                planD[1 + j].innerHTML = matrixA[i];
                matrixA[i] = 0;


            } else {
                matrixD[i][j] = 0;
                planD[1 + j].innerHTML = 0;
            }                                       //end solutions


            matrixD[i].push(matrixD[i][j]);       //array formalization
            matrixD[i].pop(matrixD[i][j]);        //cut off unnecessary part

        }
        console.log(matrixD[i]);                  //I leave it like this for better clarity
    }
}
