import mongoose , { Document , Schema } from 'mongoose';


export interface User {
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  phone: number,
  password: string,
}


export interface UserModel extends User , Document {}

  const UserSchema: Schema = new Schema(
    {
      firstname: { type: String , required: true },
      lastname: { type: String , required: true },
      username: { type: String , required: true },
      email: { type: String , required: true },
      phone: {type : Number , required: true },
      password: { type: String , required: true },
    },
    {
      timestamps: true
    }
  );

export default mongoose.model<UserModel>('User',UserSchema);
