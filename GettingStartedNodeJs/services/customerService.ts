/*
 * By Isaac O.Q.
 */

import customer = require('../models/customerModel');
import database = require('../database');

export class CustomerService {
    /*
     * Acceso a datos
     */
    data: database.Database;

    constructor() {
        this.data = new database.Database();
    }

    /*
     * Agrega un nuevo cliente
     * @param newCustomer Nuevo cliente a agregar
     */
    add(newCustomer: customer.CustomerModel): void {
        //TODO Insert in database
    }
    /*
     * Consulta todos los clientes
     */
    getCustomers(callback: (customers: customer.CustomerModel[]) => void): void{     

        var customersCollection = this.data.db.collection('customers');
        var customersResult = customersCollection.find();
                   
        customersResult.toArray(function (err, customersArray) {
            callback(customersArray);
        });        
    }

}
