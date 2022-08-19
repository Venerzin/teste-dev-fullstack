import { IUsersRepository } from "../../repositories/IUsersRepository";


class ListUsersUseCase {

    constructor (private usersRepository: IUsersRepository){}

    execute(){
        const allUsers = this.usersRepository.list();

        return allUsers;
    }
}

export { ListUsersUseCase };