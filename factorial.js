
let i = 1;
function factorial(i){
    if(i === 1){
        return 1;
    }
    return i* factorial(i-1)
}
const result = factorial(7);
console.log(result);