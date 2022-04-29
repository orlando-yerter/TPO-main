

function validar(){
    var form =document.form;   
      if(form.nombre.value==0){
        alert("el nombre esta vacio");
        form.nombre.value= "";
        form.nombre.focus();
        return 0;
      }
      else if(form.apellido.value==0){
        alert("apellido  esta vacio");
        form.apellido.value= "";
        form.apellido.focus();
        return 0;
      }    
     
      else if(form.mail.value==0){
        alert("el mail  esta vacio");
        form.mail.value= "";
        form.mail.focus();
        return 0;
    }   
        alert(" todos los datos se han validados correctamente");
        document.form.mostrar();
}


function mostrar(){
                   var form =document.form;      
                   escribir = document.getElementById("cajita");
                   nombre = "<h1>" + document.form.nombre.value + "</h1>";
                   apellido = "<h3>" + document.form.apellido.value + "</h3>";
                   tel = "<h3>" + document.form.tel.value + "</p>";
                   mail = "<h3>" + document.form.mail.value + "</p>";
                   escribir.innerHTML = nombre + apellido + tel + mail;
}
window.onload = function() {
  document.form.onclick = mostrar();
  }


