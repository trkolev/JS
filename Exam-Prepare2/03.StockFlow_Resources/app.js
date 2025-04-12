let loadBtn = document.getElementById('load-orders').addEventListener('click', loadAllOrders);
let orderBtn = document.getElementById('order-btn');
orderBtn.addEventListener('click', onOrder);
let editBtn = document.getElementById('edit-order');
editBtn.addEventListener('click', onEdit);



async function loadAllOrders() {

    let orders = await getAllOrders();
    let list = document.getElementById('list');
    list.replaceChildren();

    for (let order of orders) {

        let div = document.createElement('div');
        div.className = 'container';

        let h2 = document.createElement('h2');
        h2.textContent = order.name;

        let h3Date = document.createElement('h3');
        h3Date.textContent = order.date;

        let h3Quantity = document.createElement('h3');
        h3Quantity.textContent = order.quantity;

        let chngBtn = document.createElement('button');
        chngBtn.className = 'change-btn';
        chngBtn.textContent = 'Change';
        chngBtn.addEventListener('click', () => onChange(order, div));

        let doneBtn = document.createElement('button');
        doneBtn.className = 'done-btn';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', () => onDone(order._id));


        div.append(h2, h3Date, h3Quantity, chngBtn, doneBtn);
        list.appendChild(div);


    }

}


async function onOrder(ev) {
    ev.preventDefault();

    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let date = document.getElementById('date').value;

    if (!name || !quantity || !date) {
        return;
    }

    await addOrder(name, quantity, date);

    name = document.getElementById('name').value = '';
    quantity = document.getElementById('quantity').value = '';
    date = document.getElementById('date').value = '';

    await loadAllOrders();

}

async function onEdit(ev) {
    ev.preventDefault();

    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let date = document.getElementById('date').value;
    let _id = editBtn.dataset.id;

    await updateOrder(_id, name, quantity, date);


    orderBtn.disabled = false;
    editBtn.disabled = true;

    name = document.getElementById('name').value = '';
    quantity = document.getElementById('quantity').value = '';
    date = document.getElementById('date').value = '';


    loadAllOrders();
}

function onChange(order, div) {


    document.getElementById('name').value = order.name;
    document.getElementById('quantity').value = order.quantity;
    document.getElementById('date').value = order.date;
    editBtn.dataset.id = order._id;

    div.remove();

    orderBtn.disabled = true;
    editBtn.disabled = false;

}

async function onDone(id){
   
    await deleteOrderById(id);

    loadAllOrders();
}

async function getAllOrders() {
    let res = await fetch('http://localhost:3030/jsonstore/orders/');
    let data = await res.json();

    return Object.values(data);
}

async function getOrderById(id) {
    let res = await fetch('http://localhost:3030/jsonstore/orders/' + id);
    let data = await res.json();

    return data;
}

async function deleteOrderById(id) {

    await fetch('http://localhost:3030/jsonstore/orders/' + id, { method: 'DELETE' });

}

async function updateOrder(id, name, quantity, date) {

    let newOrder = {
        name,
        quantity,
        date
    };

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder)
    };

    await fetch('http://localhost:3030/jsonstore/orders/' + id, options);

}

async function addOrder(name, quantity, date) {

    let newOrder = {
        name,
        quantity,
        date
    };

    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder)
    };

    await fetch('http://localhost:3030/jsonstore/orders/', options);

}