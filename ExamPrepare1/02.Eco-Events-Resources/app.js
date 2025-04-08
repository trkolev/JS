window.addEventListener("load", solve);

function solve() {

  let btnInput = document.getElementById('next-btn');
  btnInput.addEventListener('click', onSubmit);



  function onSubmit() {

    
  let inputEmail = document.getElementById('email').value;
  let inputEvent = document.getElementById('event').value;
  let inputLocation = document.getElementById('location').value;

      if (!inputEmail || !inputEvent || !inputLocation) {
      return;
    }

    btnInput.disabled = true;

    let currentEvent = document.createElement('li');
    currentEvent.classList.add('application');
    let ul = document.getElementById('preview-list');
    currentEvent.innerHTML = `
        <article>
          <h4>${inputEmail}</h4>
          <p>
        <strong>Event:</strong><br>
        ${inputEvent}
          </p>
          <p>
        <strong>Location:</strong><br>
        ${inputLocation}
          </p>
        </article>
    `
    let edit = document.createElement('button');
    edit.classList.add('action-btn', 'edit');
    edit.textContent = 'EDIT';
    edit.addEventListener('click', () => onEdit(inputEmail, inputEvent, inputLocation));

    let apply = document.createElement('button');
    apply.classList.add('action-btn', 'apply');
    apply.textContent = 'APPLY';
    apply.addEventListener('click', () => onApply(currentEvent));


    currentEvent.append(edit, apply);
    ul.appendChild(currentEvent);

    document.querySelector('.registerEvent').reset();


  }

  function onEdit(email, event, location){

    
  document.getElementById('email').value = email;
  document.getElementById('event').value = event;
  document.getElementById('location').value = location;

    
    btnInput.disabled = false;
    let li = document.querySelector('.application');
    li.remove();
  }

  function onApply(currentEvent){

    let li = document.querySelector('.application');
    li.remove();

    let approvedEvent = document.querySelector('#event-list');
    approvedEvent.appendChild(currentEvent);

    let btns = Array.from(currentEvent.querySelectorAll('button'));

    for (let button of btns){
      button.remove();
    }

    btnInput.disabled = false;

  }

}