const Sequelize = require('sequelize');
const TaskModel = require('./models/task');
const TaskListModel = require('./models/tasklist');


const sequelize = new Sequelize('todo','root','John1994',{
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max:10,
        min:0,
        acquire:30000,
        idle:10000
    }
});

const Task = TaskModel(sequelize,Sequelize);
const TaskList = TaskListModel(sequelize,Sequelize);

TaskList.hasMany(Task, {foreignKey: 'tasklistid',sourceKey:'id'});
Task.belongsTo(TaskList, {foreignKey: 'tasklistid',sourceKey:'id'});


sequelize.sync(/*{force:true}*/).then(() =>{
    console.log(`Database & tables created!`);
});
 
module.exports = {
    Task,TaskList
};
