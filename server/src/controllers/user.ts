import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const createUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
      },
    });
    res.json(user);
  } catch (error) {
    console.error((error as Error).message);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error((error as Error).message);
  }
};

export { createUser, getUsers };
