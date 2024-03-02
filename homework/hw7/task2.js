var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн",

    price() {
        let sum = 0
        for (const key in this) {
            if (Object.hasOwnProperty.call(this, key)) {
                if (typeof this[key] === 'string') {
                    const price = parseFloat(this[key])
                    sum += price
                }
            }
        }
        return sum
    },

    minPrice() {
        let minPrice = Infinity
        for (const key in this) {
            if (Object.hasOwnProperty.call(this, key)) {
                if (typeof this[key] === 'string') {
                    const price = parseFloat(this[key])
                    if (price < minPrice) {
                        minPrice = price;
                    }
                }
            }
        }
        return minPrice
    },

    maxPrice() {
        let maxPrice = -Infinity
        for (const key in this) {
            if (Object.hasOwnProperty.call(this, key)) {
                if (typeof this[key] === 'string') {
                    const price = parseFloat(this[key])
                        if (price > maxPrice) {
                            maxPrice = price;
                        }
                }
            }
        }
        return maxPrice;
    }
}

console.log(services.price())
services['Розбити скло'] = "200 грн"
console.log(services.price())
console.log('------------------')

console.log(services.minPrice())
console.log(services.maxPrice())