
var copiar;

function copiarTexto(){
    // https://www.youtube.com/watch?v=8tQQqVuUDjg
    const input = document.querySelector(".texto-respuesta");
    const button = document.querySelector(".boton-copiar");
    
    navigator.clipboard.writeText(input.textContent);
    button.textContent='Copiado';

    // console.log(button,input);
}

function respuesta(texto){
    //  idea: https://www.youtube.com/watch?v=I1uGwXFWQuQ

    var elementoP = document.createElement("p");
    // captar atributos:  https://www.youtube.com/watch?v=hgpFU976qQc&t=493s   
    elementoP.setAttribute("class","texto-respuesta"); //ponemos la misma clase que tenia el parrafo en html
    var parrafo = document.createTextNode(texto);

    elementoP.appendChild(parrafo);

    var miDiv = document.querySelector("#textoResultado");
    var antiguoP = document.querySelector(".texto-respuesta");

    miDiv.replaceChild(elementoP,antiguoP);
    

}
// ENCRIPTAR
function funcion1(){
    var texto = document.getElementById('textoObjetivo');
    var tVal = texto.value;
    var cadena="";
    var temp;
    // console.log(textoValor[20] == 'a');
    
    for (let i = 0; i < tVal.length; i++) {
        if ("a" == tVal[i]) {
            temp = "ai";
        }else if("e" == tVal[i]){
            temp = "enter";
        }else if("i" == tVal[i]){
            temp = "imes";
        }else if("o" == tVal[i]){
            temp = "ober";
        }else if("u" == tVal[i]){
            temp = "ufat";
        }else{
            temp = tVal[i];
        }
        cadena += temp;
    }
    copiar = cadena;
    // console.log(cadena);
    respuesta(copiar);
    textoResultado();
}
//DESENCRIPTAR
function funcion2(){
    var texto = document.getElementById('textoObjetivo');
    var tVal = texto.value;
    var cadenaRespuesta = "";
    var i=0;
    var temp="";
    while(i < tVal.length){
        switch (tVal[i]) {
            case "a":
                if(tVal[i+1] == "i"){
                    temp = "a";
                    i += 2;
                }else{
                    i++;
                    temp = tVal[i];
                }
                break;
            case "e":
                if( tVal[i+1]=="n" && tVal[i+2]=="t" && tVal[i+3]=="e" && tVal[i+4]=="r"){
                    temp = "e";
                    i += 5;
                }else{
                    i++;
                    temp = tVal[i];
                }
                break;
            case "i":
                if(tVal[i+1]=="m" && tVal[i+2]=="e" && tVal[i+3]=="s"){
                    temp = "i";
                    i += 4;
                }else{
                    i++;
                    temp = tVal[i];
                }
                break;
            case "o":
                if(tVal[i+1]=="b" && tVal[i+2]=="e" && tVal[i+3]=="r"){
                    temp = "o";
                    i += 4;
                }else{
                    i++;
                    temp = tVal[i];
                }
                break;
            case "u":
                if(tVal[i+1]=="f" && tVal[i+2]=="a" && tVal[i+3]=="t"){
                    temp = "u";
                    i += 4;
                }else{
                    i++;
                    temp = tVal[i];
                }
                break;
            default:
                temp = tVal[i];
                i++;
                break;
        }
        cadenaRespuesta += temp;
    }
    copiar = cadenaRespuesta;
    respuesta(copiar);
    textoResultado();
    // console.log(cadenaRespuesta);
}
function textoResultado(){
    document.getElementById("sinTexto").style.display = 'none';
    document.getElementById("textoResultado").style.display = 'block';
}