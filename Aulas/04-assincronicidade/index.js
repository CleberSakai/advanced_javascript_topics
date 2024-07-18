function step02() {
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 02')
console.log('Passo 03')
console.log('Passo 04')

setTimeout(() => {
    console.log('passo 05') // Independente do tempo usado, ele vai ser usado por ultimo, ao menos nesse caso.
}, 2 * 1000)

console.log('Passo 06')