const todos= [
    {
        id:1,
        title:"Complete the assignment",
        completed:false
    },
    {
        id: 2,
        title: "Talk with next client",
        completed:false
    },
    {
        id:3,
        title:"Dentist meeting",
        completed: true
    }
    ];


//forEach  , map , filter
todos.forEach(
    function (todo){
        console.log(todo.title)
    }
);




const todoText = todos.map(function(todo){
    return todo.title
});
console.log(todoText);




const todoFilter = todos.filter(function (todo) {
    return todo.completed === true;
});

console.log(todoFilter);

const todoFil = todos.filter( (todo)=>{
   return  todo.completed === false;
});

console.log(todoFil)
