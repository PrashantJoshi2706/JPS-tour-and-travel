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
