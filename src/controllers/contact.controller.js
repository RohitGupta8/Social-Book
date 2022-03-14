import HttpStatus from 'http-status-codes';
import * as service from '../services/contact.service.js'

export const createContact = async (req, res) => {
    try {
        const contactList = {
            userId: req.user.id,
        };
        const data = await service.createContact(
            req.params.id,
            contactList
        );
        if (data === 'contact already exists') {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Contact already exists'
            });
        } else if (data === 'error') {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Internal server error'
            });
        } else {
            res.status(HttpStatus.CREATED).json({
                data: data,
                message: 'Contact saved'
            });
        }
    } catch (error) {
      next(error)
    }
};
