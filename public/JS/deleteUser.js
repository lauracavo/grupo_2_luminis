document.getElementById("delete_button").addEventListener("click", function () {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¡Esta accion no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "BORRAR",
        cancelButtonText: "CANCELAR",
        reverseButtons: true
    }).then((confirmacion) => {
        if (confirmacion.isConfirmed) {
            fetch("/users/eliminarUsuario", {
                method: "POST",
            })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        swalWithBootstrapButtons.fire({
                            title: "USUARIO ELIMINADO",
                            text: "El usuario se ha eliminado",
                            icon: "success"
                        }).then(() => {
                            window.location.href = "/";
                        });
                    } else {
                        swalWithBootstrapButtons.fire({
                            title: "Error",
                            text: result.message || "NO FUE POSIBLE ELIMINAR USUARIO",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    console.error("Error al eliminar usuario:", error);
                    swalWithBootstrapButtons.fire({
                        title: "ERROR AL ELIMINAR USUARIO",
                        text: "Un error ha ocurrido al intentar borrar el usuario",
                        icon: "error"
                    });
                });
        } else if (
            confirmacion.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "CANCELADO",
                text: "La accion se ha cancelado",
                icon: "error"
            });
        }
    });

    // Esta línea se ejecutará inmediatamente después de mostrar la alerta,
    // pero no después de la eliminación del usuario.
    console.log("Alerta mostrada");
});

