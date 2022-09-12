/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

/* - Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original */
function encriptar() {

    var textin = document.getElementById("textIn").value;
    var dictEncrypt = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    var txtOut = "";

    for (var i of textin) {

        if (dictEncrypt[i]) { txtOut += dictEncrypt[i]; }
        else { txtOut += i; }
    }


    out.innerHTML = txtOut;
    document.getElementById("textIn").value = "";
    copiar();

}

function desencriptar() {


    var textin = document.getElementById("textIn").value;
    var cont = 0;
    var cont2 = 0;
    var txtOut = "";
    
    var dictEncrypt = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    var txtOut = "";


    for (var i=0; i<textin.length;i++ ) {
        //console.log("i: "+ i)
        var letDict;
        var tamLetDict;
        var swt = false;        

        Object.keys(dictEncrypt).forEach(prop => {//recorre las llaves
            
            if (textin[i] == prop) {//si la letra es igual a alguna llave
                //console.log("swt");
                var letDict = dictEncrypt[prop];
                var tamLetDict = dictEncrypt[prop].length;
                if (textin.length - i >= tamLetDict) {//no busque valores menores a los del diccionario
                    //console.log("swt2");
                    for (var i2 of letDict) {//itera sobre el valor del diccionario
                        //console.log("textin[cont2]: " + textin[i+cont]);
                        //console.log("i2: " + i2);
                        if (textin[i+cont] == i2) {//compara los valores de entrada con los del diciionario
                            cont++;                            
                            //console.log("swt3");
                            if (cont == tamLetDict) {//completo la palabra
                                txtOut += prop;
                                cont = 0;
                                //console.log("swt4");
                                if(i<textin.length){//si la posicion de busqueda es menor va saltando la busqueda
                                    i+=tamLetDict-1                                    
                                    swt = true;                                    
                                };
                            }
                        }
                    }
                }
            }
        })
        if(!swt){
            //console.log("i: " + i);
            txtOut+=textin[i];            
        }        

    }

    out.innerHTML = txtOut;
    document.getElementById("textIn").value = "";
    copiar();

}

function copiar(){
    
    document.getElementById('btnCopy').style.display = 'inline';
    var content = document.getElementById('btnCopy');
    content.select();
    document.execCommand('copy');

}