import express from 'express';
import controller from '../controllers/User';

const router = express.Router();

router.post('/signup', controller.createUser);
router.post('/signin', controller.login);
router.get('/get', controller.readAllUser);
router.get('/get/:id', controller.readUser);

export = router;
