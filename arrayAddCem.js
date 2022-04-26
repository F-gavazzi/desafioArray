let  exercicio6 = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3];

exercicio6.push(100);

function changePosition(numbers, from, to) {
    numbers.splice(to, 0, numbers.splice(from, 1)[0]);
    return numbers;
};

exercicio6 = changePosition(exercicio6
, exercicio6
.length -1, 2);
console.log(exercicio6);

