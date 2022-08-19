import { IUsersRepository } from "../../repositories/IUsersRepository";


class DeleteUserUseCase {

    constructor(private usersRepository: IUsersRepository){}

    execute(id: string){

        this.usersRepository.delete(id);

        return;
    }
}

export { DeleteUserUseCase };