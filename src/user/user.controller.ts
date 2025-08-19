import { Request, Response } from "express";
import { UserService } from "./user.service";

export const UserController = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;
      const user = await UserService.register(name, email, password, role);
      res.json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const result = await UserService.login(email, password);
      res.json(result);
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  },
};
