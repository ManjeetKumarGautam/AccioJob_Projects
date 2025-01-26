const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const stdTable = document.querySelector("#student-table");
const genderTable = document.getElementById("genderTables");
const studentsTable = document.querySelector(".students");
// table for gender
const maleTable = document.querySelector("#maleTableBody");
const femaleTable = document.querySelector("#femaleTableBody");
const otherTable = document.querySelector("#otherTableBody");

// sorting buttons 
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");

let stdArr = students;

// search by first name, last name and email
const handleSearch = (event) => {
    event.preventDefault();
    let data = stdArr.filter((std) => {
        if (std.first_name.toLowerCase().includes(searchInput.value.toLowerCase())) return std;
        if (std.last_name.toLowerCase().includes(searchInput.value.toLowerCase())) return std;
        if (std.email.toLowerCase().includes(searchInput.value.toLowerCase())) return std;
    });

    render(data);
};
searchInput.addEventListener("change", handleSearch);
searchBtn.addEventListener("click", handleSearch);


// sort A-> Z
btn1.addEventListener("click", (event) => {
    event.preventDefault();
    stdArr.sort((a, b) => {
        if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) return -1;
        if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
        return 0;
    })
    render(stdArr);
});

// sort Z-> A
btn2.addEventListener("click", (event) => {
    event.preventDefault();
    stdArr.sort((a, b) => {
        if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) return 1;
        if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return -1;
        return 0;
    })
    render(stdArr);
});

// sort by marks
btn3.addEventListener("click", (event) => {
    event.preventDefault();
    stdArr.sort((a, b) => {
        return a.marks - b.marks;
    })
    render(stdArr);
});
// sort by passing
btn4.addEventListener("click", (event) => {
    event.preventDefault();
    let stdPass = stdArr.filter((s) => {
        if (s.passing) return s;
    })
    render(stdPass);
});
// sort by class
btn5.addEventListener("click", (event) => {
    event.preventDefault();
    stdArr.sort((a, b) => {
        return a.class - b.class;
    })
    render(stdArr);
});

// sort by gender
btn6.addEventListener("click", (event) => {
    event.preventDefault();

    const male = stdArr.filter((std) => {
        return std.gender.toLowerCase() == "male"
    });
    const female = stdArr.filter((std) => {
        return std.gender.toLowerCase() == "female"
    });
    const other = stdArr.filter((std) => {
        return std.gender.toLowerCase() !== "male" && std.gender.toLowerCase() !== "female"
    });
    other.sort((a, b) => {
        if (a.gender.toLowerCase() < b.gender.toLowerCase()) return -1;
        if (a.gender.toLowerCase() > b.gender.toLowerCase()) return 1;
        return 0;
    })

    const arr = [male, female, other];
    renderTableByGender(arr);

})

// render table by gender
function renderTableByGender(arr) {
    genderTable.classList.remove("hidden");
    studentsTable.classList.add("hidden");
    maleTable.innerHTML = '';
    femaleTable.innerHTML = '';
    otherTable.innerHTML = '';

    arr[0].forEach(std => {
        maleTable.innerHTML += `
        <tr>
            <td>${std.id}</td>
            <td>${std.first_name} ${std.last_name}</td>
            <td>${std.gender}</td>
            <td>${std.marks}</td>
            <td>${std.class}</td>
            <td style="text-transform: capitalize;">${std.passing}</td>
            <td>${std.email}</td>
        </tr>
        `;
    });
    arr[1].forEach(std => {
        femaleTable.innerHTML += `
        <tr>
            <td>${std.id}</td>
            <td>${std.first_name} ${std.last_name}</td>
            <td>${std.gender}</td>
            <td>${std.marks}</td>
            <td>${std.class}</td>
            <td style="text-transform: capitalize;">${std.passing}</td>
            <td>${std.email}</td>
        </tr>
        `;
    });

    arr[2].forEach(std => {
        otherTable.innerHTML += `
        <tr>
            <td>${std.id}</td>
            <td>${std.first_name} ${std.last_name}</td>
            <td>${std.gender}</td>
            <td>${std.marks}</td>
            <td>${std.class}</td>
            <td style="text-transform: capitalize;">${std.passing}</td>
            <td>${std.email}</td>
        </tr>
        `;
    });


}

// render table
function render(arr) {
    genderTable.classList.add("hidden");
    studentsTable.classList.remove("hidden");

    stdTable.innerHTML = '';

    arr.forEach(std => {
        stdTable.innerHTML += `
        <tr>
            <td>${std.id}</td>
            <td>${std.first_name} ${std.last_name}</td>
            <td>${std.gender}</td>
            <td>${std.marks}</td>
            <td>${std.class}</td>
            <td style="text-transform: capitalize;">${std.passing}</td>
            <td>${std.email}</td>
        </tr>
        `;
    });

}




render(stdArr);