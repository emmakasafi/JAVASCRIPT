let Person = function(name, gender, dob) {
    this.name = name;
    this.gender = gender;
    this.dob = dob;
  
    this.calcAge = function() 
    {
      let age= 2023-this.dob;
      console.log(age);
      
    };
    
  };
  
  let john = new Person('john', 'male', 2000); // Changed '2000' to a number
  john.calcAge();
  console.log(john);
  

  let emma=new Person("emma","female",2002);
  console.log(emma);