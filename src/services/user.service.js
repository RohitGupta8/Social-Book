import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//create new user
export const newUser = async (body) => {
  const check = await User.findOne({ email: body.email, phoneNo:body.phoneNo });
  if (check) {
    throw new Error('User already exist');
  } else {
    const HashedPassword = await bcrypt.hash(body.password, 10);
    body.password = HashedPassword;
    const data = await User.create(body);
    return data;
  }
};

// user login api
export const login = async (body) => {
  const check = await User.findOne({ email: body.email });
  if (check) {
    const match = await bcrypt.compare(body.password, check.password);
    if (match) {
      const token = jwt.sign({ email: check.email, id: check._id, phoneNo: check.phoneNo }, process.env.SECRET);
      return token;
    } else {
      throw new Error('Incorrect Password');
    }
  } else {
    throw new Error('Not Registered Yet');
  }
};