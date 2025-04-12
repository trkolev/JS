window.addEventListener("load", solve);

function solve() {



    document.getElementById('save').addEventListener('click', onSave);
    document.querySelector('#events .btn.delete').addEventListener('click', () => {document.getElementById('events-list').replaceChildren()})

    function onSave(ev) {

        ev.preventDefault();


        let name = document.getElementById('event').value;
        let note = document.getElementById('note').value;
        let date = document.getElementById('date').value;

        if (!name || !note || !date) {
            return;
        }

        let ul = document.getElementById('upcoming-list');
        let editBtn = create('button', ['Edit'], 'btn edit');
        editBtn.addEventListener('click', () => onEdit(name, note, date, li));
        let doneBtn = create('button', ['Done'], 'btn done');
        doneBtn.addEventListener('click', () => onDone(li))

        let li = create('li', [
            create('div', [
                create('article', [
                    create('p', [`Name: ${name}`]),
                    create('p', [`Note: ${note}`]),
                    create('p', [`Date: ${date}`])
                ]),
                create('div', [
                    editBtn,
                    doneBtn
                ], 'buttons')
            ], 'event-container'),
        ], 'event-item');

        ul.appendChild(li);



        function create(tagName, content = [], className) {

            let element = document.createElement(tagName);

            for (let item of content) {

                if (typeof item != 'object') {
                    item = document.createTextNode(item);
                }

                element.appendChild(item);
            }

            if (className) {
                element.className = className;
            }

            return element;
        }

        document.querySelector('form').reset();

    }

    function onEdit(name, note, date, li) {
        document.getElementById('event').value = name;
        document.getElementById('note').value = note;
        document.getElementById('date').value = date;
        li.remove();
    }

    function onDone(li) {

        let article = li.querySelector('article');
        li.replaceChildren();
        li.appendChild(article);
        let ul = document.getElementById('events-list');
        ul.appendChild(li);

    }

}

