import { IUser, UserRole } from '@kalpas/utils/types/user-type';
import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const userSchema: Schema<IUser>= new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { 
    type: String,
    enum: UserRole,
    required: true 
  }
});


export const User = mongoose.model<IUser>('User', userSchema);
