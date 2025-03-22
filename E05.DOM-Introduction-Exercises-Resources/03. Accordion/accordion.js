function toggle() {
    
    let butt = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');

    if(butt.textContent === 'More'){
        butt.textContent = 'Less';
        extra.style.display = 'block';
    }else{
        butt.textContent = 'More';
        extra.style.display = 'none'
    }


}