import Profile from '../models/profile.model';

//create new profile
export const addProfile = async (body, id) => {
    const profileExist = await Profile.findOne({ userId: id })
    if (profileExist) {
        return 'Profile already exist'
    } else {
        const data = await Profile.create(body);
        return data;
    }

};