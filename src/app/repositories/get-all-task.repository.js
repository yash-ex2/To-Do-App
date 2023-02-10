const fs = require('fs');
const path = require('path');

const getAllTasks = async () => {
    const data = await fs.readFileSync(path.resolve(__dirname,'../data/tasks.json'));
    return JSON.parse(data);
}
module.exports={
    getAllTasks
}