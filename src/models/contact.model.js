import mongoose from 'mongoose';
import User from './user.model.js';
import Profile from './profile.model.js';

const contactSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    contacts: [{
        profileId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile'
        },
        name: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        email: {
            type: String,
        }
    }]
});

const Contact = mongoose.model("Contact", contactSchema)
export default Contact;