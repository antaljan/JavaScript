// Funktion für Eingabefenster, rechnet falls eine operator gedrückt wird
function rechnen(event){
	let key = event.key;
	let text1=document.getElementById("hier").innerText;
	let text2=document.getElementById("eingabebox").value;
	var nummer1=parseFloat(text1);
	var nummer2=parseFloat(text2);
	var ergebniss=0.0;
	if (key=="+"){
		ergebniss=nummer1+nummer2
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText=ergebniss;
		return false;
	}
	if (key=="-"){
		ergebniss=nummer1-nummer2
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText=ergebniss;
		return false;
	}
	if (key=="/"){
		ergebniss=nummer1/nummer2
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText=ergebniss;
		return false;
	}
	if (key=="*"){
		ergebniss=nummer1*nummer2
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText=ergebniss;
		return false;
	}
	if (key=="c"){
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText="0.0";
		return false;
	}
	return true;
}
// Funktion für die Tasten
function myFunction(text){
	let text1=document.getElementById("hier").innerText;
	let text2=document.getElementById("eingabebox").value;
	var nummer1=parseFloat(text1);
	var nummer2=parseFloat(text2);
	if (text=="c"){
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText="0.0";
	}
	if (text=="+"){
		ergebniss=nummer1+nummer2
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText=ergebniss;
	}
	if (text=="-"){
		ergebniss=nummer1-nummer2
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText=ergebniss;
	}
	if (text=="/"){
		ergebniss=nummer1/nummer2
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText=ergebniss;
	}
	if (text=="*"){
		ergebniss=nummer1*nummer2
		document.getElementById("eingabebox").value="";
		document.getElementById("hier").innerText=ergebniss;
	}
	if (text=="0"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="1"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="2"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="3"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="4"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="5"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="6"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="7"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="8"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="9"){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
	if (text=="."){
		document.getElementById("eingabebox").value = document.getElementById("eingabebox").value + text;	
	}
}