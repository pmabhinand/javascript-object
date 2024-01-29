student={
    stname:'max',
    strollno:53,
    stclass:'8th'
}

console.log(student);

console.log('-------------------------------');


//adding key:value

student["address"]='ernakulam'

console.log(student);

console.log('------------------------------------');

Object.assign(student,{"stage":20})
console.log(student);

console.log('----------------------------------------');

Object.assign(student,{"stsub":'maths'})
console.log(student);

console.log('-----------------------------------------');


//updating value

student["strollno"]+=3
console.log(student);

student["stname"]="sasi"
console.log(student);


//delete

delete student.stage
console.log(student);

