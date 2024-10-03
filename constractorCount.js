function counter(){
    this.count=0;
    this.increment=()=>{
        this.count++;
    }
    this.decrement=()=>{
        this.count--;
    }
    this.reset=()=>{
        this.count=0;
    }
    this.display=()=>{
        console.log(`Count: ${this.count}`)
    }
}

let counter1=new counter();
console.log(counter1)
counter1.increment()
counter1.display()
counter1.decrement()
counter1.display()
counter1.reset()
counter1.display()

console.log(counter1 instanceof counter)
console.log(counter1 instanceof String)