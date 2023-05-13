import { NextFunction , Request , Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';

const signup = (req: Request , res: Response , next: NextFunction) => {

  const { name , email , phone , password } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    phone,
    password
  });

  return user
  .save()
  .then((user) => res.status(201).json({ user }))
  .catch((error) => res.status(500).json({ error }));
};

const signin = (req: Request , res: Response , next: NextFunction) => {

  const { email , password } = req.body;

  User.find().then().catch();
};


export default { signup , signin };

