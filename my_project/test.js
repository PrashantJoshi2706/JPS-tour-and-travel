document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5070/getAll")
    .then((response) => response.json())
    .then((data) => loadHTMLTable(data["data"]));
});

const addBtn = document.querySelector("#add-name-btn");

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

addBtn.onclick = function () {
  const nameInput = document.querySelector("#name-input");
  const name = nameInput.value;
  const mobInput = document.querySelector("#mob-input");
  const mob = mobInput.value;
  const emaInput = document.querySelector("#email-input");
  const ema = emaInput.value;
  if (name.length < 3) {
    alert("Name length should be more than 3");
    return;
  }
  if (mob.length != 10) {
    alert("Mobile number is not valid");
    return;
  }
  nameInput.value = "";
  mobInput.value = "";
  emaInput.value = "";

  fetch("http://localhost:5070/insert", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name: name, mob: mob, ema: ema }),
  })
    .then((response) => response.json())
    .then((data) => insertRowIntoTable(data["data"]));
};

function insertRowIntoTable(data) {
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

function loadHTMLTable(data) {
  const table = document.querySelector("table tbody");

  console.log(data);

  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='6'>NO DATA</td></tr>";
    return;
  }
  let tableHtml = "";
  data.forEach(function ({ c_id, c_name, c_mobile_no, c_email }) {
    tableHtml += "<tr>";
    tableHtml += `<td>${c_id}</td>`;
    tableHtml += `<td>${c_name}</td>`;
    tableHtml += `<td>${c_mobile_no}</td>`;
    tableHtml += `<td>${c_email}</td>`;
    tableHtml += `<td><button class="delete-row-btn" data-id=${c_id}>DELETE</td>`;
    tableHtml += `<td><button class="edit-row-btn" data-id=${c_id}>edit</td>`;
    tableHtml += "</tr>";
  });

  table.innerHTML = tableHtml;
}
