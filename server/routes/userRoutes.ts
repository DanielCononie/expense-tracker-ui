import { Request, Response } from "express";

const createUser = (req: Request, res: Response) => {
  res.send("create user");
};

export { createUser };
