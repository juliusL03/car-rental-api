import { UserModel } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserService = {
  register: async (name: string, email: string, password: string, role: string) => {
    const hashed = await bcrypt.hash(password, 10);
    return UserModel.create({ name, email, password: hashed, role });
  },

  login: async (email: string, password: string) => {
    const user = await UserModel.findByEmail(email);
    if (!user) throw new Error("User not found");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid password");

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    return { token, user: { id: user.id, email: user.email, role: user.role } };
  },
};
