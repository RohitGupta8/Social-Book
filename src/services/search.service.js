import Profile from '../models/profile.model';

//search interests
export const searchInterest = async (interest) => {
    const data = await Profile.find({
        $or: [{ interests: { $regex: interest.toString(), $options: 'i' } }],
    });
    if (!data.length) {
        return 'Interests not found';
    } else {
        return data;
    }
};