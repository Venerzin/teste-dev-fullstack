import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "./UptadeUserController";


const usersRepository = UsersRepository.getInstance();
const updateUserUseCase = new UpdateUserUseCase(usersRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };