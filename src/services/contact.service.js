import User from '../models/user.model.js';
import Profile from '../models/profile.model.js';
import Contact from '../models/contact.model.js';

export const 
createContact = async (profileId, contactList) => {
    try {
        const isContactList = await Contact.findOne({
            userId: contactList.userId,
        });
        const userProfile = await Profile.findById(profileId);
        const userDetails = await User.findById(contactList.userId);
        if (isContactList) {
            const newContact = {
                profileId: userProfile._id,
                name: userProfile.name,
                phoneNo: userDetails.phoneNo,
                email: userDetails.email,
            };
            contactList.contacts = [...isContactList.contacts, newContact];
            let flag = false;
            for (let i = 0; i < isContactList.contacts.length; i++) {
                if (profileId === isContactList.contacts[i].profileId.toString()) {
                    flag = true;
                }
            }
            if (flag) {
                return 'contact already exists';
            } else {
                const data = await Contact.findByIdAndUpdate(
                    isContactList._id,
                    contactList,
                    { new: true }
                );
                return data;
            }
        } else {
            const newContact = {
                profileId: userProfile._id,
                name: userProfile.name,
                phoneNo: userDetails.phoneNo,
                email: userDetails.email,
            };

            contactList.contacts = [newContact];
            const data = await Contact.create(contactList);
            return data;
        }
    } catch (err) {
        return 'error';
    }
};