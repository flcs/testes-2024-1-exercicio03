import { IRepository } from "contracts/irepository";
import { User } from "entities/user";

export class UserRepository implements IRepository<User> {
    lista: User[] = [];

    async get(id: string): Promise<User | Error> {
        const index = this.lista.findIndex(u => u.id === id);
        if (index === -1) {
            // return new Error('User not found');
        }
        return this.lista[index];
    }

    async getAll(): Promise<User[] | Error> {
        if (this.lista.length === 0) {
            return new Error('No users found');
        }
        const retorno = { ...this.lista };
        return retorno;
    }

    async create(data: User): Promise<User | Error> {
        const novo: User = data;
        novo.id = (this.lista.length + 1).toString();
        this.lista.push(novo);
        return novo;
    }

    async findBy(field: string, value: any): Promise<User | Error> {
        const index = this.lista.findIndex(u => u[field as keyof User] === value);
        if (index === -1) {
            return new Error('User not found');
        }
        return this.lista[index];
    }
    
    async delete(id: string): Promise<boolean> {
        const index = this.lista.findIndex(u => u.id === id);
        if (index === -1) {
            return false;
        }
        this.lista.splice(index, 1);
        return true;
    }
}