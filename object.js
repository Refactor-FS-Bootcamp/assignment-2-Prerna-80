let user1={};
console.log(user1);
let user2=new Object();
console.log(user2);
// first add name and surname
let property ={
    name: "john",
    surname:"smith",
}
console.log(property);
// 2nd.
let p={
        name:"john",
}
let p1={ ...p,surname:"smith"}
console.log(p1);


// chg the name
1.
let p2= new Object();
p2=p1;
p2['name']="Pete";
console.log(p2);

let p3= new Object();
p3=p1;
p3.name="peter";
console.log(p3);

// remove the name
let p4=new Object();
p4=p1;
delete p1.name;
console.log(p4);