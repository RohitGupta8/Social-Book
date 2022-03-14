import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator,loginValidator} from '../validators/user.validator';


const router = express.Router();

//route to create a new user
router.post('/register', newUserValidator, userController.newUser);
//route to login a new user
router.post('/login',loginValidator,  userController.login);

export default router;

