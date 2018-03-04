import Express from 'express'
import * as botHander from "../handlers/bot.handler";

const router = Express.Router();

router.get('/bot', botHander.getAll);
router.get('/bot/:id', botHander.getOne);
router.post('/bot', botHander.createBot);
router.put('/bot', botHander.updateBot);
router.delete('/bot/:id', botHander.deleteBot);

module.exports = router;