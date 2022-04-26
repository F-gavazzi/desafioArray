let array = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3],
 exercicio8 = []
, corte = 9;

for (var i = 0; i < array.length; i = i + corte) {
exercicio8.push(array.slice(i, i + corte));
}

console.log(exercicio8);