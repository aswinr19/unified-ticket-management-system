import express from 'express';
import controller from '../controllers/User';

const router = express.Router();

router.post('/signup',controller.signup);
router.post('/signin',controller.signin);

export = router;

