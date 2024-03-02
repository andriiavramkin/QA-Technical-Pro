const yearReturned = prompt('В якому році ти народився/-лася?')
const year = Number(yearReturned)

const currentYear = new Date().getFullYear()
const age = currentYear - year

if (isNaN(yearReturned)) {
        console.log(`\'${yearReturned}\' is not a number. Please enter a number.`)
    } else if (yearReturned < 1900 || yearReturned > currentYear){
        console.log(`\'${year}\' is outside the valid range for this program. Please enter the year in beetween 1900 and ${currentYear}`)
    } else if (!Number.isInteger(year)) {
        console.log(`\'${year}\' should be an integer number. Please try again.`)
    } else { 
        let result
            switch (age % 10) {
                case 1: 
                    result = `Тобі ${age} рік`
                break;
                case 2:
                case 3:
                case 4: 
                    result = `Тобі ${age} роки`
                break;
                default:
                    result = `Тобі ${age} років`
            }
        console.log(result)
    }


