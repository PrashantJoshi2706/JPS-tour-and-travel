const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { request, response, json } = require("express");
dotenv.config();

const dbService = require("./dbserver_2.js");
//const DbService = require("./dbservers.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create

/*app.post("/insert", (request, response) => {
  console.log(request.body);
  const { cId, tId } = request.body;
  const db = dbService.getdbserviceInstance();

  const result = db.insertNewName(cId, tId);

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});*/
//search

/*app.get("/search/:name", (request, response) => {
  const { name } = request.params;
  const db = dbService.getdbserviceInstance();

  const result = db.searchByName(name);

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//read
*/
/*app.get("/getAll_2", (request, response) => {
  const db = dbService.getdbserviceInstance();

  const result = db.getAllData();

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});*/

app.get("/getAll_1", (request, response) => {
  const db = dbService.getdbserviceInstance();

  const result = db.getAllData_t();

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});
/*
//update
app.patch("/update", (request, response) => {
  console.log(request.body);
  const { id, name } = request.body;
  const db = dbService.getdbserviceInstance();

  const result = db.updateNameById(id, name);

  result
    .then((data) => response.json({ success: data }))
    .catch((err) => console.log(err));
});

//delete
app.delete("/delete/:id", (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  const db = dbService.getdbserviceInstance();

  const result = db.deleteRowById(id);

  result
    .then((data) => response.json({ success: data }))
    .catch((err) => console.log(err));
});
*/
//app.listen(process.env.PORT_1, () => console.log("app is running"));
app.listen(process.env.PORT_2, () => console.log("app is running"));
