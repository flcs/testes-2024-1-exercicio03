export interface IRepository<T> {
    // obter um elemento pelo ID
    get(id: string): Promise<T | Error>;

    // obter todos os elementos
    getAll(): Promise<T[] | Error>;

    // criar um novo elemento
    create(data: T): Promise<T | Error>;

    // buscar um elemento por um campo específico
    findBy(field: string, value: any): Promise<T | Error>;

    // deletar um elemento pelo ID
    delete(id: string): Promise<boolean>;
}
