const services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн",
}

const newServices = {};
for (const key of Object.keys(services)) {
    newServices[key] = parseFloat(services[key])
}


   
services['Розбити скло'] = "200 грн"

console.log(services)
console.log(newServices)
