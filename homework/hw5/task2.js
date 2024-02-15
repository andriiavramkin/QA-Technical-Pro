//solution 1
let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        sum += i ;
    } 
}
console.log(sum)
console.log('-------------------------')

// solution 2
let num = 1
let sum2 = 0

    do {
        if (num % 3 == 0) {
            sum2 += num
        }
        num++;
    } while (num <= 100)

console.log(sum2) 
console.log('-------------------------')


// solution 3
const array = []
let sum3 = 0

for (let i = 1; i <= 100; i++) {
    array.push(i)

    if (i % 3 == 0) {
        sum3 += i
    }
}

console.log(sum3)
console.log('-------------------------')
