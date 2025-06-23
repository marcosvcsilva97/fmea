const data = [];
const rowsPerPage = 5;
let currentPage = 1;

// Gerar dados fictícios
for (let i = 1; i <= 50; i++) {
  data.push({
    id: i,
    nome: `Usuário ${i}`,
    email: `usuario${i}@email.com`,
    telefone: `+55 (11) 9${1000 + i}-0000`,
    endereco: `Rua ${i}`,
    cidade: `Cidade ${i}`,
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
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>${user.telefone}</td>
        <td>${user.endereco}</td>
        <td>${user.cidade}</td>
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

// Inicializar
renderTable();
