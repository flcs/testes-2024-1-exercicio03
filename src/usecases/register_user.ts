import { User } from "../entities/user";
import { IRepository } from "../contracts/irepository";
import { UserRepository } from "../repositories/user-repo";

export interface UseCaseUserCreateIN {
    name: string;
    email: string;
    password: string;
}

export interface UseCaseUserCreateOUT {
    id: string;
    name: string;
    email: string;
}

export class  Register_User {

    private repo: IRepository<User>;

    constructor() {
        this.repo = new UserRepository();
    }

    async perform(props: UseCaseUserCreateIN): Promise<UseCaseUserCreateOUT | Error>  {

        // validação da operação
        const exist = await this.repo.findBy('email', props.email);
        if (exist instanceof User) {
            return new Error('User already exists');
        }

        // criar efetivamente o usuário
        const user = new User(props.name, props.email, props.password);

        // salvar o usuário
        const created = await this.repo.create(user);
        if (created instanceof Error) 
            return new Error('User not created');

        // devolver o resultado
        const criado: UseCaseUserCreateOUT = {
            id: created.id!,
            name: created.name,
            email: created.email
        } ;
        return criado as UseCaseUserCreateOUT;
    }
}