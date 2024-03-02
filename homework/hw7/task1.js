const book = {
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    year: 1994,
    tom: 1,
    isPresent: true,

    getInfo() {
        console.log(Object.entries(this))
    },


}

book.getInfo()
book.isSigned = false
book.getInfo()
