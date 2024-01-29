var car={
    name:"boleno",
    model:"match back",
    manufacturer:"maruti",
    price:"10 lakhs"
}

//display car name and manufacturer name

console.log(car.name);
console.log(car.manufacturer);

console.log('-------------------------------');


//check "model" key is present in car , if present display it's value

console.log("model" in car?`car model is :${car.model}`:`not available`);

console.log('--------------------------------------');



//add "varient" key to car with value as 'manual'

car["varient"]=["manual"]
console.log(car);

console.log('----------------------------------------');




//add another value "autmatic to "varient" key

car.varient.push("automatic")
console.log(car);

console.log('----------------------------------')




//add "colour" key to car with value as "red","yellow","white","black"

car["color"]=["red","yellow","white","black"]
console.log(car);