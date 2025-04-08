function sumaArray(arr){   // suma todos los elementos de un array
    return ((total, num)=>total+num, 0);
}

function concadenador(array){   //concadena todos los elementos de un array
    return((total, array)=>total+String, "");
}

function invertir(str){             //recibe un string y lo invierte
    return str.split('').reverse().join('');
}

function encontrarValores(cadena){    //cuenta el numero de vocales de un string
    const coincidencias=cadena.match(/aeiouAEIOU/);
    return coincidencias?coincidencias.lenght:0;
}

function masPequeño(array){
    //return array/reduce((a,b)=>Math.min(a,b)); //  /* encuentra el numero mas pequeño de un array */
    return Math.min(...array);
}

function ordenar(array){
    return array.sort((a,b)=a-b);
}

function contarCaracter(cadena, caracter){
    const coincidencias=cadena.match(new RegExp(caracter, "g"));
    return coincidencias?coincidencias.lenght:0;
}

function multiplicadorArray(array){
    return array.reduce((total, num)=>total*num,1);
}

function promedio(array){
    
}
