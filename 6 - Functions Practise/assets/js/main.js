// function areaOfCircle(radius) {
//     return 3 * radius * radius
// }
// console.log(areaOfCircle(prompt("Radiusu daxil et")));

// function task2(number) {
//     if (number >= 0) {
//         var say = 1;
//         while(number > 9){
//             var tek = number % 10;
//             number = (number-tek) / 10;
//             say++;
//         }
//         console.log(say);
//     }
//     else{
//         console.log("Wrong input");
//     }
// }
// task2(0)


//57 -> elli yeddi
//1235 -> min iki yuz otuz bes

// function findMin(arr){
//     var min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//     }
//     return min;
// }

// console.log(findMin([1,-2,5,8,9,-7,66]));

// function sumEvenIndex(arr) {
//     var sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             sum += arr[i]
//         }
//     }
//     return sum;
// }
// alert(sumEvenIndex([1,2,3,4,5]))

function sumMinOddMaxEven(arr){
    var min = arr[1];
    var max = arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (i % 2 == 0) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        else{
            if (arr[i] < min) {
                min=arr[i];   
            }
        }
    }
    return min+max;
}
alert(sumMinOddMaxEven([0,4,12,-2,4]))