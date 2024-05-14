function Admin() {
    // Obtener el valor del campo de entrada de rol
    var rol = document.getElementById("rol").value;

    // Comprobar si el rol es de administrador
    if (rol === "admin") {
        // Redirigir a la página de administrador
        window.location.href = "admin.html";
    } else {
        alert("Solo los administradores pueden acceder a esta página.");
    }
}

function Usuario() {
    // Obtener el valor del campo de entrada de rol
    var rol = document.getElementById("rol").value;

    // Comprobar si el rol es de usuario
    if (rol === "usuario") {
        // Redirigir a la página de usuario
        window.location.href = "usuario.html";
    } else {
        alert("Solo los usuarios pueden acceder a esta página.");
    }
}
function redirect() {
    window.location.href = 'pagina_admin.html';
}
