const tablature_create = async () => {
    // Restringir caracteres
    function restrictInput(event) {
        const allowedChars = /^[0-9\/\\hprvb]$/; // Expresión regular para los caracteres permitidos
        const inputValue = event.target.value;
        const lastChar = inputValue[inputValue.length - 1];
        if (!allowedChars.test(lastChar)) {
            event.target.value = inputValue.slice(0, -1); // Eliminar el último carácter no permitido
        }
    }

    // Configuracion de la notificacion
    const notification = document.getElementById('notification');
    const titlenot = document.getElementById("title-not");
    const descnot = document.getElementById("desc-not");

    // Crea la tabla y agrega las 6 filas iniciales
    const tabEditor = document.createElement("div");
    tabEditor.id = "tab-editor";
    let tabla = document.createElement("table");
    tabla.id = "tab";
    for (let i = 0; i < 6; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            let celda = document.createElement("td");
            let input = document.createElement("input");
            input.type = "text";
            input.min = 0;
            input.value = "";
            input.id = "tab-input";
            input.placeholder = "-";
            input.maxLength = 2; // Máximo de 2 caracteres
            input.addEventListener("input", restrictInput); // Agregar el evento de restricción de caracteres
            celda.appendChild(input);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    // Crea el botón y agrega un event listener para agregar columnas a la tabla
    let botonAgregar = document.getElementById("tab-add");
    botonAgregar.addEventListener("click", () => {
        let filas = tabla.getElementsByTagName("tr");
        for (let i = 0; i < filas.length; i++) {
            let celda = document.createElement("td");
            let input = document.createElement("input");
            input.type = "text";
            input.min = 0;
            input.value = "";
            input.id = "tab-input";
            input.placeholder = "-"
            input.maxLength = 2; // Máximo de 2 caracteres
            celda.appendChild(input);
            filas[i].appendChild(celda);
        }
    });
    document.body.addEventListener("keydown", (event) => {
        if (event.isComposing || event.keyCode === 81) {
            let filas = tabla.getElementsByTagName("tr");
            for (let i = 0; i < filas.length; i++) {
                let celda = document.createElement("td");
                let input = document.createElement("input");
                input.type = "text";
                input.min = 0;
                input.value = "";
                input.id = "tab-input";
                input.placeholder = "-"
                input.maxLength = 2; // Máximo de 2 caracteres
                celda.appendChild(input);
                filas[i].appendChild(celda);
            }
        }
        // do something
    });

    // Crea el botón para generar la tablatura y agregar un event listener
    let botonTablatura = document.getElementById("tab-copy");
    let TAB_DOC = ""
    botonTablatura.addEventListener("click", async () => {
        let filas = tabla.getElementsByTagName("tr");
        let tablatura = "";
        const notas = ["E", "B", "G", "D", "A", "E"]; // Notas de las cuerdas

        for (let i = 0; i < filas.length; i++) {
            let celdas = filas[i].getElementsByTagName("td");
            tablatura += notas[i] + "|"; // Agrega la nota de la cuerda

            for (let j = 0; j < celdas.length; j++) {
                let valor = celdas[j].getElementsByTagName("input")[0].value;
                if (valor == "") {
                    valor = "-";
                }
                tablatura += valor + "-";
            }
            tablatura = tablatura.slice(0, -1); // Elimina el guion al final de la fila
            tablatura += "\n"; // Agrega un salto de línea al final de cada fila
            TAB_DOC = tablatura
        }

        navigator.clipboard.writeText(tablatura)
            .then(() => {
                // Notificación
                notification.classList.remove('hidden', 'animate__fadeOut');
                notification.classList.add('animate__fadeIn');
                titlenot.textContent = "Copiada correctamente al portapapeles.";
                descnot.textContent = "La tablatura se encuentra en tu portapapeles.";
                setTimeout(() => {
                    notification.classList.add('animate__fadeOut');
                    notification.classList.remove('animate__fadeIn');
                    setTimeout(() => {
                        notification.classList.add('hidden');
                    }, 500);
                }, 1500);
            })
            .catch(err => {
                // Notificación
                notification.classList.remove('hidden', 'animate__fadeOut');
                notification.classList.add('animate__fadeIn');
                titlenot.textContent = "Ocurrió un error al copiar al portapapeles.";
                descnot.textContent = "Podría ser un error de tu navegador o del código 🤔";
                setTimeout(() => {
                    notification.classList.add('animate__fadeOut');
                    notification.classList.remove('animate__fadeIn');
                    setTimeout(() => {
                        notification.classList.add('hidden');
                    }, 500);
                }, 1500);
            });
    });



    // Notificacion
    // notification.classList.remove('hidden', 'animate__fadeOut');
    // notification.classList.add('animate__fadeIn');
    // titlenot.textContent = "Guardado correctamente."
    // descnot.textContent = "La tablatura se guardo en tu navegador."
    // setTimeout(() => {
    //     notification.classList.add('animate__fadeOut');
    //     notification.classList.remove('animate__fadeIn');
    //     setTimeout(() => {
    //         notification.classList.add('hidden');
    //     }, 500)
    // }, 1500); // 2500 milisegundos = 2.5 segundos

    let number = Math.floor(Math.random() * 6)
    if (number == 1) {
        // Notificacion
        notification.classList.remove('hidden', 'animate__fadeOut');
        notification.classList.add('animate__fadeIn');
        titlenot.textContent = "Continua el trabajo donde lo dejaste."
        descnot.textContent = "Puedes borrar tu tablatura o tambien seguirla."
        setTimeout(() => {
            notification.classList.add('animate__fadeOut');
            notification.classList.remove('animate__fadeIn');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 500)
        }, 1500);
    }
    let btntouch = false;
    document.getElementById("tab-new").addEventListener("click", () => {
        if (!(btntouch)) {
            setTimeout(() => {
                btntouch = true;
            }, 300)
            document.getElementById("tab-new").style.backgroundColor = "rgb(185 28 28)"
            document.getElementById("reset-tab").textContent = "Estas seguro?"
            setTimeout(() => {
                btntouch = false
                document.getElementById("tab-new").style.backgroundColor = "rgb(252 211 77)"
                document.getElementById("reset-tab").textContent = "Reiniciar tablatura"
            }, 5000)
        }
        if (btntouch) {
            let filas = tabla.getElementsByTagName("tr");
            for (let i = 0; i < filas.length; i++) {
                let celdas = filas[i].getElementsByTagName("td");
                for (let j = 0; j < celdas.length; j++) {
                    let valor = "";
                    celdas[j].getElementsByTagName("input")[0].value = valor;
                }
            }
            localStorage.getItem("tab") == "";
            // Notificacion
            document.getElementById("tab-new").style.backgroundColor = "rgb(252 211 77)"
            document.getElementById("reset-tab").textContent = "Reiniciar tablatura"
            notification.classList.remove('hidden', 'animate__fadeOut');
            notification.classList.add('animate__fadeIn');
            titlenot.textContent = "La tablatura ha sido borrada correctamente."
            descnot.textContent = "Borraste definitivamente tu tablatura, no es recuperable."
            setTimeout(() => {
                notification.classList.add('animate__fadeOut');
                notification.classList.remove('animate__fadeIn');
                setTimeout(() => {
                    notification.classList.add('hidden');
                }, 500)
            }, 1500); // 2500 milisegundos = 2.5 segundos
            setTimeout(() => {
                btntouch = false
            }, 200)
        }
    })
    // Agrega la tabla y los botones al elemento tabEditor
    tabEditor.appendChild(tabla);

    // Agrega el elemento tabEditor al cuerpo del documento
    document.body.appendChild(tabEditor);
}

tablature_create();