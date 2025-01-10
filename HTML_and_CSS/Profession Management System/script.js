const userName = document.getElementById("name");
const profession = document.getElementById("profession");
const age = document.getElementById("age");
const addBtn = document.getElementById("add-btn");
const userTable = document.getElementById("user-table");

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

    // let id = arr[arr.length]
    let newEmp = {
        name: userName.value,
        profession: profession.value,
        age: age.value
    }
    arr.push(newEmp);
    render();
})

function render() {
    userTable.innerHTML = `
    <tr>
        <th>S. No.</th>
        <th>Name</th>
        <th>Profession</th>
        <th>Age</th>
        <th>Action</th>
    </tr>
    `;

    arr.forEach((emp, i) => {

        userTable.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.profession}</td>
            <td>${emp.age}</td>
            <td><button class="del-btn" onclick=delEmp(${i})>del</button></td>
        </tr>
    `

    });

}

function delEmp(index) {
    console.log(index);
    arr.splice(index, 1);
    render();
}


render();
