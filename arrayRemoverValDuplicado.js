let array = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3];

const exercicio7 = array.filter(function(od, i){
    return array.indexOf(od)===i; 
})
console.log(exercicio7);