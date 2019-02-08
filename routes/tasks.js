var express = require('express');
var router = express.Router();

var task_controller = require('../controllers/taskController');

/* GET users listing. */
router.get('/',  task_controller.lists);

router.get('/archive', task_controller.archived_lists);

router.post('/create',task_controller.create_task);

router.post('/createlist',task_controller.create_list);

router.post('/togglestate',task_controller.toggle_state_task);

router.post('/togglestatelist',task_controller.toggle_state_list);

router.post('/updatecontent',task_controller.update_task_content);

router.post('/updatelisttitle',task_controller.update_list_name);

router.post('/removetask',task_controller.delete_task);

router.post('/removelist',task_controller.delete_list);


module.exports = router;