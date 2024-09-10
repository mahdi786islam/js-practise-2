let i = 81;
let total = 0;
let sumOdd = 0;

function oddNumberSum(i){
    while( i <= 131 ){

    

        if( i % 2 === 1 ){
    
            sumOdd = sumOdd + i;
            console.log('sumOdd:', sumOdd)
            
        }
       
    
        
        i++;

    
    }
    return sumOdd;
}

const f = oddNumberSum(i);
console.log(f);