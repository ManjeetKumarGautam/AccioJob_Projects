const foodItems = document.getElementById("food-items");
const sidebar = document.getElementById("sidebar");
const barIcon = document.getElementById("bar-icon");
const crossIcon = document.getElementById("cross-icon");
barIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
crossIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});


async function getMenu() {
    const response = await fetch("./assets/data.json").then(response => response.json());
    response.forEach(item => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-card");
        foodItem.innerHTML = `<div class="food-card">
                <img src="${item.image}" alt="">
                <div class="card-details">
                    <div class="card-info">
                        <p class="card-title">${item.name}</p>
                        <p class="price">$${item.price} /-</p>
                    </div>
                    <button>+</button>
                </div>
            </div>
            `
        foodItems.appendChild(foodItem);
    });
    return new Promise((resolve) => {
        setTimeout(() => {

            console.log("Menu loaded:", response);
            resolve(response);
        }, 1000);
    });
}


function takeOrder(menu) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomOrder = [];
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * menu.length);
                randomOrder.push(menu[randomIndex]);
            }
            console.log("Order placed:", randomOrder);
            resolve({ order: randomOrder });
        }, 2500);
    });
}

function orderPrep(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order is being prepared:", order);
            resolve({ ...order, status: "prepared" });
        }, 1500);
    });
}

function payOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order has been paid for:", order);
            resolve({ ...order, status: "paid" });
        }, 1000);
    });
}

function thankyouFnc(order) {
    console.log("Thank you for your order!", order);
    alert("Thank you for your order!")
}

// Promise Chain
getMenu()
    .then((menu) => takeOrder(menu))
    .then((order) => orderPrep(order))
    .then((preparedOrder) => payOrder(preparedOrder))
    .then((paidOrder) => thankyouFnc(paidOrder))
    .catch((error) => console.error("Something went wrong:", error));
