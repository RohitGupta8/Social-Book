import express from 'express';
import * as searchController from '../controllers/search.controller';
import { searchValidator} from '../validators/search.validator';
import { userAuth} from '../middlewares/auth.middleware';

const searchRoute = express.Router();
//api for search interests
searchRoute.get('/search',userAuth, searchValidator, searchController.searchInterest);
export default searchRoute;