function drawTriangle (heigh, symbol) {
    for ( let i = 1; i <= heigh; i++) {
        let triangle = ''
        for (let j = 0; j < i; j++) {
            triangle += symbol
        }
        console.log(triangle)
    }
}

drawTriangle(5, '*')