let person={
    'name':'john',
    'age':20,
    'address':'xyz',
    'titile':'projrct lead'
}

let designation={
    'titile':'lead',
    'companyname':'xyz',
    'salary':34000
}
let department={
    'depname':'HR',
    'location':'BlockA'
}

//entries are userd to convert object into on array
const entry=Object.entries(person) //entries=['name' ,'john']

//for-of is used to access the value of arrays,string,map,set

for(const[keys,value] of entry)
    console.log(keys +' '+value)

//for in used to access the keys of an object
for(const key in person)
    console.log(key+ ' ' +person[key]) //person.key is same as person[key]


let array=[119,895,90]
for(const value of array)
    console.log(value)

for(const value in array)
    console.log(value+' ' + array[value])
