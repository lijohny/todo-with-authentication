// time wishess
const times = new Date()
const hour = times.getHours()
// console.log(hour);

let day = ""

if (hour == 00 || hour <= 11) {
    day = "Good Morning"
}
else if (hour == 12 || hour <= 14) {
    day = "Good After Noon"
}
else {
    day = "Good Evening"
}
// console.log(day);
// const name = document.getElementById("UserName").value
// console.log(day + " " + name)


// add Todo's 

const input = document.getElementById("userEnterData")
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        event.preventDefault();

        const todoData = document.getElementById("userEnterData").value
        // console.log(todoData);
        const parent_div = document.getElementById("user_Create_Todo")
        console.log(todoData);

        parent_div.insertAdjacentHTML('afterbegin', `<div><input type="text" id="UserName" value="${todoData}"></div>`)

    }
});