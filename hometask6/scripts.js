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
        id: 1,
        name: "Ivan",
        estimate: 3,
        course: 1,
        active: true,
    },
    {
        id: 2,
        name: "Nikita",
        estimate: 2,
        course: 4,
        active: false,
    },
    {
        id: 3,
        name: "Alex",
        estimate: 5,
        course: 2,
        active: true,
    },
    {
        id: 4,
        name: "Michael",
        estimate: 4,
        course: 3,
        active: false,
    },
    {
        id: 5,
        name: "Vlad",
        estimate: 3,
        course: 5,
        active: true,
    },
];


let form_ = document.querySelector("form");

function renderAddStudent(){
    // for (let i = 0; i < students.length; i++){
        let inputNameStudent = document.createElement("input");
        inputNameStudent.type = "text";
        inputNameStudent.placeholder = "Имя студента";
        inputNameStudent.name = "name_student";
        inputNameStudent.className = "input-style";


        let inputCourse = document.createElement("input");
        inputCourse.type = "number";
        inputCourse.placeholder = "Курс";
        inputCourse.name = "course";
        inputCourse.className = "input-style";


        let inputEstimate = document.createElement("input");
        inputEstimate.type = "number";
        inputEstimate.placeholder = "Оценка";
        inputEstimate.className = "input-style";
        inputEstimate.name = "estimate";

        let inputCheckActive = document.createElement("input");
        let label = document.createElement("label");
        label.className = "label_style";

        inputCheckActive.type = "checkbox";
        inputCheckActive.id = "active";  // + students[i].id;
        inputCheckActive.name = "active"; // + students[i].id;
        // inputCheckActive.value = students[i].id;
        label.setAttribute("for", "active"); // + students[i].id);
        label.innerHTML = "Активность";

        let buttonAdd = document.createElement("button");
        buttonAdd.type = "submit";
        buttonAdd.id = "add";
        buttonAdd.innerHTML = "Добавить";
        buttonAdd.className = "b_style";
        buttonAdd.addEventListener("click", event => {
            let data = new FormData(event.target.closest("form"));

            //let nameStudent = data.get("name_student");
            //let course = data.get("course");
            // let estimate_ = data.get("estimate");

            let student = {
                name: data.get("name_student"),
                estimate: data.get("estimate"),
                course: data.get("course"),
            };

            students.push(student);

            console.log(student);
        });


        form_.appendChild(inputNameStudent);
        form_.appendChild(inputCourse);
        form_.appendChild(inputEstimate);
        form_.appendChild(inputCheckActive);
        form_.appendChild(label);
        form_.appendChild(buttonAdd);
    // }
}

renderAddStudent();

let table = document.querySelector("table tbody");

function renderStudents() {
    for(let i = 0; i < students.length; i++){

        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.innerHTML = students[i].name;
        tdName.className = "td_style";
        tr.appendChild(tdName);

        let tdEstimate = document.createElement("td");
        tdEstimate.innerHTML = students[i].estimate;
        tdEstimate.className = "td_style";
        tr.appendChild(tdEstimate);

        let tdCourse = document.createElement("td");
        tdCourse.innerHTML = students[i].course;
        tdCourse.className = "td_style";
        tr.appendChild(tdCourse);

        let input = document.createElement("input");
        input.type = "checkbox";
        input.className = "check_style";
        input.setAttribute("checked", "checked");
        tr.appendChild(input);
        (function (i) {
            input.addEventListener("click", function (event) {
                tr.innerHTML = " ";
                students.splice(i, 1);

            });
        }) (i);

        table.appendChild(tr);

        /* for (let j = students.length-1; ;){
                    alert("Cтуденты не найдены");     // при удалении последнего студента вывести студенты не найдены
            }
             */

    }
}

renderStudents();

