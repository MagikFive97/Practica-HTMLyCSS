window.onload = function(){
  
    inicio();
};

const usuarios = [ 
  {nombre: "fran", apellido: "birlanga", email: "franbirlanga@hotmail.com", sexo: "H", telefono: 654654654, contraseña: "contraseñia"},
  {nombre: "Juan", apellido: "Sanchez", email: "birlanga@hotmail.com", sexo: "H", telefono: 654654654, contraseña: "contraseñia"},
  {nombre: "Luis", apellido: "lorca", email: "langa@hotmail.com", sexo: "H", telefono: 654654654, contraseña: "contraseñia"},
  {nombre: "Ruben", apellido: "soriano", email: "frasor@gmail.com", sexo: "H", telefono:654654654, contraseña: "aeo"}
];

function borrar(contador){

  const lista_generada = document.querySelector(`[id="generada`+contador+`"]`);
  lista_generada.innerHTML = ``;
}

function buscarNombre(){

  var input, filter, table, tr, td, i, txtValue , txtValue1;
  input = document.getElementById("buscador");
  filter = input.value.toUpperCase();
  table = document.getElementById("importar");
  tr = table.getElementsByTagName("tr");

  for(i = 0; i < tr.length; i++){
    if(filter.length < 3){
      tr[i].style.display = "";

      }else{
      td = tr[i].getElementsByTagName("td")[0];
      td1 = tr[i].getElementsByTagName("td")[1];
      if(td){
        txtValue = td.textContent;
        txtValue1 = td1.textContent;
        
        if(txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 ){
          tr[i].style.display = "";
          
        }else {
          tr[i].style.display = "none";    
        }
      }
    }
  }
}

function inicio(){

  var tbl = document.getElementById("importar");
  for(let i = 0; i<usuarios.length; i++){
  tbl.innerHTML += `<tr id = "generada${i}">
                      <td>${usuarios[i].nombre}</td>
                      <td>${usuarios[i].apellido}</td>
                      <td>${usuarios[i].email}</td>
                      <td>${usuarios[i].sexo}</td>
                      <td>${usuarios[i].telefono}</td>
                      <td><button id="borrar" onclick="borrar(${i})" class="boton">Borrar Elemento</button></td>
                  </tr>`;
  }
}
