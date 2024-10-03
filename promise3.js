//using math.random()*10 -to generate random number btwn 1 to 10
//if it is even ,then the funciton has to return resolve(),with the genarate random number
//if it is odd,the function has to return reject(),with the message 'not a lucjy' number


function getnumber(){
    let randomnumber=Math.floor(Math.random()*10)+1
console.log(randomnumber)
return new Promise((resolved,rejected)=>{
    if(randomnumber%2==0)
        resolved(`It is a lucky Number ${randomnumber}`)
    else rejected('It is not a lucky Number ' + randomnumber)
});
}
setInterval(()=>
getnumber()
.then((data)=>console.log(data))
.catch((err)=>console.log(err)),1000)