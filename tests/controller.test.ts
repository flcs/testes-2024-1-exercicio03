import { Controller } from "controllers/controller";

describe('primiro teste', () => {

    test('criação de um primeiro controller', () => {
        // arrange
        let controller: Controller = {} as Controller;
        // act
        controller = new Controller();
        // assert
        expect(controller).toBeTruthy();
    });
})