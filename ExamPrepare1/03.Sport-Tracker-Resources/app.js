

let loadBtn = document.getElementById('load-workout');
loadBtn.addEventListener('click', loadWorkouts);
let addBtn = document.getElementById('add-workout');
addBtn.addEventListener('click', onAdd);
let editBtn = document.getElementById('edit-workout');
editBtn.addEventListener('click', onEdit);


async function onEdit() {

    let workout = document.getElementById('workout').value;
    let location = document.getElementById('location').value;
    let date = document.getElementById('date').value;
    let id = editBtn.dataset.id;

    if (!workout || !location || !date) {
        return;
    }

    await updateWorkout(id, workout, location, date);

    document.getElementById('workout').value = '';
    document.getElementById('location').value = '';
    document.getElementById('date').value = '';

    loadWorkouts();
    
    addBtn.disabled = false;
    editBtn.disabled = true;

}


async function onAdd() {

    let workout = document.getElementById('workout').value;
    let location = document.getElementById('location').value;
    let date = document.getElementById('date').value;

    if (!workout || !location || !date) {
        return;
    }

    await createWorkout(workout, location, date);

    document.getElementById('workout').value = '';
    document.getElementById('location').value = '';
    document.getElementById('date').value = '';

    loadWorkouts();

}

async function onChange(workout) {

    document.getElementById('workout').value = workout.workout;
    document.getElementById('location').value = workout.location;
    document.getElementById('date').value = workout.date;

    editBtn.dataset.id = workout._id;

    addBtn.disabled = true;
    editBtn.disabled = false;
}

async function deleteWorkout(id) {

    let currentWorkout = await getWorkoutById(id);
    let res = await fetch('http://localhost:3030/jsonstore/workout/' + id, { method: 'DELETE' });

}

async function createWorkout(workout, location, date) {

    let currentWorkout = {
        'workout': workout,
        'location': location,
        'date': date
    }

    let options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(currentWorkout)
    }

    await fetch('http://localhost:3030/jsonstore/workout/', options);

}

async function loadWorkouts() {

    let workouts = await getAllWorkouts();
    let list = document.getElementById('list');
    list.replaceChildren();

    for (let workout of workouts) {

        let currentDiv = document.createElement('div');
        currentDiv.classList.add('container');

        let h2 = document.createElement('h2');
        h2.textContent = workout.workout;
        let h3Date = document.createElement('h3');
        h3Date.textContent = workout.date;
        let h3Location = document.createElement('h3');
        h3Location.id = 'location';
        h3Location.textContent = workout.location;

        let btnDiv = document.createElement('div');
        btnDiv.id = 'buttons-container';

        let chngBtn = document.createElement('button');
        chngBtn.classList.add('change-btn');
        chngBtn.textContent = 'Change';
        chngBtn.addEventListener('click', async () => onChange(workout));

        let doneBtn = document.createElement('button');
        doneBtn.classList.add('delete-btn');
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', async () => {
            await deleteWorkout(workout._id);
            await loadWorkouts();
        });

        btnDiv.append(chngBtn, doneBtn);
        currentDiv.append(h2, h3Date, h3Location, btnDiv);
        list.appendChild(currentDiv);


    }

}

async function updateWorkout(id, workout, location, date) {

    let record = {
        workout,
        location,
        date
    };

    let options = {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(record)
    }

    let res = await fetch('http://localhost:3030/jsonstore/workout/' + id, options);
}

async function getAllWorkouts() {

    let res = await fetch('http://localhost:3030/jsonstore/workout/');
    let data = await res.json();

    return Object.values(data);

}

async function getWorkoutById(id) {

    let res = await fetch('http://localhost:3030/jsonstore/workout/' + id);
    let data = await res.json();
    return data;

}