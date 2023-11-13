document.getElementById("delete_button").addEventListener("click", function () {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
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
                            text: "Your user has been deleted.",
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
                        text: "An error occurred while trying to delete the user.",
                        icon: "error"
                    });
                });
        } else if (
            confirmacion.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "CANCELADO",
                text: "Your user is safe :)",
                icon: "error"
            });
        }
    });

    // Esta línea se ejecutará inmediatamente después de mostrar la alerta,
    // pero no después de la eliminación del usuario.
    console.log("Alerta mostrada");
});

