
window.onload = function () {
    inicio();
};

//EL ID COMENZARA EN 0
let usuarios = [
    {
        id: 0,
        nombre: "fran",
        apellido: "birlanga",
        email: "franbirlanga@hotmail.com",
        sexo: "H",
        telefono: 654654654,
        password: "contraseñia"
    },
    {
        id: 1,
        nombre: "Juan",
        apellido: "Sanchez",
        email: "birlanga@hotmail.com",
        sexo: "H",
        telefono: 654654654,
        password: "contraseñia"
    },
    {
        id: 2,
        nombre: "Luis",
        apellido: "lorca",
        email: "langa@hotmail.com",
        sexo: "H",
        telefono: 654654654,
        password: "contraseñia"
    },
    {
        id: 3,
        nombre: "Ruben",
        apellido: "soriano",
        email: "frasor@gmail.com",
        sexo: "H", telefono: 654654654,
        password: "aeo"
    }
];

function borrar(contador) {
    const lista_generada = document.querySelector(`[id="generada` + contador + `"]`);
    lista_generada.innerHTML = ``;
}


function editar(contador){

    //document.getElementById("guardar").style.display="block";

    let nombre = document.getElementById(`nombre${contador}`);
    let apellido = document.getElementById(`apellido${contador}`);
    let email = document.getElementById(`email${contador}`);
    let sexo = document.getElementById(`sexo${contador}`);
    let telefono = document.getElementById(`telefono${contador}`);

    let nombre_datos = nombre.innerHTML;
    let apellido_datos = apellido.innerHTML;
    let email_datos = email.innerHTML;
    let sexo_datos = sexo.innerHTML;
    let telefono_datos = telefono.innerHTML;
    
    nombre.innerHTML=`<input type='text' id='nombre${contador}' value='${nombre_datos}'>`;
    apellido.innerHTML=`<input type='text' id='apellido${contador}' value='${apellido_datos}'>`;
    email.innerHTML=`<input type='text' id='email${contador}' value='${email_datos}'>`;
    sexo.innerHTML=`<input type='text' id='sexo${contador}' value='${sexo_datos}'>`;
    telefono.innerHTML=`<input type='text' id='telfono${contador}' value='${telefono_datos}'>`;
}

function guardar(contador){

    
    let nombre_val = document.getElementById(`nombre${contador}`).firstChild.value;
    let apellido_val = document.getElementById(`apellido${contador}`).firstChild.value;
    let email_val = document.getElementById(`email${contador}`).firstChild.value;
    let sexo_val = document.getElementById(`sexo${contador}`).firstChild.value;
    let telefono_val = document.getElementById(`telefono${contador}`).firstChild.value;

    document.getElementById(`nombre${contador}`).innerHTML=nombre_val;
    document.getElementById(`apellido${contador}`).innerHTML=apellido_val;
    document.getElementById(`email${contador}`).innerHTML=email_val;
    document.getElementById(`sexo${contador}`).innerHTML=sexo_val;
    document.getElementById(`telefono${contador}`).innerHTML=telefono_val;

//Actualizaremos la informacion para Guardar cambios en el objeto.
    for (let i = 0; i < usuarios.length; i++) {
        //if devuelve true
        if (usuarios[i].id === i) {
            usuarios[i].nombre = nombre_val;
            usuarios[i].apellido = apellido_val;
            usuarios[i].email = email_val;
            usuarios[i].sexo = sexo_val;
            usuarios[i].telefono = telefono_val;
            //MOSTRAR LOS DATOS EN CONSOLA
            console.log(usuarios[i].id +" "+ usuarios[i].nombre +" "+ usuarios[i].apellido +" "+ usuarios[i].email 
            +" "+ usuarios[i].sexo +" "+ usuarios[i].telefono);
        }
        
    }

}

function buscarNombre() {

    var input, filter, table, tr, td, i, txtValue, txtValue1;
    input = document.getElementById("buscador");
    filter = input.value.toUpperCase();
    table = document.getElementById("importar");
    tr = table.getElementsByTagName("tr");
    

    for (i = 0; i < tr.length; i++) {
        if (filter.length < 3) {
            tr[i].style.display = "";

        } else {
            td = tr[i].getElementsByTagName("td")[0];
            td1 = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent;
                txtValue1 = td1.textContent;

                if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";

                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

function inicio() {
    
    var tbl = document.getElementById("importar");
    for (let i = 0; i < usuarios.length; i++) {
        tbl.innerHTML += `<tr id = "generada${i}">
                      <td id ="nombre${i}">${usuarios[i].nombre}</td>
                      <td id ="apellido${i}">${usuarios[i].apellido}</td>
                      <td id ="email${i}">${usuarios[i].email}</td>
                      <td id ="sexo${i}">${usuarios[i].sexo}</td>
                      <td id ="telefono${i}">${usuarios[i].telefono}</td>
                      <td><button id="borrar" onclick="borrar(${i})" class="boton">Borrar Elemento</button>
                          <button id="editar" onclick="editar(${i})" class="boton">Editar</button>
                          <button id="guardar" onclick="guardar(${i})" class="boton" >Guardar</button>
                      </td>
                  </tr>`;
    }
    
}