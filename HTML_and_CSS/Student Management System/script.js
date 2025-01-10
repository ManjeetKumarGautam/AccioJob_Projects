const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const stdTable = document.querySelector("#student-table");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");

let stdArr = students;

// search by name
searchBtn.addEventListener("click", () => {

    let data = stdArr.filter((std) => {
        let name = std.first_name + " " + std.last_name;
        if (name.toLowerCase().includes(searchInput.value.toLowerCase())) return std;
    });

    render(data);
});

// sort A-> Z
btn1.addEventListener("click", () => {

    stdArr.sort((a, b) => {
        if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) return -1;
        if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
        return 0;
    })
    render(stdArr);
});

// sort Z-> A
btn2.addEventListener("click", () => {

    stdArr.sort((a, b) => {
        if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) return 1;
        if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return -1;
        return 0;
    })
    render(stdArr);
});

// sort by marks
btn3.addEventListener("click", () => {
    stdArr.sort((a, b) => {
        return a.marks - b.marks;
    })
    render(stdArr);
});
// sort by passing
btn4.addEventListener("click", () => {

    let stdPass = stdArr.filter((s) => {
        if (s.passing) return s;
    })
    render(stdPass);
});
// sort by class
btn5.addEventListener("click", () => {
    stdArr.sort((a, b) => {
        return a.class - b.class;
    })
    render(stdArr);
});

function render(arr) {
    stdTable.innerHTML = '';
    stdTable.innerHTML += `
    <tr>
        <th>ID</th>
        <th>name</th>
        <th>gender</th>
        <th>marks</th>
        <th>class</th>
        <th>passing</th>
        <th>email</th>
    </tr>
    `;

    arr.forEach(std => {
        stdTable.innerHTML += `
        <tr>
            <td>${std.id}</td>
            <td>${std.first_name} ${std.last_name}</td>
            <td>${std.gender}</td>
            <td>${std.marks}</td>
            <td>${std.class}</td>
            <td>${std.passing}</td>
            <td>${std.email}</td>
        </tr>
        `;
    });

}



render(stdArr);