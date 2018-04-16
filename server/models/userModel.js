import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  twitterId: String
});

export default mongoose.model('User', UserSchema);
