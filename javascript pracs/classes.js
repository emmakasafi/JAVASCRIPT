class Rectangle{
    constructor(width, length){
        this.width=width;
        this.length=length;
        console.log("This is a rectangle of width",{width}, "and length",{length})
        
       
    }
    getarea(){
        var area=this.length* this.width;
        console.log("the area is ",{area});
    }


}
let myrectangle1= new Rectangle(20,30);
myrectangle1.getarea();