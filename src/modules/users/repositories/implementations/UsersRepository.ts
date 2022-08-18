class UsersRepository {
    private static instance : UsersRepository;

    private constructor(){}

    public getInstance(): UsersRepository {
        if(!UsersRepository.instance){
            UsersRepository.instance = new UsersRepository();
        }

        return UsersRepository.instance;
    }
}

export {UsersRepository}