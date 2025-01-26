const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const stdTable = document.querySelector("#student-table");
const genderTable = document.getElementById("genderTables");
const studentsTable = document.querySelector(".students");

// Tables for gender
const maleTable = document.querySelector("#maleTableBody");
const femaleTable = document.querySelector("#femaleTableBody");
const otherTable = document.querySelector("#otherTableBody");

// Sorting buttons
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");

let stdArr = [];

async function fetchData() {
    try {
        const response = await fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        stdArr = data;
        render(stdArr);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Search by first name, last name, and email
const handleSearch = (event) => {
    event.preventDefault();
    const query = searchInput.value.toLowerCase();
    const filteredData = stdArr.filter((std) =>
        std.first_name.toLowerCase().includes(query) ||
        std.last_name.toLowerCase().includes(query) ||
        std.email.toLowerCase().includes(query)
    );
    render(filteredData);
};
searchInput.addEventListener("change", handleSearch);
searchBtn.addEventListener("click", handleSearch);

// Sorting functions

// sort by first name
btn1.addEventListener("click", (event) => {
    event.preventDefault();
    const sortedData = [...stdArr].sort((a, b) =>
        a.first_name.toLowerCase().localeCompare(b.first_name.toLowerCase())
    );
    render(sortedData);
});
// sort by last name
btn2.addEventListener("click", (event) => {
    event.preventDefault();
    const sortedData = [...stdArr].sort((a, b) =>
        b.first_name.toLowerCase().localeCompare(a.first_name.toLowerCase())
    );
    render(sortedData);
});

// sort by marks
btn3.addEventListener("click", (event) => {
    event.preventDefault();
    const sortedData = [...stdArr].sort((a, b) => a.marks - b.marks);
    render(sortedData);
});

// sort by passing
btn4.addEventListener("click", (event) => {
    event.preventDefault();
    const passingStudents = stdArr.filter((std) => std.passing);
    render(passingStudents);
});

// sort by class
btn5.addEventListener("click", (event) => {
    event.preventDefault();
    const sortedData = [...stdArr].sort((a, b) => a.class - b.class);
    render(sortedData);
});

// sort by gender
btn6.addEventListener("click", (event) => {
    event.preventDefault();
    const male = stdArr.filter((std) => std.gender.toLowerCase() === "male");
    const female = stdArr.filter((std) => std.gender.toLowerCase() === "female");
    const other = stdArr.filter(
        (std) =>
            std.gender.toLowerCase() !== "male" &&
            std.gender.toLowerCase() !== "female"
    );
    renderTableByGender([male, female, other]);
});

// Render table by gender
function renderTableByGender(arr) {
    genderTable.classList.remove("hidden");
    studentsTable.classList.add("hidden");
    maleTable.innerHTML = "";
    femaleTable.innerHTML = "";
    otherTable.innerHTML = "";

    arr[0].forEach((std) => {
        maleTable.innerHTML += renderRow(std);
    });
    arr[1].forEach((std) => {
        femaleTable.innerHTML += renderRow(std);
    });
    arr[2].forEach((std) => {
        otherTable.innerHTML += renderRow(std);
    });
}

// Render the main table
function render(arr) {
    genderTable.classList.add("hidden");
    studentsTable.classList.remove("hidden");
    stdTable.innerHTML = "";

    arr.forEach((std) => {
        stdTable.innerHTML += `
        <tr>
            <td>${std.id}</td>
            <td>${std.first_name} ${std.last_name}</td>
            <td>${std.gender}</td>
            <td>${std.marks}</td>
            <td>${std.class}</td>
            <td style="text-transform: capitalize;">${std.passing ? "Yes" : "No"}</td>
            <td>${std.email}</td>
        </tr>
    `;
    });
}

// Fetch data on page load
fetchData();
