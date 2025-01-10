/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((emp) => {
    if (emp.profession == "developer")
      console.log(`Id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp) => {
    if (emp.profession == "developer")
      console.log(`Id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`);
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmp = { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(newEmp);
  arr.forEach((emp) => {
    console.log(`Id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`);
  });
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((emp, i) => {
    if (emp.profession == "admin") {
      arr.splice(i, 1);
    }
  });
  arr.forEach((emp) => {
    console.log(`Id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`);
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2 = [
    { id: 5, name: "Ravi", age: "28", Profession: "developer" },
    { id: 6, name: " Kumar", age: "24", Profession: "admin" },
    { id: 7, name: "Lokesh", age: "28", Profession: "manager" },
  ];
  arr = arr.concat(arr2);

  arr.forEach((emp) => {
    console.log(`Id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`);
  });
}
