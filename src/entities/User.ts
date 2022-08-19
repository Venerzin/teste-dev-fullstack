import {v4 as uuidv4} from "uuid";
import { ICreateUserDTO } from "../modules/users/dtos/ICreateUserDTO";
class User {
    
    id?: string;

    firstName: string;
    lastName: string;
    email: string;
    password: string;

    phoneNumber: string;
    address: string;
    city: string;
    state: string;


    public birthDay: string;

    constructor () {
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { User };