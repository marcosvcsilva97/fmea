const data = [];
const rowsPerPage = 5;
let currentPage = 1;

for (let i = 1; i <= 50; i++) {
  data.push({
    id: i,
    codeip: `PIE-NSSS-IHRSS-01`,
    categoria: `IHRSS`,
    origem: `NSSS`,
    descricao: `Feedwater system`,
    se: `SE-2`,
  });
}

function renderTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedData = data.slice(start, end);

  for (const user of paginatedData) {
    const row = `
      <tr>
        <td>${user.id}</td>
        <td>${user.codeip}</td>
        <td>${user.categoria}</td>
        <td>${user.origem}</td>
        <td>${user.descricao}</td>
        <td>${user.se}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  }

  document.getElementById("pageNumber").innerText = `Página ${currentPage}`;
}

function nextPage() {
  if (currentPage * rowsPerPage < data.length) {
    currentPage++;
    renderTable();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

renderTable();
