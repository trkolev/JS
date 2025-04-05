function attachEvents() {
    
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', loadDitails);


}

attachEvents();

async function loadPosts(){

    let menu = document.getElementById('posts');
    menu.replaceChildren();
    let posts = await getAllPosts();

    for (let post of posts){

        let option = document.createElement('option');
        option.value = post.id;
        option.textContent = post.title;

        menu.appendChild(option);
    }

}

async function loadDitails(){

    let menu = document.getElementById('posts');
    let postId = menu.value;

    let postsData = await getPostById(postId);
    let comments = await getCommentsById(postId);

    document.getElementById('post-title').textContent = postsData.title;
    document.getElementById('post-body').textContent = postsData.body;

    let list = document.getElementById('post-comments');
    list.replaceChildren();

    for(let comment of comments){

        let row = document.createElement('li');
        row.id = comment.id;
        row.textContent = comment.text;

        list.appendChild(row);

    }

}

async function getAllPosts() {

    let res = await fetch('http://localhost:3030/jsonstore/blog/posts');

    let data = await res.json();

    if(!res.ok){
        return;
    }

    return Object.values(data);
}

async function getPostById(postId) {

    let res = await fetch('http://localhost:3030/jsonstore/blog/posts/' + postId);

    let data = await res.json();

    return data[postId];
}

async function getCommentsById(postId) {

    let res = await fetch('http://localhost:3030/jsonstore/blog/comments');

    let data = await res.json();

    return Object.values(data).filter(c => c.postId == postId);
}