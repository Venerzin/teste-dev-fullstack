import { Router } from "express";

import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";

const usersRouter = Router();
const usersRepository = UsersRepository.getInstance();

usersRouter.get("/", (request, response) => {
    const users = usersRepository.list();

    return response.json(users);
});

usersRouter.post("/", (request, response) => {

    const { firstName, lastName, email, password, phoneNumber, address, city, state, birthDay } = request.body;

    const user = usersRepository.create({ firstName, lastName, email, password, phoneNumber, address, city, state, birthDay });

    return response.status(201).json(user);

});

usersRouter.put("/", (request, response) => {

    const { firstName, lastName, email, password, phoneNumber, address, city, state, birthDay, id } = request.body;

    const user = usersRepository.update(id, { firstName, lastName, email, password, phoneNumber, address, city, state, birthDay});

    return response.json(user);

});

usersRouter.delete("/", (request, response) => {
    
    const { id } = request.body;

    usersRepository.delete(id);

    response.send();
});

export { usersRouter };