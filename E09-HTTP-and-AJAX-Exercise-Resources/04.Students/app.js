
document.getElementById('submit').addEventListener('click', createStudent);

populate();

async function createStudent(ev) {
    ev.preventDefault();

    let inputFirstName = document.querySelector('[name = "firstName"]');
    let inputLastName = document.querySelector('[name = "lastName"]');
    let inputFacNumber = document.querySelector('[name = "facultyNumber"]');
    let inputGrade = document.querySelector('[name = "grade"]');

    if (!inputFirstName.value || !inputLastName.value || !inputFacNumber.value || !inputGrade.value) {
        return;
    }

    await postStudent(inputFirstName.value, inputLastName.value, inputFacNumber.value, inputGrade.value);

    inputFirstName.value = '';
    inputLastName.value = '';
    inputFacNumber.value = '';
    inputGrade.value = '';

    await populate();

}

async function populate() {

    let table = document.querySelector('tbody');
    table.replaceChildren();
    
    let studentList = await getAllStudents();

    for (let student of studentList) {

        let tr = document.createElement('tr');
        let tdFName = document.createElement('td');
        tdFName.textContent = student.firstName;
        let tdLName = document.createElement('td');
        tdLName.textContent = student.lastName;
        let tdFNumber = document.createElement('td');
        tdFNumber.textContent = student.facultyNumber;
        let tdGrade = document.createElement('td');
        tdGrade.textContent = student.grade;

        tr.append(tdFName, tdLName, tdFNumber, tdGrade);
        table.append(tr);

    }

}

async function postStudent(firstName, lastName, facNumber, grade) {

    let student = {
        "firstName": firstName,
        "lastName": lastName,
        "facultyNumber": facNumber,
        "grade": grade
    }

    let options = {
        method: 'post',
        Headers: { 'Content-Type': 'content/json' },
        body: JSON.stringify(student)
    }

    await fetch('http://localhost:3030/jsonstore/collections/students', options);

}

async function getAllStudents() {

    let res = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await res.json();
    return Object.values(data);

}