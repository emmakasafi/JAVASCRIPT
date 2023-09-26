function fun(){
    /* var x = document.getElementsByTagName("div");
    x[2].style.fontFamily ="Courier New";
    x[0].style.color="green";
    x[1].style.fontStyle="italic";
    x[2].style.backgroundColor="green";


    using the getElementsByTagName is not appropriate since we cannot change the property of all the elements of the array
    we have to do it for each individual element.
    to overcome this, we use the for loop
    */    
    var x = document.getElementsByTagName("div");
    for(var i=0;i<x.length;i++)
    {
        x[i].style.fontWeight="Bolder";
        x[i].style.backgroundColor="green";
    }
    //x[0].style.backgroundColor="yellow";
}