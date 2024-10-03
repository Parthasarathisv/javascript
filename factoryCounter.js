function counterfact(){
    return{
        count:0,
        increment(){
            this.count++
        },
        decrement(){
            this.count--
        },
        reset(){
            this.count=0
        },
        display(){
            console.log(this.count)
        }
    }
}

let counter1=counterfact()
console.log(counter1)
counter1.increment()
counter1.display()
counter1.decrement()
counter1.display()
counter1.reset()
counter1.display()

console.log(counter1 instanceof counterfact)
console.log(counter1 instanceof String)

console.log(Object.keys(counter1))