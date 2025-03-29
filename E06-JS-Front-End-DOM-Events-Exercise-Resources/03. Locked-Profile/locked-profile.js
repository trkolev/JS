document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
        document.querySelector('main').addEventListener('click', function(e){

            if(e.target.nodeName !== 'BUTTON'){
                return;
            }

            let profile = e.target.closest('.profile');
            let status = profile.querySelector('.radio-group input:checked').getAttribute('id');

            if (status.includes('Lock')){
                return;
            }

            let hiddenFields = profile.querySelector('.hidden-fields');

            if(hiddenFields.classList.contains('active')){
                hiddenFields.classList.remove('active');
                e.target.textContent = 'Show Less';
            } else if(!hiddenFields.classList.contains('active')){
                hiddenFields.classList.add('active');
                e.target.textContent = 'Show More';
            }

        });

}