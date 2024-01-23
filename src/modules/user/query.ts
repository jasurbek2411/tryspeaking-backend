import { db } from "../../config/db.config";
import { users } from "../../config/schema.config";
import { IUser } from "../../types/user";

export async function getUsers() {
  const users_list = await db.select().from(users);
  return users_list;
}

export async function createUser(data: IUser) {
  try {
    const user = await db.insert(users).values(data)
    return user
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
}
