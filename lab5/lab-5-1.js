//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject ={
    name:"Fenil",
    age: 24,
    occupation: "Student",
    nationality: "Indian",
    group: function(){
        alert("My name is " + meObject.name + " i am a " + meObject.occupation);
    }
}

console.log(meObject.age)
meObject.group();