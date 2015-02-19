/// <reference path="Scripts/typings/mongodb/mongodb.d.ts" />

import mongodb = require('mongodb');

/*
 * Crea conexiones a la base de datos Balusoft
 */
export class Database {
    /*
     * Servidor
     */
    server: mongodb.Server;
    /*
     * Base de datos
     */
    db: mongodb.Db;
    /*
     * Inicializa el conector y abre la conexión
     */
    constructor() {
        this.server = new mongodb.Server('localhost', 27017, {
            auto_reconnect: true            
        });
        this.db = new mongodb.Db('Balusoft', this.server, {
            w: 1
        });
        this.db.open((err: Error, db: mongodb.Db) => {
            //TODO: Handle callback here
        });
    }
}