console.log("hello my friend");
//don't have to explicitily define the data type
//let is only valid within the block it is declared, unlike var.
//const is also known in the block in which it is defined.
/*{
    let a=7;
    let b=8;
    document.write("the value of a plus b is ",a+b);
}
document.write("the value of a plus b is ",a+b);//this won't work
*/
{
    var x=3;
    var y=3;
    document.write("\nthe value of a plus b is ",x+y);
}
document.write("the value of a plus b is ",x+y);
document.write(typeof(x));
var m="\nthis is";
var n="fun";
document.write(m+"  "+n);
//conditional operators

var num=document.write("this is a ",(x<3)?"small number":"large number");
//document.write(num);

var flag=document.write("\n it is ", (y>10 || x>3)? "true":"false");
var equal=document.write("the numbers are ",!(x==y)?" not equal":"equal");






