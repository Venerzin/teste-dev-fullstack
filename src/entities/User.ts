import {v4 as uuidv4} from "uuid";
import { ICreateUserDTO } from "../modules/users/dtos/ICreateUserDTO";
class User {
    
    public id?: string;

    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;

    public phoneNumber: string;
    public address: string;
    public city: string;
    public state: string;


    public birthDay: string;

    constructor ({firstName, lastName, email, password, phoneNumber, address, city, state, birthDay, id} : ICreateUserDTO) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.state = state;
        this.birthDay = birthDay;

        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { User };