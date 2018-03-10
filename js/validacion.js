function validacion(formTest) {

		valor1 = document.getElementById("cedula").value;
		if( valor1 == null || valor1.length == 0 || !(/^\d{9}$/.test(valor1) ) ) {		  
		  alert('[ERROR] El campo Cedula Vacio - DIGITE UN NUMERO DE 9 DIGITOS');
		  return false;		 
		}
		else 
		
		valor2 = document.getElementById("nombres").value;
		if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
		  alert('[ERROR] El campo Nombre Vacio');
		  		  return false;		  
		}
		else

		valor3 = document.getElementById("apellidos").value;
		if (valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3)) {
		  alert('[ERROR] El campo Apellido Vacio');
		  		  return false;		 
		}
		else 

		valor4 = document.getElementById("estudiante").value;
		if (valor4 == null || valor4.length == 0 || /^\s+$/.test(valor4)) {
		  alert('[ERROR] Seleccione una opcion de estudiante');
		  		  return false;		  
		}
		else 
/********sexo***************/
		sexo = document.getElementsByName("sexo");
			 
					var seleccionado = false;
			for(var i=0; i<sexo.length; i++) {    
			  if(sexo[i].checked) {
			    seleccionado = true;
			    break;
			  }
			}
			 
			if(!seleccionado) {
				alert('[ERROR] seleccione un sexo');
			  return false;
			}
		else


		valor6 = document.getElementById("fecha").value;
		if (valor6 == null || valor6.length == 0 || /^\s+$/.test(valor6)) {		  
		  alert('[ERROR] Seleccione fecha de cumple');
		  		  return false;	
		}	
		else

		valor7 = document.getElementById("rango").value;
		if (valor7 == null || valor7 == 0|| valor7.length == 0 || /^\s+$/.test(valor7)) {
		  alert('[ERROR] Seleccione un rango');
		  		  return false;			
		}
		else

		valor8 = document.getElementById("email").value;
		if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor8)) ) {
		  alert('[ERROR] escriba un e-mail correcto');
		  		  return false;	
		}
		else

		valor9 = document.getElementById("url").value;
		if (!(/^www.\w+.\w+$/gi).test(valor9)) {		   
		  alert('[ERROR] escriba una url');
		  		  return false;
		}
		else 

		valor10 = document.getElementById("texto").value;
		if (valor10 == null || valor10.length == 0 || /^\s+$/.test(valor10)) {
		  alert('[ERROR] dijite texto');
		  		  return false;		  
		}
			
			var n=0;

		    var table = document.getElementById("myTable");

		    var row = table.insertRow(1);
		    var cell1 = row.insertCell(0);
		    var cell2 = row.insertCell(1);
		    var cell3 = row.insertCell(2);
		    var cell4 = row.insertCell(3);
		    var cell5 = row.insertCell(4);
		    var cell6 = row.insertCell(5);
		    var cell7 = row.insertCell(6);
		    var cell8 = row.insertCell(7);
		    var cell9 = row.insertCell(8);
		    var cell10 = row.insertCell(9);
		    var cell11 = row.insertCell(10);

		    cell1.innerHTML = n+1;


		var radio_1=document.getElementById("valor_radio_1").checked;
		var radio_2=document.getElementById("valor_radio_2").checked;

			var Valor_radio;
						 if (radio_1==true) {
						 	Valor_radio="M"
						 }else{
							  if (radio_2==true) {
							 	Valor_radio="F"
							 }else{
							 	alert("!Error Vinculación!");
							 	validar_todo=false;
							 }
						}


		    var valor2 = document.getElementById("cedula").value;
		    cell2.innerHTML = valor2;
		    var valor3 = document.getElementById("nombres").value;		    
		    cell3.innerHTML = valor3;
		    var valor4 = document.getElementById("apellidos").value; 
			cell4.innerHTML = valor4;
			var valor5 = document.getElementById("estudiante").value;
		    cell5.innerHTML = valor5;
		    /*var valor6 = document.getElementsByName("sexo").value;*/
		    cell6.innerHTML = Valor_radio;
		    var valor7 = document.getElementById("fecha").value; 
		    cell7.innerHTML = valor7;
		    var valor8 = document.getElementById("rango").value; 
		    cell8.innerHTML = valor8;
		    var valor9 = document.getElementById("email").value; 
		    cell9.innerHTML = valor9;
		    var valor10 = document.getElementById("url").value; 
		    cell10.innerHTML = valor10;
		    var valor11 = document.getElementById("texto").value; 
		    cell11.innerHTML = valor11;

		    document.getElementById("formTest").reset();

		    return true;


		

}

function search() {

			var input, filter, table, tr, td, i;
			  input = document.getElementById("myInput");
			  filter = input.value.toUpperCase();
			  table = document.getElementById("myTable");
			  tr = table.getElementsByTagName("tr");
			  for (i = 0; i < tr.length; i++) {
			    td = tr[i].getElementsByTagName("td")[2];
			    if (td) {
			      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
			        tr[i].style.display = "";
			      } else {
			        tr[i].style.display = "none";
			      }
			    }       
			  }

		}



		function myDeleteFunction() {
		    document.getElementById("myTable").deleteRow(1);
		}