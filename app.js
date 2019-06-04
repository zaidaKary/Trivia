
const nombreIngresado = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');
const aciertos = document.getElementById('aciertos');
const fallas = document.getElementById('fallas');
const aciertosQ = document.getElementById('aciertosQUIMICA');
const fallasQ = document.getElementById('fallasQUIMICA');

//BOTONES 
const boton1 = document.getElementById('botonAceptar');
const botonesDeTema1= document.getElementById('btnHistoriaPeru');
const botonesDeTema2= document.getElementById('btnQuimica');
const siguiente1= document.getElementById('question-next1');
const siguiente2= document.getElementById('question-next2');
const siguiente3= document.getElementById('question-next3');
const resultados= document.getElementById('verResultados');
const volverJugar= document.getElementById('volverJugar');
const volverJugar1= document.getElementById('volverJugar1');
const siguiente1Q= document.getElementById('question1-next');
const siguiente2Q= document.getElementById('question2-next');
const siguiente3Q= document.getElementById('question3-next');
const resultadosQ= document.getElementById('verResultadosQ');

//VISTAS
const primeraPantalla = document.getElementById('primeraPantalla');
const segundaPantalla = document.getElementById('segundaPantalla');
const terceraPantalla = document.getElementById('pregunta1');
const cuartaPantalla = document.getElementById('pregunta2');
const quintaPantalla = document.getElementById('pregunta3');
const sextaPantalla = document.getElementById('sextaPantalla');
const septimaPantalla = document.getElementById('septimaPantalla');
const primeraPantQuimica = document.getElementById('pregunta1Q');
const segundaPantQuimica = document.getElementById('pregunta2Q');
const terceraPantQuimica = document.getElementById('pregunta3Q');
const octavaPantalla = document.getElementById('octavaPantalla');
const novenaPantalla = document.getElementById('juegoTerminado');

//Puntos
let puntos_1_HP = 0;
let fallas_1_HP = 0;
 
//Funcionalidad del boton INICIO
boton1.addEventListener('click', () => {
    mensaje.innerHTML = 'Hola ' + '' + nombreIngresado.value +  '!!, Bienvenida a trivia. Empecemos a jugar, ' + 'elige una opción:' ;
    primeraPantalla.classList.add('hide')
    segundaPantalla.classList.remove('hide')
});

 //Funcionalidad del boton HISTORIA DEL PERU
 botonesDeTema1.addEventListener('click', () => {
    segundaPantalla.classList.add('hide')
    terceraPantalla.classList.remove('hide')
    });
//Final del boton HISTORIA DEL PERU

//Funcionalidad del boton QUIMICA
botonesDeTema2.addEventListener('click', () => {
    segundaPantalla.classList.add('hide')
    primeraPantQuimica.classList.remove('hide')
    });
//Final del boton QUIMICA

//Funcionalidad del boton SIGUIENTE1 DE HISTORIA DEL PERÚ 
 siguiente1.addEventListener('click', () => {

    if ( document.getElementById("ruth-shady").checked){
        
        //alert('respuesta correcta');
        puntos_1_HP++;

    } else if (document.getElementById("kosok").checked){
        //alert('respuesta incorrecta');
        fallas_1_HP++;
        
    } else if (document.getElementById("reiche").checked){
        //alert('respuesta incorrecta');
        fallas_1_HP++;
    } 
 
    terceraPantalla.classList.add('hide')
    cuartaPantalla.classList.remove('hide')
    });

//Final del boton SIGUIENTE1

 //Funcionalidad del boton SIGUIENTE2 DE HISTORIA DEL PERÚ 
 siguiente2.addEventListener('click', () => {

    
    if ( document.getElementById("july").checked){
        //alert('respuesta correcta');
        puntos_1_HP++;

    } else if (document.getElementById("january").checked){
        //alert('respuesta incorrecta');
        fallas_1_HP++;
        
    } else if (document.getElementById("july2").checked){
        //alert('respuesta incorrecta');
        fallas_1_HP++;
    } 
    
    cuartaPantalla.classList.add('hide')
    quintaPantalla.classList.remove('hide')
    });
//Final del boton SIGUIENTE2

 //Funcionalidad del boton SIGUIENTE3 DE HISTORIA DEL PERÚ 
 siguiente3.addEventListener('click', () => {

    if ( document.getElementById("product").checked){
        //alert('respuesta incorrecta');
        fallas_1_HP++;

    } else if (document.getElementById("product2").checked){
        //alert('respuesta correcta');
        puntos_1_HP++;
        
    } else if (document.getElementById("product3").checked){
        //alert('respuesta incorrecta');
        fallas_1_HP++;
    } 
    quintaPantalla.classList.add('hide')
    sextaPantalla.classList.remove('hide')
    });
//Final del boton SIGUIENTE3

//Resultados finales de Historia del Perú en Pantalla
resultados.addEventListener('click', () => {
    aciertos.innerHTML = 'Aciertos: ' + '' + puntos_1_HP;
    fallas.innerHTML = 'Fallas: ' + '' + fallas_1_HP;
    
    sextaPantalla.classList.add('hide')
    octavaPantalla.classList.add('hide')
    novenaPantalla.classList.add('hide')
    septimaPantalla.classList.remove('hide')

});

//Regresa a la pantalla para volver a jugar
volverJugar.addEventListener('click', () => {
    septimaPantalla.classList.add('hide')
    segundaPantalla.classList.remove('hide')

//Quitando el checked


    document.getElementById("ruth-shady").checked = false;
    document.getElementById("kosok").checked = false;
    document.getElementById("reiche").checked = false;
    document.getElementById("july").checked = false;
    document.getElementById("january").checked = false;
    document.getElementById("july2").checked = false;
    document.getElementById("product").checked = false;
    document.getElementById("product2").checked = false;
    document.getElementById("product3").checked = false;



});

//Puntos
let ptos_Q = 0;
let flls_Q = 0;

//Funcionalidad del boton SIGUIENTE1 DE QUIMICA
siguiente1Q.addEventListener('click', () => {

    if ( document.getElementById("phosphorus").checked){
        //alert('respuesta incorrecta');
        flls_Q++;
        

    } else if (document.getElementById("arsenic").checked){
        //alert('respuesta incorrecta');
        flls_Q++;
        
    } else if (document.getElementById("sulfur").checked){
        //alert('respuesta correcta');
        ptos_Q++;
    } 
 
    primeraPantQuimica.classList.add('hide')
    segundaPantQuimica.classList.remove('hide')
    });

//Final del boton SIGUIENTE1

 //Funcionalidad del boton SIGUIENTE2 DE QUIMICA 
 siguiente2Q.addEventListener('click', () => {

    
    if ( document.getElementById("skin").checked){
        //alert('respuesta incorrecta');
        flls_Q++;

    } else if (document.getElementById("lungs").checked){
        //alert('respuesta correcta');
        ptos_Q++;
        
    } else if (document.getElementById("gill").checked){
        //alert('respuesta incorrecta');
        flls_Q++;
    } 
    
    segundaPantQuimica.classList.add('hide')
    terceraPantQuimica.classList.remove('hide')
    });
//Final del boton SIGUIENTE2

 //Funcionalidad del boton SIGUIENTE3 DE QUIMICA 
 siguiente3Q.addEventListener('click', () => {

    if ( document.getElementById("minerals").checked){
        //alert('respuesta incorrecta');
        flls_Q++;

    } else if (document.getElementById("noble").checked){
        //alert('respuesta correcta');
        ptos_Q++;
        
    } else if (document.getElementById("halides").checked){
        //alert('respuesta incorrecta');
        flls_Q++;
    } 
    terceraPantQuimica.classList.add('hide')
    novenaPantalla.classList.remove('hide')
    });
//Final del boton SIGUIENTE3

//Resultados finales de Química en Pantalla
resultadosQ.addEventListener('click', () => {
    aciertosQ.innerHTML = 'Aciertos: ' + '' + ptos_Q;
    fallasQ.innerHTML = 'Fallas: ' + '' + flls_Q;
    
    sextaPantalla.classList.add('hide')
    septimaPantalla.classList.add('hide')
    octavaPantalla.classList.remove('hide')
    novenaPantalla.classList.add('hide')

});

//Regresa a la pantalla para volver a jugar
volverJugar1.addEventListener('click', () => {
    octavaPantalla.classList.add('hide')
    segundaPantalla.classList.remove('hide')

//Quitando el checked

    document.getElementById("phosphorus").checked = false;
    document.getElementById("arsenic").checked = false;
    document.getElementById("sulfur").checked = false;
    document.getElementById("skin").checked = false;
    document.getElementById("lungs").checked = false;
    document.getElementById("gill").checked = false;
    document.getElementById("minerals").checked = false;
    document.getElementById("noble").checked = false;
    document.getElementById("halides").checked = false;

});

//Final del boton SIGUIENTE3
//https://repl.it/login