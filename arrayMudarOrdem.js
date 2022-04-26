let numbers = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3];

function changePosition(numbers, para, de) {
    numbers.splice(de, 0, numbers.splice(para, 1)[0]);
    return numbers;
};

numbers = changePosition(numbers, 6, 1);
console.log(numbers);