/*
 * By Isaac O.Q.
 */
import express = require('express');
import service = require('../services/customerService');
import model = require('../models/customerModel');

// instanciamos nuestro servicio
var customerService: service.CustomerService = new service.CustomerService();
// agregamos objetos dummy
for (var i = 0; i < 100; i++) {
    var name: string = 'Customer ' + i;
    var age: number = Math.round(Math.random() * 50);
    var email: string = 'customer' + i + '@mail.com';

    var newCustomer: model.CustomerModel = new model.CustomerModel(name, age, email);

    customerService.add(newCustomer);
}

/**
 * Muestra listado de clientes
 */
export function index(req: express.Request, res: express.Response) {

    // Suponemos que aquí lo leemos de una BD
    var customerList = customerService.dummyRepository;
    // Datos a mandar a la vista
    var viewData = {
        customers: customerList
    };
        
    // Renderizamos respuesta
    res.render('customers/index', viewData);
};

