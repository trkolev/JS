visualize();

async function visualize() {

    let main = document.getElementById('main');
    let articles = await getAllArticles();

    for (let article of articles) {

        let currentArticle = document.createElement('div');
        currentArticle.classList.add('accordion');

        let currentHead = document.createElement('div')
        currentHead.classList.add('head');
        
        let currentSpan = document.createElement('span');
        currentSpan.textContent = `${article.title}`;
        
        let currentBtn = document.createElement('button')
        currentBtn.classList.add('button');
        currentBtn.setAttribute('id', article._id);
        currentBtn.textContent = 'MORE';
        currentBtn.addEventListener('click', onClick);
        currentHead.append(currentSpan, currentBtn);
        
        let extra = document.createElement('div');
        extra.classList.add('extra');
        let extraDetails = await getDetails(article._id);
        extra.innerHTML = `<p>${extraDetails.content}</p>`;
        extra.style.display = 'none';

        currentArticle.append(currentHead, extra);

        main.appendChild(currentArticle);
    }

}

function onClick(event){
    let button = event.currentTarget;
    let article = event.currentTarget.parentElement.parentElement;
    let extraInfo = article.querySelector('.extra');

    if (button.textContent === 'MORE'){

        button.textContent = 'LESS';
        extraInfo.style.display = 'block';

    }else{
        button.textContent = 'MORE';
        extraInfo.style.display = 'none';
    }
}

async function getAllArticles() {

    let res = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');

    let data = await res.json();

    return Object.values(data);

}

async function getDetails(id) {

    let res = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + id);

    let data = await res.json();

    return data;

}