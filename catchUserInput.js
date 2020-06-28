const myForm = document.querySelector('#my-form');
    const todoInput = document.querySelector('#todo-input');
    const makeAction = document.querySelector('#todo-button');

    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault()
        alert(todoInput.value);
    }