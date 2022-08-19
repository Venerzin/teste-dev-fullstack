interface ICreateUserDTO{
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    birthDay: string;
}

export { ICreateUserDTO };