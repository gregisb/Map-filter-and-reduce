const lista1 = [1, 3, 4, 5, 22, 105, 106, 38, 15, 19];
const lista2 = [5, 6, 4, 7, 8, 96, 101, 1205, 1506]

function filtraPares(arr) {
    return arr.filter((item) => {
        return item % 2 === 0;
    });    
};

console.log(filtraPares(lista1));
console.log(filtraPares(lista2));