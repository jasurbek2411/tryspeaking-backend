import { Request, Response } from 'express';
import { getUsers } from './query';

export const GET = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json({ users });
};
