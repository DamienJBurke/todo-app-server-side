const {
    Task,
    TaskList
} = require('../sequelize');
var async = require('async');

exports.lists = (req, res) => {

    TaskList.findAll({
        where: {
            is_archived: 0
        }
    }).then(tasklists => {

        Task.findAll().then(tasks => {

            const mydata = tasklists.map(listEl => [listEl.id,listEl.name,listEl.is_archived, tasks.map((taskEl) => {
                if (taskEl.tasklistid === listEl.id) {
                    return [taskEl.content, taskEl.id, taskEl.is_complete];
                }
            }).filter(Element => Element != null)]);
            
            console.log(mydata);
            res.render('task', {
                title: 'Organize My life',
                data: mydata
            });
        }); 
    });
};

exports.archived_lists = (req,res) => {

    TaskList.findAll({
        where: {
            is_archived: 1
        }
    }).then(tasklists => {

        Task.findAll().then(tasks => {

            const mydata = tasklists.map(listEl => [listEl.id,listEl.name,listEl.is_archived, tasks.map((taskEl) => {
                if (taskEl.tasklistid === listEl.id) {
                    return [taskEl.content, taskEl.id, taskEl.is_complete];
                }
            }).filter(Element => Element != null)]);

            console.log(mydata);
            res.render('task', {
                title: 'Organize My life',
                data: mydata
            });
        });
    });
};

exports.create_task = (req, res) => {
    Task.createTask(req.body.newTask,req.body.listId).then(() => {
        res.redirect('/tasks');
    });
};

exports.create_list = (req, res) => {
    TaskList.createList().then(() => {
        res.redirect('/tasks');
    });
};

exports.toggle_state_task = (req, res) => {
    Task.changeTaskState(req.body.taskId).then(() => {
        res.redirect('/tasks');
    });
};

exports.toggle_state_list = (req, res) => {
    TaskList.changeListState(req.body.listId).then(() => {
        res.redirect('/tasks');
    });
};

exports.update_task_content = (req, res) => {
    Task.updateTaskContent(req.body.text,req.body.taskId).then(() => {
        res.redirect('/tasks');
    });
};

exports.update_list_name = (req, res) => {
    TaskList.updateName(req.body.text,req.body.listId).then(() => {
        res.redirect('/tasks');
    });
};

exports.delete_task = (req, res) => {
    Task.deleteTask(req.body.taskId).then(() => {
        res.redirect('/tasks');
    });
};

exports.delete_list = (req, res) => {
    TaskList.deleteList(req.body.listId).then(() => {
        res.redirect('/tasks');
    });
};