
function Count() {
    return Math.ceil(Math.random() * 10)
}

let count = Count()

function checkProbabilityTheory (count) {
    let randomNumber
    let evenNumber = 0
    let oddNumber = 0

    for (let i =0; i < count; i++) {
        randomNumber = Math.random() * (1000 - 100 + 1) + 100
        randomNumber = Math.round(randomNumber)

            if (randomNumber % 2 == 0) {
                evenNumber++
            } else {
                oddNumber++
            }
    }   

    console.log('Amount of generated Numbers: ', count)
    console.log('--------------')
    console.log('')

    console.log('Amount of Even Numbers: ', evenNumber)
    console.log('Amount of Odd Numbers: ', oddNumber)
    console.log('--------------')
    console.log('')

    const evenPersentage = Math.round(evenNumber/count*100)
    const oddPersentage = Math.round(oddNumber/count*100)
    console.log(`Even to Odd numbers persentage is ${evenPersentage}% to ${oddPersentage}%`)
 
}

checkProbabilityTheory(count)
