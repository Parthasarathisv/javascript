let person={
    'name':'john','age':20,'gender':'male','city':'CHN','isActive':true
}
//Acess only the name and city
let{name,city}=person //object destruting

console.log(`${name} ${city}`)

let array=['jhon', 'jamesh' , 'smith' , 'aadam']
let [arr1,arr2,arr3]=array //array destruting
console.log(`${arr1} ${arr2} ${arr3}`)
console.log(array)