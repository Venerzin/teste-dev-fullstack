import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController{

    constructor(private createUserUseCase: CreateUserUseCase){}

    handle(request: Request, response: Response): Response {

        const { firstName, lastName, email, password, phoneNumber, address, city, state, birthDay } = request.body;

        const user = this.createUserUseCase.execute({ firstName, lastName, email, password, phoneNumber, address, city, state, birthDay });

        return response.status(201).json(user);
    }
}

export { CreateUserController }