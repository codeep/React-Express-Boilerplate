import Express from 'express'
import * as todoHander from "../handlers/todo.handler";

const router = Express.Router();

router.get('/todo', todoHander.getAll);
router.get('/todo/:id', todoHander.getOne);
router.post('/todo', todoHander.createTodo);
router.put('/todo', todoHander.updateTodo);
router.delete('/todo/:id', todoHander.deleteTodo);

module.exports = router;
