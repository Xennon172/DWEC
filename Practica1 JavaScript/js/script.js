const users = [
    {
        nombre: "Evaristo",
        apellido1: "Mateo",
        apellido2: "Poveda",
        telefono: "660660660",
        correo: "evaristo@gmail.com",
        genero: "hombre",
    },
    {
        nombre: "Pepe",
        apellido1: "Lopez",
        apellido2: "Peñalver",
        telefono: "661770771",
        correo: "pepe@gmail.com",
        genero: "hombre",

    },
    {
        nombre: "Maria",
        apellido1: "Perez",
        apellido2: "Aguado",
        telefono: "661770321",
        correo: "maria@gmail.com",
        genero: "mujer",
    },
    {
        nombre: "Alba",
        apellido1: "Salar",
        apellido2: "Mendez",
        telefono: "632770322",
        correo: "alba@gmail.com",
        genero: "mujer",
    },
    {
        nombre: "Maria Jose",
        apellido1: "Rabasco",
        apellido2: "Fernandez",
        telefono: "612770233",
        correo: "marijota@gmail.com",
        genero: "mujer",
    },
];

let userList = [...users];
let tableBody;
let filterInput;

window.onload = function () {

    filterInput = document.querySelector(".filtro");
    filterInput.addEventListener("input", filterUsers);

    tableBody = document.querySelector(".tabla_contenido");
    loadUsers(tableBody, userList);

};

// filtra usuarios
function filterUsers() {
    const filterText = filterInput.value.toLowerCase();
    tableBody.innerHTML = "";

    const deletedUser = userList.filter(user => {
        return (
            user.nombre.toLowerCase().includes(filterText) ||
            user.apellido1.toLowerCase().includes(filterText) ||
            filterText.length < 3
        );
    });
    loadUsers(tableBody, deletedUser);
}


// Carga usuarios en la tabla
function loadUsers(tableBody, userList) {
    userList.forEach(user => {
        addRow(tableBody, user);
    });
}

//Agrega una fila de usuario a la tabla de inicio
function addRow(tableBody, user) {
    const row = document.createElement("tr");
    row.classList.add("tabla_fila");
    row.innerHTML = `
    <td class="tabla_fila_nombre">${user.nombre}</td>
    <td class="tabla_fila_apellido1">${user.apellido1}</td>
    <td class="tabla_fila_apellido2">${user.apellido2}</td>
    <td class="tabla_fila_telefono">${user.telefono}</td>
    <td class="tabla_fila_correo">${user.correo}</td>
    <td class="tabla_fila_genero">${user.genero}</td>
    <input type="button" value="X" onclick="selectedUser(this)"></td>
    `;

    tableBody.appendChild(row); //Añadirlo por debajo del hijo. 

}

// Obtiene el elemento tr más cercano y monta el usuario
function selectedUser(button) {
    const row = button.closest("tr");
    let user = {
        nombre: row.querySelector(".tabla_fila_nombre").textContent,
        apellido1: row.querySelector(".tabla_fila_apellido1").textContent,
        apellido2: row.querySelector(".tabla_fila_apellido2").textContent,
        telefono: row.querySelector(".tabla_fila_telefono").textContent,
        correo: row.querySelector(".tabla_fila_correo").textContent,
        genero: row.querySelector(".tabla_fila_genero").textContent
    }
    removeUser(user)
}

// Elimina el usuario
function removeUser(deletedUser) {
    tableBody.innerHTML = "";
    userList = userList.filter(user => {
        return (
            user.correo !== deletedUser.correo
        );
    })
    loadUsers(tableBody, userList);
}





