let transactions = [];

// agrupar informações de uma transição especifica.
function createTransactionContainer(id) {
  const container = document.createElement("div");
  container.classList.add("transaction");
  container.id = `transaction-${id}`;
  return container;
}

function createTransactionTitle(name) {
  const title = document.createElement("span");
  title.classList.add("transaction-title");
  title.textContent = name;
  return title;
}

function createTransactionAmount(amount) {
  const span = document.createElement("span");

  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });
  const formatedAumont = formater.format(amount);

  if (amount > 0) {
    span.textContent = `${formatedAumont} C`;
    span.classList.add("transaction-amount", "credit");
  } else {
    span.textContent = `${formatedAumont} D`;
    span.classList.add("transaction-amount", "debit");
  }

  return span;
}

function createEditTransactionBtn(transaction) {
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Editar";
  editBtn.addEventListener("click", () => {
    document.querySelector("#id").value = transaction.id;
    document.querySelector("#name").value = transaction.name;
    document.querySelector("#amount").value = transaction.amount;
  });

  return editBtn;
}

function createDeleteTransactionBtn(id) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Excluir";
  deleteBtn.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    });
    deleteBtn.parentElement.remove();
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1);
    updateBalance();
  });

  return deleteBtn;
}

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id);
  const title = createTransactionTitle(transaction.name);
  const amount = createTransactionAmount(transaction.amount);
  const editBtn = createEditTransactionBtn(transaction);
  const deleteBtn = createDeleteTransactionBtn(transaction.id);

  document.querySelector("#transactions").append(container);
  container.append(title, amount, editBtn, deleteBtn);
}

async function saveTransaction(ev) {
  ev.preventDefault();

  const id = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const amount = parseFloat(document.querySelector("#amount").value);

  if (id) {
    // editar transação com esse id
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const transaction = await response.json();
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1, transaction);
    document.querySelector(`#transaction-${id}`).remove();
    renderTransaction(transaction);
  } else {
    // criar nova transação
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify({ name, amount }),
      headers: {
        "Content-Type": "applicationjson",
      },
    });

    const transaction = await response.json();
    transactions.push(transaction);
    renderTransaction(transaction);
  }

  ev.target.reset();
  updateBalance();
}

async function fecthTransations() {
  return await fetch("http://localhost:3000/transactions").then((response) =>
    response.json()
  );
}

function updateBalance() {
  const balanceSpan = document.querySelector("#balance");
  const balance = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );
  const formarter = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });

  balanceSpan.textContent = formarter.format(balance);
}

async function setup() {
  const results = await fecthTransations();
  transactions.push(...results);
  transactions.forEach(renderTransaction);
  updateBalance();
}

document.addEventListener("DOMContentLoaded", setup);
document.querySelector("form").addEventListener("submit", saveTransaction);
