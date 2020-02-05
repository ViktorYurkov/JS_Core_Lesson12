function show(data) {
    console.log(data);
}

// 1
function Person(name, age){
    this.name = name;
    this.age = age;
}

// створення обєктів класу Person
var student = new Person('Petro', 20);
var teacher = new Person('Viktor', 35);
var header = new Person('Nikola', 45);
var assistant1 = new Person('Alla', 25);
var assistant2 = new Person('Ivan', 29);

//створення map і додавання обєктів в map 
var map = new Map();
map.set(1, header);
map.set(2, teacher);
map.set(3, assistant1);
map.set(4, assistant2);
map.set(5, student);

//ітерування по значенням map
function consoleMap(mapPerson){
    var values = mapPerson.values()
    for (var obj of values){
    show('name : '+obj.name+' , age : '+obj.age);
    }
}
  
consoleMap(map);

// 2
function operation(operand1, operand2, operator){
    switch(operator) {
        case 'add':  
            rezult = operand1 + operand2;
            return `${operand1} + ${operand2} = ${rezult}`;
        case 'sub':  
            rezult = operand1 - operand2;
            return `${operand1} - ${operand2} = ${rezult}`;
        case 'div': 
            rezult = operand1 / operand2;
            return `${operand1} / ${operand2} = ${rezult}`;
        case 'mult':  
            rezult = operand1 * operand2;
            return `${operand1} * ${operand2} = ${rezult}`;
        default:
            return 'невірне введення операції';
    }
}
    

try{
    show(operation(10, 15, 'add'));
    show(operation(-2, 5, 'sub'));
    show(operation(7, 4, 'div'));
    show(operation(20, 11, 'mult'));  
    show(operation(20, 11, 'mul'));  
    show(operation(20, a, 'mult'));  
}catch(err){
    show('Помилка. Невірні операнди');
}finally{
    show('end');
}



 



map.set(1, {name:'Number', weight: 1});
map.set(petro, {age: 30});

var keySet = map.keys();
var values = map.values();
var entries = map.entries();

//
for (var obj of keySet){
    show(obj);
}

//
for (var obj of values){
    show(obj);
}

//
for (var obj of entries){
    show(obj);
}
//
show(map.get(petro));
map.delete(petro);
show();
for (var obj of map.entries()){
    show(obj);
}
//
map.clear();
//
show(map.size);


