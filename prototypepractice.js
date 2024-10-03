function book(title,author,price){
    this.title=title;
    this.author=author;
    this.price=price;

    this.display=()=>{
        console.log(` Title of the book is ${this.title} and the author:${this.author} and the price ${this.price}`)
    }
    book.prototype.calculatediscount=function(discountrate){
        let discountprice=this.price-(this.price*discountrate/100)
        console.log(`price after dicount ${discountrate}% is ${this.discountprice}`)
    }
}

let book1=new book('java','jamesh gosleing',2000)
book1.display()
book1.calculatediscount(10) 

//here you can change the function into on class ..just click the three dot in the functoin.