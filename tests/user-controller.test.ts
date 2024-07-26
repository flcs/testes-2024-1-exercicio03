import { UserController } from "../src/controllers/user-controller";
import { Request, Response } from "express";

describe('user-controller', () => {

    it('should create a new user', async () => {
        
        // Arrange
        const sut = new UserController();

        const dados = {
            name: 'teste',
            email: 'teste@email.com',
            password: '123456'
        }
        // formatar o request e response
        const req = { body: dados } as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            end: jest.fn()
        } as any as Response; 
        
        // Agindo como um roteador para testar o controller
        await sut.registrar(req, res);
        
        // Assert
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ id: '1', name: dados.name, email: dados.email });
    });


    it('should create a new user', async () => {
       
        // Arrange
        const sut = new UserController();

        const dados = {
            nome: 'teste',
            email: 'teste@email.com',
            password: '123456'
        }
        // formatar o request e response
        const req = { body: dados } as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            end: jest.fn()
        } as any as Response; 
        
        // Agindo como um roteador para testar o controller
        await sut.registrar(req, res);
        
        // Assert
        expect(res.status).toHaveBeenCalledWith(400);
    })
});
