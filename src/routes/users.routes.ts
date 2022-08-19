import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";
import { listUsersController } from "../modules/users/useCases/listUsers";
import { deleteUserController } from "../modules/users/useCases/deleteUser";
import { updateUserController } from "../modules/users/useCases/updateUser";

const usersRouter = Router();
const usersRepository = UsersRepository.getInstance();

usersRouter.get("/", (request, response) => {
    listUsersController.handle(request, response);
});

usersRouter.post("/", (request, response,) => {
    createUserController.handle(request, response);
});

usersRouter.put("/", (request, response) => {
    updateUserController.handle(request, response);
});

usersRouter.delete("/", (request, response) => {
    deleteUserController.handle(request, response);
});

export { usersRouter };