//object of object 

let user={
    'name':{
       'firstname':'John',
       'lastname':'smith'
    },
    'email':'john@gmail.com',
    'username':'john1234',
    'address':{
       'street':'No5',
       'city':'Chennai',
       'state':'Tamil Nadu',
       'pincode':'965080'
    },
    'course':['java','javascript','Html','css','React']
}
    console.log(`Name: ${user.name.firstname} ${user.name.lastname}`)
    console.log(`Email: ${user.email}`)
    console.log(`User Name: ${user.username}`)
    console.log(`Address:`)
    console.log(`Street: ${user.address.street}`)
    console.log(`City: ${user.address.city}`)
    console.log(`State: ${user.address.state}`)
    console.log(`pincode: ${user.address.pincode}`)
    user.course.forEach((course,index)=>console.log(`${index+1}) ${course}`))
//arrow funciton for above 
//const print=(couser,index)=>console.log(`${index+1})${course}))
//you  can pass the print funciton into the forEach , here i used directly .