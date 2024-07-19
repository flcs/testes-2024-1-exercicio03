import { Request, Response } from "express";

export class Controller {

    handler(req: Request, resp: Response) {
        console.log('chegou aqui');
        resp.status(200).send('ola').end();
    }
}