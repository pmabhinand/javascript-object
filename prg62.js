//object

//[1000,'Neel','developer','kochi',25000,3]

employee={
    empid:1000,
    empname:'neel',
    empdesig:'developer',
    emplocation:'kochi',
    empexp:3

}

console.log(employee);

console.log(employee.empname);

console.log(employee["empname"]);

console.log('--------------------------');


//w a p to print all keys from the given object

for(let key in employee){
    console.log(key);
}

console.log('---------------------------------');





//w a p to print all values from the given object

for(let key in employee){
    console.log(employee[key]);
}

console.log('-------------------------------------');





//w a p to print all key:values from the given object

for(let key in employee){
    console.log(`${key}:${employee[key]}`);
}

console.log('-----------------------------');




//check whether emplocation present or not,if present print 'present', else print,'not present'

//console.log(`employee location is ${"emplocation" in employee?'present':'not present'}` ); 

"emplocation" in employee?console.log('present'):console.log('not present');