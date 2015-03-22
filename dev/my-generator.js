var FruitGenerator = function*(){
    yield "Apple";
    yield "Orange";
    yield "Grapes";
    yield "Mango";
};
var messageElement = document.getElementById("message"),
    fruitList = FruitGenerator();

for(var fruit of fruitList){
    var h1Element = document.createElement('h1');
    h1Element.innerText = fruit;
    messageElement.appendChild(h1Element);
}

var createGenerator = function(itemArray){
    return function*(){
        for(var item of itemArray){
            yield item;
        }
    }();
};

var flowerArray= ["Rose","Lotus","Jasmine"],
    flowerList = createGenerator(flowerArray);

for(var flower of flowerList){
    var h1Element = document.createElement('h1');
    h1Element.innerText = flower;
    messageElement.appendChild(h1Element);
}


