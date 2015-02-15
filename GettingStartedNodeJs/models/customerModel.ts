/*
 * By Isaac O.Q.
 */

/*
 * Representa un cliente
 */
export class CustomerModel{
    /*
     * Nombre del cliente
     */
    name: string;
    /*
     * Edad del cliente
     */
    age: number;
    /*
     * Email del cliente
     */
    email: string;
    /*
     * inicializa el modelo
     */
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
