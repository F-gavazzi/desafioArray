let numbers = [
    1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3
];
numbers.sort(function(a, b){
    if(a < b) return 1;
    if(a > b) return -1;
    return 0;
});
console.log(numbers);