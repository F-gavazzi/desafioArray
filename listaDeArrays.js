
/*primeiro exercicio*/
let exercicio1 = [
    1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3
];
exercicio1.sort(function(a, b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log("exercicio 1 =>" + exercicio1);

/*segundo exercicio*/
let exercicio2 = [
    1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3
];
exercicio2.sort(function(a, b){
    if(a < b) return 1;
    if(a > b) return -1;
    return 0;
});
console.log("exercicio 2 =>" + exercicio2);


/*terceiro e quarto exercicio*/
const exercicio3 = [
    1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3
    ];
    
    const min= Math.min(...exercicio3);
    const max= Math.max(...exercicio3);
    
    console.log("exercicio 3 =>" + min);
    console.log("exercicio 4 =>" + max);

    /*quinto exercicio*/
    const exercicio4 = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3];
    exercicio4.splice(4,1);
    console.log("exercicio 5 =>" + exercicio4);

    /*sexto exercicio*/
 let exercicio5 = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3];

function changePosition(numbers, para, de) {
    numbers.splice(de, 0, numbers.splice(para, 1)[0]);
    return numbers;
};

exercicio5 = changePosition(exercicio5
, 6, 1);
console.log("exercicio 6 =>" +exercicio5);

/*setimo exercicio*/
let  exercicio6 = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3];

exercicio6.push(100);

function changePosition(numbers, from, to) {
    numbers.splice(to, 0, numbers.splice(from, 1)[0]);
    return numbers;
};

exercicio6 = changePosition(exercicio6
, exercicio6
.length -1, 2);
console.log("exercicio 7 =>" + exercicio6);

/*oitavo exercicio*/
let array8 = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3];

const exercicio7 = array8.filter(function(od, i){
    return array8.indexOf(od)===i; 
})
console.log("exercicio 8 =>" +exercicio7);

/*nono exercicio*/
let array9 = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3],
 exercicio8 = []
, corte = 9;

for (var i = 0; i < array9.length; i = i + corte) {
exercicio8.push(array9.slice(i, i + corte));
}

console.log("exercicio 9 =>" +exercicio8);

/*decimo exercicio*/
let array10 = [1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3]
let  exercicio9 = array10.slice(7, 10);
console.log("exercicio 10 =>" +exercicio9);
