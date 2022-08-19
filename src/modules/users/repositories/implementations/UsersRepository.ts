import { User } from "../../../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private static instance : UsersRepository;

    private users: User[];

    private constructor(){
        this.users = []
    }

    create({ firstName, lastName, email, password, phoneNumber, address, city, state, birthDay }: ICreateUserDTO): User {
        const user = new User({ firstName, lastName, email, password, phoneNumber, address, city, state, birthDay});

        this.users.push(user);

        return user;
    }
    findById(id: string): User | undefined{
        const user = this.users.find((user) => user.id === id);

        return user;
    }
    list(): User[] {
        
        return this.users;
    }
    update(id: string, data: ICreateUserDTO) {
        
        const user = this.findById(id);

        if(!user){
            return
        }

        Object.assign(user, data);

        return;
    }
    delete(id: string) {

        this.users = this.users.filter((user) => user.id !== id);
        
        return;
    }

    public static getInstance(): UsersRepository {
        if(!UsersRepository.instance){
            UsersRepository.instance = new UsersRepository();
        }

        return UsersRepository.instance;
    }
}

export {UsersRepository}