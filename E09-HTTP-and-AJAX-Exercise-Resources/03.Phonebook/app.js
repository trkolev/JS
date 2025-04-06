function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);

}

attachEvents();

async function onLoad() {

    let list = document.getElementById('phonebook');
    let phones = await getPhones();

    for (let phone of phones) { 

        let li = document.createElement('li');
        li.append(`${phone.person}: ${phone.phone}`);
        let btn = document.createElement('button');
        btn.addEventListener('click', () => onDelete(li, phone._id));
        btn.textContent = 'Delete';
        li.appendChild(btn);
        list.append(li);

    }

}

async function onCreate(name, phoneNumber) {

    if(!name || phoneNumber){
        return;
    }

    let inputPerson = document.getElementById('person');
    let inputNumber = document.getElementById('phone');

    await createPhone(inputPerson.value, inputNumber.value);

    inputPerson.value = '';
    inputNumber.value = '';



    await onLoad();
}

async function onDelete(li, id) {
    await deleteContactById(id);
    li.remove();
}

async function getPhones() {
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await res.json();

    return Object.values(data);
}

async function createPhone(name, phoneNumber) {

    let contact = {
        "person": name,
        "phone": phoneNumber
    }

    let options = {
        method: 'post',
        Headers: { 'Content-Type': 'aplication/json' },
        body: JSON.stringify(contact)
    }

    await fetch('http://localhost:3030/jsonstore/phonebook', options);

}

async function deleteContactById(id) {

    let options = {
        method: 'delete',
    }

    await fetch('http://localhost:3030/jsonstore/phonebook/' + id, options);

}