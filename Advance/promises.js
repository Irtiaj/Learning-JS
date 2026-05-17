const promise1 = new Promise(function(resolve,reject){
    //Do an async task
    //DB tasks, Cryptography
    setTimeout(function(){
        // console.log('Async task is Completed');
        resolve()
    },1500)
})
promise1.then(function(){
    // console.log("Promised Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async Task 2");
        resolve()
    }, 1499)
}).then(function(){
    // console.log("Async 2 resolved.");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Irtiaj", email: "hehe@gmail.com"})
    },1500)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Irtiaj", email: "hehe@gmail.com"})
        }
        else{
            reject('Error 404')
        }
    },2000)
}) 

promise4.then((user) => {
    console.log(user);
    return user.username //Whenever we are interested to chaining the then/catch thing we need to return. 
    //Which is why we are returning here
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Finally either it was resolved / it was rejected"))

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Irtiaj",age:"21"})
        }else{
            reject('Mara Khan & Bhalo Thakun')
        }
    },1000)
})

async function comsumePromise(){
    try{
        const response = await promise5;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

comsumePromise()