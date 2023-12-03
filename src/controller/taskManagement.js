const{tasks} = require('../database/tasks.js');

const add = (newTask) => {
    newTask.taskNumber = tasks.length + 1;
    tasks.push(newTask);
    console.log("\nNew task is added\n");
    console.log(newTask);
};
const display = ( ) => {
console.log("\nDisplay all tasks");
console.log(tasks);
};

const update = (taskNumber,key,value) => {

    var exists =tasks.find(ele=>ele.taskNumber===taskNumber);
    if(!exists){
        console.log("\n task not found");
        return;
    }else{
        exists[key] = value;
        console.log("\n task updated");
        console.log(exists);
    }
};

const remove = (taskNumber,key) => {
    var exists = tasks.find(ele=>ele.taskNumber===taskNumber);
    if(!exists){
        console.log("\n task not found");
        return;
    }else{
        var remaining = [taskNumber];
        remaining = tasks.filter(ele=>ele.taskNumber!==taskNumber)
        console.log("\n task removed");
        console.log(remaining);
    }

}



























module.exports ={
add,
display,
update,
remove,
}