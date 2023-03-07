const {materiales} =require('../precios');
const { cot_vidrio, cot_mosquitero, cot_CorredizaNacional, cot_plegadiza,cot_cancelbaño, cot_Domo} = require('./cotizador');
const {cotizarcancelbañocorreizo}= require('./cancelbañocorredizo6mm')

const composicion_producto =(body, alto, ancho)=>{

//valores por defecto
let tipo_vidrio = 'claro';
let grosor_vidrio= '6mm';
let proceso_vidrio='crudo';
let lamina='plastico'
let tubo='2x1in'
let tipocanceltemplado='sencillo'
let divi=2;
let in_vent_nacional='3in'
let coloralum='natural'
let mosquitero = false
let pelicula = 0


    //definir grosor vidrio
    if(/\d{1,2}mm/.test(body)){
    grosor_vidrio=body.substring(body.search(/mm/)-1,body.search(/mm/))+'mm'}
   
    //define el tipo de vidrio
    if(/tintex/.test(body)){
    tipo_vidrio = 'tintex'
    }else if(/espejo/.test(body)){
        tipo_vidrio='espejo'
    }else if(/filtrasol/.test(body)){
        tipo_vidrio='filtrasol'
    }else if(/satinado/.test(body)){
        tipo_vidrio='satinado'}

    //define el proceso del vidrio
    if(/templado/.test(body)){
        proceso_vidrio='templado'}

    //define el grueso de la ventana
    if(/ventana/i.test(body)&&/pulgadas/.test(body)){
    in_vent_nacional=body.substring(body.search(/pulgadas/)-2,body.search(/pulgadas/)-1)+'in'}
       
    //define el color del aluminio
    if(/blanco/.test(body)){
        coloralum ='blanco';}
    else if(/natural/.test(body)){
        coloralum = 'natural'}
    else if(/negro/.test(body)){
        coloralum = 'negro'}
    else if(/electro 100/.test(body)||/champig?ne/.test(body)){
        coloralum = 'e100' }
    else if(/gris europa/.test(body)){
        coloralum = 'griseuro'}
    else if(/ madera /.test(body)){
        coloralum ='madera'}
    else if(/cromado/.test(body)){
        coloralum='cromado'
    }

    //define cantidad de piezas
    if(/ 3 piezas /.test(body)||/3 partes/.test(body)||/ tres piezas /.test(body)||/ 3 diviciones /.test(body)){
        divi = 3
        console.log('entro a tres diviciones')
    }
    else if(/una divic?ion/.test(body)){
        divi=2
    }
    else if(/ 4 piezas /.test(body)||/4 partes/.test(body)||/ cuatro piezas /.test(body)||/ 4 diviciones /.test(body)){
        divi = 4
    }
    else if(/ una pieza /.test(body)){
        divi = 1
    }
 

    //define la pelicula si es que lleva
    if(/pelicula esmerilada/.test(body)){
       pelicula=materiales.peliculas.peliculaesmeril
    }
    else if(/pelicula reflecta/.test(body)){
        pelicula =materiales.peliculas.pelicureflecta
    }
    else if(/pelicula polarizada/.test(body)){
        pelicula =materiales.peliculas.pelicupolarizada
    }
    else if(/vidrio esmerilado/.test(body)){
        pelicula =materiales.peliculas.esmerilado
    }

    //cambia a verdadero el valor de mosquitero
    if(/con mosquitero/.test(body)){
        mosquitero= true
    }

    //define la lamina para cancel de baño con aluminio
    if(/acrilico/.test(body)){
        lamina='acrilico'
    }else if(/cancel de baño/i.test(body)&&/vidrio/.test(body)){
        lamina='vidrio'
    }else if(/cancel de baño/i.test(body)&&/policarbonato/.test(body)){
        lamina='policarbonato'
    }

    //define el tubular utilizado para los domos
    if(/tubo/.test(body)){
        tubo=body.substring(body.search(/tubo/)+5,body.search(/tubo/)+8)
    }

    //define si el cancel de baño es en escuadra
    if(/cancel de baño/i.test(body)&&/templado/.test(body)&&/escuadra/.test(body)){
        tipocanceltemplado='escuadra';
    }

    //Index seleccionador de algoritmo para cotizar
    if((/vidrio/i.test(body)||/espejo/i.test(body)||/cubierta/i.test(body))&&!(/corrediza/i.test(body)||/puerta/i.test(body)||/domo/i.test(body)||/cancel de baño/i.test(body)||/ventana/i.test(body))){
        return cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)
    }
    else if(/mosquitero corredizo/i.test(body)){
        return cot_mosquitero(coloralum,alto,ancho, body)
    }
    else if(/plegadiza?/i.test(body)){
        let gastovidrio = cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula)
        return cot_plegadiza(coloralum, alto, ancho, divi, gastovidrio)
    }
    else if (/corrediza/i.test(body)){
        console.log('entro a corrediza')
        let gastovidrio = cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula)
        return cot_CorredizaNacional(coloralum, alto, ancho, in_vent_nacional, mosquitero, divi, gastovidrio, body)
    }
    else if(/cancel de baño/i.test(body)&&/con alum/.test(body)){
        console.log('entro a cancel')
        return cot_cancelbaño(coloralum, alto, ancho, lamina, pelicula)

    }
    else if(/domo/i.test(body)){
        let g_vidrio = 0;
        if(/vidrio/.test(body)){   
            g_vidrio= cot_vidrio(tipo_vidrio, grosor_vidrio, 'templado', alto+15, ancho+15, pelicula)
            lamina='vidrio' 
        }
        return cot_Domo(coloralum, alto, ancho, lamina, tubo, g_vidrio)
    }
    else if(/cancel de baño/i.test(body)&&/templado/.test(body)){
        return cotizarcancelbañocorreizo(alto, ancho, coloralum, tipocanceltemplado, pelicula)
    }
    else{
        return cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)
    }


}

module.exports = {composicion_producto}







