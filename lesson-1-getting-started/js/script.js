
(function () {
    let form = document.querySelector('[data-form-name="number_form"]');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            let inputValue = form.querySelector('input').value;
            TODO.addNewTask(inputValue);
            // console.log(inputValue);
        });
    }
})();