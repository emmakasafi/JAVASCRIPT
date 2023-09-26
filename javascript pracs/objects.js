/*var car={
    name:"toyota",
    price:"5M",
    manufacturer:"best sellers",
carfunction : function()
{
    return("this is a good car");

}

}
console.log(car.carfunction());*/

function cars(name, manufacturer,price)
{
    this.name=name;
    this.manufacturer=manufacturer;
    this.price=price;

    this.carfunction=function()
    {
        console.log("is a good and new  car");


    }
}
var car2= new cars("toyota","best sellers",50000);
delete car2.manufacturer;
console.log(car2.name +  "  from" ,car2.manufacturer);
car2.carfunction();

cars.newfunction =function()
{
    console.log("a new function");
}
