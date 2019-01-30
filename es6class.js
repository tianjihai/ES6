/**
 * @author tianjihai
 * @date 2019/1/30 14:05
 */
class People {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        alert(this.name+this.age)
    }
}
People.prototype.say=function(){
    alert(this.name+" is saying!")
};

let p = new People("jame","23");
p.speak();
p.say();

/*
function people(name,age){
    this.name = name;
    this.age = age;
}
people.prototype.walk=function(){
    alert(this.name+' is walking')
}

let p = new people("james","23")
p.walk()*/
