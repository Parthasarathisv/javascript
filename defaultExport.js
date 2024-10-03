function greet(name){//john the messange welcome John
     let newname=initCap(name)
     return 'Welcome '+ newname
}

function initCap(name){
    //convert he forst letter to uppercase and conacat the remaining letters
    return name.charAt(0).toUpperCase()+name.slice(1)
}

//using export default , only one function /variable can be exported

export default greet
//if we need to export  oth greet and initcap -that is called(named export)-without default