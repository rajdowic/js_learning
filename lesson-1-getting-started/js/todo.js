
TODO = {

    page: 'main',
    tasks: [],


    addNewTask: function(name = "") {
       TODO.tasks.push(name);
        TODO.displayList();
    },

    displayList: function(){
        const todoList = document.querySelector('[data-todo-list]');
        let content = "";

        TODO.tasks.forEach(element => {
            content += `<li>${element}</li>`;
            // content = '<li>' + element + '</li>';
        });

        todoList.innerHTML = content;
    }


};
TODO.foo = 2;
