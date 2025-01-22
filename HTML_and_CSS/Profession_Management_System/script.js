const userName = document.getElementById("name");
const profession = document.getElementById("profession");
const age = document.getElementById("age");
const addBtn = document.getElementById("add-btn");
const userTable = document.getElementById("table-body");

let arr = [
    { id: 1, name: "Jack", profession: "Developer", age: 20 },
    { id: 2, name: "John", profession: "Admin", age: 28 },
];

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Validate inputs
    if (!userName.value || !profession.value || !age.value) {
        alert("All fields are required!");
        return;
    }

    let newId = arr[arr.length - 1].id + 1;
    let newEmp = {
        id: newId,
        name: userName.value,
        profession: profession.value,
        age: age.value
    }
    arr.push(newEmp);
    render();
})

function render() {
    userTable.innerHTML = "";

    arr.forEach((emp, i) => {

        userTable.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.profession}</td>
            <td>${emp.age}</td>
            <td><i class="fa-solid fa-trash" onclick=delEmp(${i})></i></td>
        </tr>
    `

    });

}

function delEmp(index) {
    arr.splice(index, 1);
    render();
}


render();
