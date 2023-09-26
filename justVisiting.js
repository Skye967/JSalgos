

function gcd(a, b) {
    if (b === 0) return a;
    if (a === 0) return b;
    console.log(a,b)
    return gcd(a % b, b % a);
}

console.log(gcd(10,9))