document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5030/getAll_2")
    .then((response) => response.json())
    .then((data) => console.log(data["data"]));
});
/*
document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5050/getAll_1")
      .then((response) => response.json())
      .then((data) => console.log(data["data"]));
});*/

const addBtn = document.querySelector("#sub-btn");

addBtn.onclick = function () {
  const customerId = document.querySelector("#customer_id");
  const cId = customerId.value;
  const tripId = document.querySelector("#trip_id");
  const tId = tripId.value;
  console.log(tId);
  customer_id.value = "";
  trip_id.value = "";

  fetch("http://localhost:5030/insert", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ cId: cId, tId: tId }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data["data"]));
};

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5050/getAll_1")
    .then((response) => response.json())
    .then((data) => loadHTMLTable(data["data"]));
});

function loadHTMLTable(data) {
  const option = document.querySelector("main select");

  console.log(data);

  if (data.length === 0) {
    option.innerHTML = "<option></option>";
    return;
  }
  let tableHtml = "";
  data.forEach(function ({ Trip_id }) {
    tableHtml += `<option value="${Trip_id}">`;
    tableHtml += `${Trip_id}`;
    tableHtml += "</option>";
  });

  option.innerHTML = tableHtml;
}

/*const addBtn = document.querySelector("#add-name-btn");
    
    document
      .querySelector("table tbody")
      .addEventListener("click", function (event) {
        //console.log(event.target);
        if (event.target.className === "delete-row-btn") {
          deleteRowById(event.target.dataset.id);
        }
        if (event.target.className === "edit-row-btn") {
          HandleEditRow(event.target.dataset.id);
        }
      });
    
    function deleteRowById(id) {
      fetch(`http://localhost:5070/delete/` + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            location.reload();
          }
        });
    }
    
    const updateBtn = document.querySelector("#update-row-btn");
    const searchBtn = document.querySelector("#search-btn");
    
    searchBtn.onclick = function () {
      const searchValue = document.querySelector("#search-input").value;
    
      fetch("http://localhost:5070/search/" + searchValue)
        .then((response) => response.json())
        .then((data) => loadHTMLTable(data["data"]));
    };
    
    function HandleEditRow(id) {
      const updateSection = document.querySelector("#update-row");
      updateSection.hidden = false;
      document.querySelector("#update-name-input").dataset.id = id;
    }
    
    updateBtn.onclick = function () {
      const updateNameInput = document.querySelector("#update-name-input");
    
      fetch("http://localhost:5070/update", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: updateNameInput.dataset.id,
          name: updateNameInput.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            location.reload();
          }
        });
    };
    */

/*function insertRowIntoTable(data) {
      const table = document.querySelector("table tbody");
      const isTableData = table.querySelector(".no-data");
      let tableHtml = "<tr>";
    
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          tableHtml += `<td>${data[key]}</td>`;
        }
      }
    
      tableHtml += `<td><button class="delete-row-btn" data-id=${data.id}>DELETE</td>`;
      tableHtml += `<td><button class="edit-row-btn" data-id=${data.id}>edit</td>`;
    
      tableHtml += "</tr>";
    
      if (isTableData) {
        table.innerHTML = tableHtml;
      } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
      }
    }
    
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5010/getAll_3")
    .then((response) => response.json())
    .then((data) => loadHTMLTable_tr(data["data"]));
});

function loadHTMLTable_tr(data) {
  const table = document.querySelector("table tbody");

  console.log(data);

  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='6'>NO DATA</td></tr>";
    return;
  }
  let tableHtml = "";
  data.forEach(function ({
    Trip_id,
    Location,
    price,
    vichle,
    hotel_name,
    e_id,
  }) {
    tableHtml += "<tr>";
    tableHtml += `<td>${Trip_id}</td>`;
    tableHtml += `<td>${Location}</td>`;
    tableHtml += `<td>${price}</td>`;
    tableHtml += `<td>${vichle}</td>`;
    tableHtml += `<td>${hotel_name}</td>`;
    tableHtml += `<td>${e_id}</td>`;
    tableHtml += "</tr>";
  });

  table.innerHTML = tableHtml;
}
*/
