const{add,display, update,remove} = require("./controller/taskManagement.js");


const newTask = {
        description: "Performance Check",
        deadline: "2023-12-10",
        completed: false,
      
}

add(newTask);
display();

update(4, "deadline", "2023-12-22");
remove(3);