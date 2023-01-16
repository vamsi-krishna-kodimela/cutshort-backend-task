import { Request, Response } from "express";
import { JWTHelper } from "../helpers";
import User from "./user.schema";

const registerUser = async (req: Request, res: Response) => {
  const { email, name, password }: any = { ...req.body };
  if (!email || !name || !password) {
    res.status(400).send("Email, Name and Password are required.");
    return;
  }
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(400).send("User with email already exists.");
    return;
  }
  try {
    const encryptedPassword = JWTHelper.generateToken(password);
    const newUser = await User.create({
      fullName: name,
      password: encryptedPassword,
      email: email,
    });
    delete newUser.password;
    res.json(newUser);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export { registerUser };
