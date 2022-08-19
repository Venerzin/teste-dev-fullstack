import { User } from "../../../entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository{

    create(data : ICreateUserDTO) : User;
    findById(id: string): User | undefined;
    list(): User[];
    update(id: string, data : ICreateUserDTO): void;
    delete(id: string): void

}