function coprimes(n){
    const Factors = function(num){
        let arr = []
        for(let i = 2; i <= num; i++ ){
            if(num % i == 0){
                arr.push(i)
            }
        }
        return arr
    }

    const isCoprime = (a,b) => {
        for(let i = 0; i < a.length; i++){
            for(let k = 0; k < b.length; k++){
                if(a[i] == b[k]){
                    return false
                }
            }
        }
        return true
    }

    let result = [1]
    let nFactors = Factors(n)

    for(let i = 2; i <= n; i++){
        let coprime = Factors(i)
        isCoprime(nFactors,coprime) == true ? result.push(i) : result
    }

    return result;
    };

console.log(coprimes(2))
console.log(coprimes(3))
console.log(coprimes(6))
console.log(coprimes(10))
