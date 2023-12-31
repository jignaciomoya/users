// TO DO:
// *1 CREAR CONTENEDOR PARA CADA USUARIO
// *2 APPENDCHILD DEL ID EXISTENTE
// *3 FETCH PARA TRAER LOS DATOS (MIRAR SINCRONÍA)

const listaUsuarios = getElementByIt('listaUsuarios');

const showData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then((data) => {
            getData(data);
        })
        .catch((error) => {
            console.log('Error, no se pudo procesar');
        });
};
const addData = () =>{
    const usersAge = data.map(function(user) {
        return  {
            ...user,
            
        }

    })
}
const getData = (users) => {
    for (let i = 0; i < users.length; i++) {
        const user = document.createElement('li');
        const userData = document.createElement('p');
        const container = `
         Nombre: ${users[i].name}
         Nombre de usuario: ${users[i].username} 
         Móvil: ${users[i].phone} 
         Email: ${users[i].email} 
         Empresa: ${users[i].company.name} 
         Dirección: ${users[i].address.street}, ${users[i].address.suite}, ${users[i].address.city}
         `;
        userData.textContent = container;
        user.appendChild(userData);
        const usersArray = document.getElementById('listaUsuarios').appendChild(user);
    }
};



showData();