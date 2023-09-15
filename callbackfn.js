/*function one(){
    setTimeout (function(){
        console.log("this is the first function");

    },3000)
        

    }

    
function two(){
    console.log("this is the second function");
}
setTimeout(two,2000);
one();
*/

function person(friend,person2){
    setTimeout (function(){
        console.log("the name of my friend is  " + friend);
    person2();},2000)

    }
    

function person2(){
    console.log("my name is Ann");
}
person("emma",person2);

