const {materiales} =require('../precios');
const { cot_mosquitero, cot_CorredizaNacional, cot_plegadiza,cot_cancelbaño, cot_Domo} = require('./cotizador');
const {cotizarcancelbañocorreizo}= require('./cancelbañocorredizo6mm')
const { cotizadorPuerta }=require('./puertaAluminio');
const { cot_proyeccion } = require('./proyeccion');
const { cot_fija } = require('./ventanafija');
const { cot_serie4000 } = require('./corredizaserie4000');
const {cot_espejoflotado, cot_vidrio }= require('./vidrio')


const composicion_producto =(body, alto, ancho)=>{
//valores por defecto
let tipo_vidrio = 'claro';
let grosor_vidrio= '6mm';
let proceso_vidrio='crudo';

let hojas=2;

let coloralum='natural'

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

   
       
    //define el color del aluminio
    if(/blanco?/.test(body)){
        coloralum ='blanco';}
    else if(/natural/.test(body)||/plata/.test(body)){
        coloralum = 'natural'}
    else if(/negro?/.test(body)){
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

    //define cantidad de hojas
    if(/3 hojas/.test(body)||/3 partes/.test(body)||/ tres piezas /.test(body)||/ 3 diviciones /.test(body)||/3 partes/){
        hojas = 3 
    }
    else if(/una divic?ion/.test(body)){
        hojas=2
    }
    else if(/ 4 piezas /.test(body)||/4 partes/.test(body)||/ cuatro piezas /.test(body)||/ 4 diviciones /.test(body)||/4 hojas/.test(body)){
        hojas = 4
    }
    else if(/ una pieza /.test(body)){
        hojas = 1
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

    

    //Index seleccionador de algoritmo para cotizar
    if((/vidrio/i.test(body)||/espejo/i.test(body)||/cubierta/i.test(body))&&!(/corrediza/i.test(body)||/puerta/i.test(body)||/domo/i.test(body)||/cancel de baño/i.test(body)||/ventana/i.test(body)||/flotado/.test(body))){
        console.log('entro a vidrio')
        return cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)
    }

    else if(/mosquitero corredizo/i.test(body)){
        return cot_mosquitero(coloralum,alto,ancho, body)
    }

    else if(/plegadiza?/i.test(body)){
        const gastovidrio = cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula)
        return cot_plegadiza(coloralum, alto, ancho, divi, gastovidrio)
    }

    else if (/corrediza/i.test(body)&&!/serie/.test(body)){
        let in_vent_nacional = '3in';
        let mosquitero = false

         //define el grueso de la ventana
        if(/2 pulgadas/.test(body)||/2in/.test(body)){
        in_vent_nacional='2in'}
        else if(/1.5 pulgadas/.test(body)||/1.5in/.test(body)){
            in_vent_nacional='1.5in'
        }

         //cambia a verdadero el valor de mosquitero
         if(/con mosquitero/.test(body)){
        mosquitero= true
         }
        console.log('entro a corrediza')
        const gastovidrio = cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula)
        return cot_CorredizaNacional(coloralum, alto, ancho, in_vent_nacional, mosquitero, hojas, gastovidrio, body)
    }

    else if(/cancel de baño/i.test(body)&&/con alum/.test(body)){
        let lamina='plastico'

        //define la lamina para cancel de baño con aluminio
        if(/acrilico/.test(body)){
        lamina='acrilico'
         }else if(/cancel de baño/i.test(body)&&/vidrio/.test(body)){
        lamina='vidrio'
        }else if(/cancel de baño/i.test(body)&&/policarbonato/.test(body)){
        lamina='policarbonato'
        }
        
        return cot_cancelbaño(coloralum, alto, ancho, lamina, pelicula)

    }

    else if(/domo/i.test(body)){
        let g_vidrio = 0;
        let lamina = 'policarbonato'
        let tubo='2x1in'

        if(/acrilico/.test(body)){
            lamina='acrilico'}
        else if(/vidrio/.test(body)){   
            g_vidrio= cot_vidrio(tipo_vidrio, grosor_vidrio, 'templado', alto+15, ancho+15, pelicula)
            lamina='vidrio' 
        }
        //define el tubular utilizado para los domos
        if(/tubo/.test(body)){
        tubo=body.substring(body.search(/tubo/)+5,body.search(/tubo/)+8)
        }
        return cot_Domo(coloralum, alto, ancho, lamina, tubo, g_vidrio)
    }

    else if(/cancel de baño/i.test(body)&&/templado/.test(body)){
        let tipocanceltemplado='sencillo'

        //define si el cancel de baño es en escuadra
        if(/cancel de baño/i.test(body)&&/templado/.test(body)&&/escuadra/.test(body)){
        tipocanceltemplado='escuadra';
        }
     return cotizarcancelbañocorreizo(alto, ancho, coloralum, tipocanceltemplado, pelicula)
    }

    else if(/puerta/i.test(body)&&/aluminio/.test(body)&&!/corrediza/.test(body)){
        
        let g_vidrio;
        let in_vent_nacional = '3in';
        let vistas='unavista';
        let tipoPuertaAluminio= 'solovidrio';
        
        if(/doble vista/.test(body)||/dos vistas/.test(body)){
            vistas='dosvistas'
        }
        
        if(/solo aluminio/.test(body)||/puro aluminio/.test(body)||/solo duela/.test(body)||/enter/.test(body)){
            g_vidrio=0;
            tipoPuertaAluminio='soloaluminio'
        }
        else if(/solo vidrio/.test(body)||/puro vidrio/.test(body)||/vidrio complet/.test(body)){
            g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula)
        }
        else if(/mitad vidrio/.test(body)||/mitad aluminio/.test(body)||/mitad y mitad/.test(body)||/mitad duela/.test(body)){
            g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, (alto-10)/2, ancho-10, pelicula)
            tipoPuertaAluminio='mitadaluminio';
        }

     return cotizadorPuerta(alto, ancho, coloralum, tipoPuertaAluminio, g_vidrio, vistas, in_vent_nacional)
    }
    else if(/proyeccion/i.test(body)){
        const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)

        return cot_proyeccion(alto, ancho, coloralum, g_vidrio)
    }
   
    else if(/serie 4000/i.test(body)){

        console.log('entro a la serie 4000')
        let mosquitero= false;

        if(/mosquitero/.test(body)){
            mosquitero=true;
        }
        const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-15, ancho-15, pelicula)
        console.log('gasto vidrio:', g_vidrio)
        return cot_serie4000(alto, ancho, g_vidrio, mosquitero, hojas, coloralum)
    }
    else if(/espejo flotado/i.test(body)){
        console.log('entro a espejo flotado')
        const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)
        
        let esmerilado = false;
        let biselado = false;
        let led= false;
        let touch= false;

        if(/esmerilado/.test(body)){
            esmerilado=true
        }

        if(/bisel/.test(body)){
            biselado= true
        }

        if(/ led/.test(body)){
            led=true
        }

        if(/ touch/.test(body)){
            touch= true
        }

        return cot_espejoflotado(alto, ancho, g_vidrio, esmerilado, biselado, led, touch)
    }
    else if(/fija/i.test(body)||/fijo/i.test){
        console.log('entro a fija')
        const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)
        let in_vent_nacional = '3in';
        const divicion = 0;
        
        if(/con divicion/.test(body)||/una divicion/.test(body)){
            divicion=1;
        }
        else if(/dos diviciones/.test(body)){
            divicion=2;
        }

        if(/2 pulgadas/.test(body)||/2in/.test(body)){
            in_vent_nacional='2in'}
        

        return cot_fija(alto, ancho, coloralum, in_vent_nacional, g_vidrio, divicion)
    }

    else{
        return cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)
    }


}

module.exports = {composicion_producto}







