import { Request, Response } from "express";
import { Register_User } from "../usecases/register_user";

// recebi uma solicitação 
export class UserController {
    async registrar(req: Request, resp: Response) {
        const registrar = req.body
        const usecase = new Register_User();

        const user = await usecase.perform({
            name: registrar.name,
            email: registrar.email,
            password: registrar.password}
        );
        resp.status(200).json(user).end();
    }
}
