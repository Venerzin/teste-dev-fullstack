import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class UpdateUserUseCase {

    constructor(private usersRepository: IUsersRepository){}

    execute({ id, firstName, lastName, email, password, phoneNumber, address, city, state, birthDay }: ICreateUserDTO){
        const user = this.usersRepository.update({ id, firstName, lastName, email, password, phoneNumber, address, city, state, birthDay});

        return user;
    }
}

export { UpdateUserUseCase }