//Fatorial 5! = 5 x 4 x 3 x 2 x 1
function fatorial(n) {
    var fat = 1
    for(var c = n; c > 1; c-= 1) {
        fat = fat * c
    }
    return fat
}
console.log(`O fatorial de 5 é ${fatorial(5)}.`)