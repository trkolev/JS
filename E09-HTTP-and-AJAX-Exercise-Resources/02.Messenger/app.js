function attachEvents() {

    document.getElementById('refresh').addEventListener('click', onRefresh);
    document.getElementById('submit').addEventListener('click', onPost);
}

attachEvents();

async function onPost() {
    
    let authorInput = document.querySelector('[name = "author"]');
    let contentInput = document.querySelector('[name = "content"]');
    let author = authorInput.value;
    let content = contentInput.value;

    await postMessage(author, content);
    authorInput.value = '';
    contentInput.value = '';
}

async function onRefresh() {

    let data = await getAllMessages();
    let output = data.map(r => `${r.author}: ${r.content}`);

    document.getElementById('messages').value = output.join('\n');
}


async function getAllMessages() {

    let res = await fetch('http://localhost:3030/jsonstore/messenger');

    let data = await res.json();

    return Object.values(data);

}

async function postMessage(name, text) {

    let message = {
        author: name,
        content: text
    }

    let option = {
        method: 'post',
        headers: { 'Content-Type': 'aplication/json' },
        body: JSON.stringify(message)
    };

    let res = await fetch('http://localhost:3030/jsonstore/messenger', option);

}