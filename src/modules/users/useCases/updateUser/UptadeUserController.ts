import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


class UpdateUserController {

    constructor(private updateUserUseCase: UpdateUserUseCase){}

    handle(request: Request, response: Response): Response{

        const { id, firstName, lastName, email, password, phoneNumber, address, city, state, birthDay } = request.body;

        const user = this.updateUserUseCase.execute({ id, firstName, lastName, email, password, phoneNumber, address, city, state, birthDay })

        return response.json(user);
    }
}

export { UpdateUserController };