function pow (x, y) {
    let _result = 1
    for (let i = 1; i <= y; i++) {
        _result *= x
    }
    console.log(_result)
}
pow(5,3)