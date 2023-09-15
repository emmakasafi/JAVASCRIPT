class Person{
    constructor(name,age){
        this.name=name;
        this.age=age; 
    }
    describe(){
        console.log("Iam ",{this:name})
    }
    
}
class Programmer extends Person{
    constructor(name, age, years_of_experience)
    {
        super(name,age)
    this.years_of_experience=years_of_experience;

    }

   
    code()
    {
        console.log("I like coding.")
    }  
    
}
function developsoftware(programmers){

}
let person1=new Person("Emma",21);
let programmer1=new Programmer("Emmaculate","25","2");
console.log(person1);
console.log(programmer1);
programmer1.code();