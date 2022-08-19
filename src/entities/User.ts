import {v4 as uuidv4} from "uuid";
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

    constructor (firstName: string, lastName: string, email: string, password: string, phoneNumber: string, address: string, city: string, state: string, birthDay: string, id?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.state = state;
        this.birthDay = birthDay;
        this.id = id;

        if(!this.id){
            this.id = uuidv4();
        }
    }
}