import HttpStatus from 'http-status-codes';
import * as SearchServices from '../services/search.service';

/**
 * Controller to search a interests
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchInterest = async (req, res, next) => {
    try {
        const data = await SearchServices.searchInterest(req.body.interests);
        if (data === 'Interests not found') {
            res.status(HttpStatus.NOT_FOUND).json({
                code: HttpStatus.NOT_FOUND,
                error: data,
                message: 'Invalid Interest! Interest is not there in DataBase'
            });
        } else {
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: `Here are the result matching your interests`
            })
        }
    } catch (error) {
        next(error);
    }
};