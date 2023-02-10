const fs = require('fs');
const path = require('path');

const writeAllTasks =(tasks)=>{
    let json = JSON.stringify(tasks);
    fs.writeFileSync(path.resolve(__dirname,'../data/tasks.json'),json)
}

module.exports={
    writeAllTasks,
}