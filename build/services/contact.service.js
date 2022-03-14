// import User from '../models/user.model.js';
// import Profile from '../models/profile.model.js';
// import Contact from '../models/contact.model.js';
// export const createContact = async (profileId, contactList) => {
//     try {
//         const isContactList = await Contact.findOne({
//             userId: contactList._id,
//         });
//         const userProfile = await Profile.findById(profileId);
//         const userDetails = await User.findById(contactList);
//         if (isContactList) {
//             const newContact = {
//                 profileId: userProfile._id,
//                 name: userProfile.name,
//                 phoneNo: userDetails.phoneNo,
//                 email: userDetails.email,
//             };
//             contactList.Contact = [...isContactList.Contact, newContact];
//             let flag = false;
//             for (let i = 0; i < isContactList.Contact.length; i++) {
//                 if (profileId === isContactList.Contact[i].profileId.toString()) {
//                     flag = true;
//                 }
//             }
//             if (flag) {
//                 return 'contact already exists';
//             } else {
//                 const data = await Contact.findByIdAndUpdate(
//                     isContactList._id,
//                     contactList,
//                     { new: true }
//                 );
//                 return data;
//             }
//         } else {
//             const newContact = {
//                 profileId: userProfile._id,
//                 name: userProfile.name,
//                 phoneNo: userDetails.phoneNo,
//                 email: userDetails.email,
//             };
//             contactList.contacts = [newContact];
//             const data = await Contact.create(contactList);
//             return data;
//         }
//     } catch (err) {
//         console.log(err);
//         return 'error';
//     }
// };
"use strict";