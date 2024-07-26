import { UserController } from "../controllers/user-controller";
import { Response, Request, Router } from "express";

export const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/user/registrar', (req: Request, res: Response) => {
    userController.registrar(req, res);
});
