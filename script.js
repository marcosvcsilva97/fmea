const data = [];
const rowsPerPage = 10;
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
        <td id="actions">
          <button class="BtnEdit">Editar</button>
          <button>Excluir</button>
        </td>
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

// Modal Novo Cadastro
const switchModalNew = () => {
    const modalNew = document.querySelector('.modal-new')
    const actualStyle = modalNew.style.display
    if(actualStyle == 'block') {
      modalNew.style.display = 'none'
    }
    else {
      modalNew.style.display = 'block'
    }
  }
  
  const btnNew = document.querySelector('.BtnNew')
  btnNew.addEventListener('click', switchModalNew)
  
  window.onclick = function(event) {
    const modalNew = document.querySelector('.modal-new')
    if (event.target == modalNew) {
      switchModalNew()
    }
  }

  //Modal Editar Cadastro
  // const switchModalEdit = () => {
  //   const modal = document.querySelector('.modal-edit')
  //   const actualStyle = modal.style.display
  //   if(actualStyle == 'block') {
  //     modal.style.display = 'none'
  //   }
  //   else {
  //     modal.style.display = 'block'
  //   }
  // }
  
  // const btnEdit = document.querySelector('.BtnEdit')
  // btnEdit.addEventListener('click', switchModalEdit)
  
  // window.onclick = function(event) {
  //     const modal = document.querySelector('.modal-edit')
  //   if (event.target == modal) {
  //     switchModalEdit()
  //   }
  // }