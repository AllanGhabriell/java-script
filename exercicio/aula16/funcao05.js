function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        n * fatorial(n-1)
    }
}
console.log(fatorial(5))