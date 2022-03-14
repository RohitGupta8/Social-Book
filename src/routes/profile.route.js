import express from 'express';
import * as profileController from '../controllers/profile.controller';
import { profileValidator} from '../validators/profile.validator';
import { userAuth} from '../middlewares/auth.middleware';

const profileRoute = express.Router();
//api for add profile
profileRoute.post('/profile',userAuth, profileValidator, profileController.addProfile);
// //api for contact
// profileRoute.post('/addContact/:_id',userAuth, profileController.addContact)
export default profileRoute;