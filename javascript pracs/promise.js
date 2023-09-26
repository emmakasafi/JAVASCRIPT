var prom= new Promise(function(resolve,reject){

    var drive=false;
    if (drive)
    {
        resolve("yes");
    }
    else{
        reject("No");
    }

});
prom.then(function(resolve){
    console.log(resolve+ ", "+"the driver can drive the car")
} ).catch(function(reject){
    console.log(reject + "," + " the driver does not know how to drive the car")
});