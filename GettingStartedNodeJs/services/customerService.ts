/*
 * By Isaac O.Q.
 */

import customer = require('../models/customerModel');

export class CustomerService {
    /*
     * Array dummy de objetos CustomerModel
     */
    dummyRepository: customer.CustomerModel[];
    /*
     * Inicializa el array sin datos
     */
    constructor() {
        this.dummyRepository = [];
    }
    /*
     * Agrega un nuevo cliente
     * @param newCustomer Nuevo cliente a agregar
     */
    add(newCustomer: customer.CustomerModel): void {
        this.dummyRepository.push(newCustomer);
    }

}