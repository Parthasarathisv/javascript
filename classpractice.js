class book{
    constructor(title,author,price){
        this.title=title;
        this.author=author;
        this.price=price;
    }
    displayBook(){
        console.log(` Name of the Book: ${this.title} and the Author is ${this.author} and the price${this.price}`)
    }

    discount(){
        let discountamount=100;
        console.log(`After the dicount the price is ${(this.price-discountamount)}`)
    }
}

let book1=new book('book','author',2000)
book1.displayBook()
book1.discount()