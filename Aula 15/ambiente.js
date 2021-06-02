let num =[5,8,9,3]
num.push(1)
num.sort()
console.log(num)
console.log (`Nosso vetor tem ${num.length} elementos `)
console.log (`O primeiro elemento do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
