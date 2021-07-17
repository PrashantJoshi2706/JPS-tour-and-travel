const mysql = require("mysql");
const dotenv = require("dotenv");
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }

  console.log("db " + connection.state);
});

class DbService {
  static getdbserviceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM customers;";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));

          resolve(results);
        });
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async insertNewName(name, mob, ema) {
    try {
      // const dateAdded = new Date();
      const insertId = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO customers (c_name,c_mobile_no,c_email) VALUES (?,?,?);";
        connection.query(query, [name, mob, ema], (err, result) => {
          if (err) reject(new Error(err.message));

          resolve(result.insertId);
        });
      });
      console.log(insertId);
      return {
        id: insertId,
        name: name,
        mob: mob,
        ema: ema,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async deleteRowById(id) {
    id = parseInt(id, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM customers where c_id= ?";

        connection.query(query, [id], (err, result) => {
          if (err) reject(new Error(err.message));

          resolve(result.affectedRows);
        });
      });
      return response === 1 ? true : false;
    } catch (error) {
      console.log(console.log(error));
      return false;
    }
  }

  async updateNameById(id, name) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "UPDATE customers SET c_name = ? WHERE c_id = ?";

        connection.query(query, [name, id], (err, result) => {
          if (err) reject(new Error(err.message));

          resolve(result.affectedRows);
        });
      });
      console.log(response);
      return response === 1 ? true : false;
    } catch (error) {
      console.log(console.log(error));
      return false;
    }
  }

  async searchByName(name) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM customers WHERE c_name = ?;";

        connection.query(query, [name], (err, results) => {
          if (err) reject(new Error(err.message));

          resolve(results);
        });
      });
      //console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DbService;
