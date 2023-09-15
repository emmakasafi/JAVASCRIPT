/*
var regex=/[abc]def/
var str1="this string contains afhhgcdef";
var output=regex.test(str1);
console.log(output);
*/

/*
//range of characters
var regex=/[a-z]def/
var str1="this string contains afhhgghsddef";
var output=regex.test(str1);
console.log(output);
*/

//to exclude some characters
/*var regex=/[^abc]def/
var str1="this string contains afhhgdef";
var output=regex.test(str1);
console.log(output);

*/

/*var email=/[a-z,0-9]@gmail.com/
var myemail="emmakatheu67367@gmail.com";
var result=email.test(myemail);
console.log(result);
*/

function employee(){
    var empid=document.getElementById("eid").value;
    var check=/[DE]253[10-99]/i

    if ((check.test(empid)))
    {
        alert("valid emplyee ID");

    }
    else
    {
        alert("Invalid employee ID");
    }
}




