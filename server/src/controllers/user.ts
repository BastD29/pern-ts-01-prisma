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
    res.status(201).send({ message: "User created with success", user });
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).send({ message: "Error creating user" });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).send({
      message: "Users retrieved successfully",
      users,
    });
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).send({ message: "Error getting users" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
      },
    });
    res.status(200).send({ message: "User updated with success", user });
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).send({ message: "Error updating user" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(200).send({ message: "User deleted with success" });
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).send({ message: "Error deleting user" });
  }
};

export { createUser, getUsers, updateUser, deleteUser };
