// script.js
function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Lista de usuarios y contraseñas (en un entorno de producción, esto debería manejarse en el lado del servidor)
    var users = [
        { username: 'cris13ca@hotmail.com'},
        { username: 'luzpere@hotmail.com'},
        // Agrega más usuarios según sea necesario
    ];

    // Validación de ejemplo (compara con la lista de usuarios)
    var isValidUser = users.some(function(user) {
        return user.username === username;
    });

    if (isValidUser) {
        alert('Inicio de sesión exitoso');
        location.href ="https://www.youtube.com/watch?v=nAOm_C7d9bk";
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
}