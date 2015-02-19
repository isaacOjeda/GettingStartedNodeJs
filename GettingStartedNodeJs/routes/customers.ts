/*
 * By Isaac O.Q.
 */
import express = require('express');
import service = require('../services/customerService');
import model = require('../models/customerModel');

// instanciamos nuestro servicio
var customerService: service.CustomerService = new service.CustomerService();


/**
 * Muestra listado de clientes
 */
export function index(req: express.Request, res: express.Response) {

    // Suponemos que aquí lo leemos de una BD
    var customerList = customerService.getCustomers((customerList) => {
        // Datos a mandar a la vista
        var viewData = {
            customers: customerList
        };

        // Renderizamos respuesta
        res.render('customers/index', viewData);
    });    
};

