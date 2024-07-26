import { IRepository } from "contracts/irepository";
import { User } from "entities/user";

export function make_controller_usuario() {
    const repo: IRepository<User> = new UserRepository();    
}