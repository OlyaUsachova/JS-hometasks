'use strict';

// 6-е задание
// первое задание в 6 дз
let link = document.querySelectorAll("link");
console.log(link);
console.log(link[0].innerHTML);

// 2-е заание в 6 дз
let p = document.querySelectorAll("p.phrase");
console.log(p);
console.log(p[0].innerHTML);

// 3-е задание из 6-го дз

let students = [
    {
        name: "Ivan",
        estimate: 3,
        course: 1,
        active: true,
    },
    {
        name: "Nikita",
        estimate: 2,
        course: 4,
        active: false,
    },
    {
        name: "Alex",
        estimate: 5,
        course: 2,
        active: true,
    },
    {
        name: "Michael",
        estimate: 4,
        course: 3,
        active: false,
    },
    {
        name: "Vlad",
        estimate: 3,
        course: 5,
        active: true,
    },
];


let table = document.querySelector("table tbody");

for(let i = 0; i < students.length; i++){
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    tdName.innerHTML = students[i].name;
    tr.appendChild(tdName);

    let tdEstimate = document.createElement("td");
    tdName.innerHTML = students[i].estimate;
    tr.appendChild(tdEstimate);

    let tdCourse = document.createElement("td");
    tdName.innerHTML = students[i].course;
    tr.appendChild(tdCourse);

    let input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("checked", "checked");
    tr.appendChild(input);

    input.addEventListener("click", function (event) {
        tr.innerHTML = " ";
    });

    table.appendChild(tr);

}