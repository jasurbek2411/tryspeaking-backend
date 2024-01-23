import { Request, Response } from "express";
import { createUser, getUsers } from "./query";

export const GET = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json({ users });
};

export const POST = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUser(data);
  res.json({ user });
};
