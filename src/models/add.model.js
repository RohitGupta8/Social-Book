/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
const contactSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    contacts: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ]
  },
  {
    timestamps: true
  }
);
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
