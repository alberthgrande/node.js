import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";
import { IUserDTO } from "../types/user";

// create user
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (req.body.email) {
      req.body.email = req.body.email.toLowerCase();
    }
    const userData: IUserDTO = req.body;
    const user: IUser = new User(userData); // IUser is only used to created data
    const saved = await user.save();
    res.status(201).json({ message: "User created successfully", saved });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// get all user
export const getAllUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// get single user
export const getSingleUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// update user
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (req.body.email) {
      req.body.email = req.body.email.toLowerCase();
    }

    const data: Partial<IUserDTO> = req.body;
    const updated = await User.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    if (!updated) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User updated successfully", updated });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// delete user
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found", user });
      return;
    }
    res.status(200).json({ message: "User delete successfully", user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
