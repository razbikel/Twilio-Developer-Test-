const pool = require('../../database_pool');

class callsTable{

    static addCall ({ phoneNumber, callerName }){
        let date = new Date(Date.now());
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO calls("phoneNumber", "callerName", "arriveTime" ) VALUES($1, $2, $3)',
                [phoneNumber, callerName, date],
                (error, response) => {
                    if (error){
                        return reject(error.message);
                    }
                    resolve();
                }
            )
        })
    }

    static getCalls (){
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT * FROM calls',
                [],
                (error, response) => {
                    if (error){
                        return reject(error.message);
                    }
                    resolve(response.rows);
                }
            )
        })
    }


    static getCallById ({callId}){
        console.log(callId);
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT * FROM calls WHERE  id = $1`,
                [callId],
                (error, response) => {
                    if (error){
                        return reject(error.message);
                    }
                    resolve(response.rows[0]);
                }
            )
        })
    }

    static deleteCallById ({callId}){
        return new Promise((resolve, reject) => {
            pool.query(
                `DELETE  FROM calls WHERE  id = $1`,
                [callId],
                (error, response) => {
                    if (error){
                        return reject(error.message);
                    }
                    resolve();
                }
            )
        })
    }
    

}


module.exports = callsTable;
