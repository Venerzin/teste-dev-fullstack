import { User } from "../../../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {

    constructor(private usersRepository: IUsersRepository){}

    execute({ firstName, lastName, email, password, phoneNumber, address, city, state, birthDay }: ICreateUserDTO): User{
        const user = this.usersRepository.create({ firstName, lastName, email, password, phoneNumber, address, city, state, birthDay });

        return user;
    }
}

export { CreateUserUseCase };