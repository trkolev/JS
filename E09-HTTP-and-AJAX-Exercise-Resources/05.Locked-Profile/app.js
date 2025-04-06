function lockedProfile() {



}

displayStudents();

async function displayStudents() {

    let students = await getStudents();
    let page = document.getElementById('main');
    page.replaceChildren();
    let counter = 1;

    for (let student of students) {

        let profile = document.createElement('div');
        profile.classList.add('profile');
        profile.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${counter}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${counter}Locked" value="unlock"><br>
                 <hr>
                <label>Username</label>
                <input type="text" name="user${counter}Username" value="${student.username}" disabled readonly />
                 `;

        let infoToHide = document.createElement('div');
        infoToHide.classList.add('user${counter}Username');
        infoToHide.innerHTML = `
                  <hr>
                    <label>Email:</label>
                    <input type="email" name="user${counter}Email" value="${student.email}" disabled readonly />
                    <label>Age:</label>
                    <input type="number" name="${student.age}" value="${student.age}" disabled readonly />
               `
        infoToHide.style.display = 'none';
        profile.appendChild(infoToHide);
        let btn = document.createElement('button')
        btn.textContent = 'Show more';
        btn.addEventListener('click', showMore);
        profile.appendChild(btn);
        page.appendChild(profile);


        counter++;
    }

}

function showMore(event) {

    let button = event.currentTarget;
    let currentProfile = event.currentTarget.parentElement;
    let divToHide = currentProfile.querySelector('div:last-of-type');
    let isLocked = currentProfile.querySelector('input[type ="radio"][value = "lock"]').checked;


    if (button.textContent === 'Show more') {

        if (!isLocked) {
            button.textContent = 'Hide it';
            divToHide.style.display = 'block';
        }
    } else {

        if (!isLocked) {
            button.textContent = 'Show more';
            divToHide.style.display = 'none';
        }
    }

}


async function getStudents() {

    let res = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    let data = await res.json();

    return Object.values(data);

}