const {materiales, procesos} =require('../precios');
const { cot_mosquitero, cot_CorredizaNacional, cot_plegadiza, cot_Domo} = require('./cotizador');
const {cotizarcancelbañocorreizo}= require('./cancelbañocorredizo6mm')
const { cotizadorPuerta3in, cot_Puertaunatrescuartos, cot_puertasduela, cot_PuertaSerie }=require('./puertaAluminio');
const { cot_proyeccion35, cot_proyeccionSerie } = require('./proyeccion');
const { cot_fija, cot_FijaEspañola, cot_fijaSifon, cot_fijoIndalum3500, cot_fijoTemplado } = require('./ventanafija');
const { cot_serie4000 } = require('./corredizaserie4000');
const {cot_espejoflotado, cot_vidrio }= require('./vidrio');
const { g_acrilico, g_plastico, cot_cancelbaño } = require('./canceldebaño');


const composicion_producto =(body, alto, ancho)=>{
//valores por defecto
let tipo_vidrio = 'claro';
let grosor_vidrio= '6mm';
let proceso_vidrio='crudo';
let procesPerimetros=0;
let hojas=2;
let intermedios=0;

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
    if(/ templad/.test(body)){
        proceso_vidrio='templado'}

    if(/intermedio/.test(body)){
        if(/ intermedio /.test(body)){
            intermedios=1;
        }else{
        intermedios=parseFloat(body.substring(body.search(/intermedio/)-2, body.search(/intermedio/)-1, ))
    }}
    
    //define el color del aluminio
    if(/blanco?/.test(body)){
        coloralum ='blanco';}
    else if(/natural/.test(body)||/plata/.test(body)){
        coloralum = 'natural'}
    else if(/negro?/.test(body)){
        coloralum = 'negro'}
    else if(/electro 100/.test(body)||/champig?ne/.test(body)||/e100/.test(body)){
        coloralum = 'e100' }
    else if(/gris europa/.test(body)||/griseuropa/.test(body)||/gris Europa/.test(body)){
        coloralum = 'griseuropa'}
    else if(/ madera /.test(body)){
        coloralum ='madera'}
    else if(/cromado/.test(body)||/billante/.test(body)){
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
        pelicula =procesos.esmerilado
    }
    if(/biselado/.test(body)){
        procesPerimetros+=procesos.biselado
    }
    if(/boleado/.test(body)){
        procesPerimetros+=procesos.cantoboleado
    }
    else if(/chaflan/.test(body)){
        procesPerimetros+=procesos.chaflan
    }

const CaracteristicasVidrio=`${tipo_vidrio} ${proceso_vidrio} ${grosor_vidrio}`
console.log(CaracteristicasVidrio)
    //Index seleccionador de algoritmo para cotizar
    //Puerta
    if(/puerta /i.test(body)){
        if(/ aluminio /.test(body)){
            if(/ serie /i.test(body)){
                console.log('entro a puerta de serie')
                const serie=body.substring(body.search(/serie/)+6,body.search(/serie/)+10)
                const g_vidrio = cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula, procesPerimetros)
                return cot_PuertaSerie(alto, ancho, coloralum,intermedios, serie, g_vidrio)
            }
            else{
                if(/2 pulgadas/.test(body)||/2in/.test(body)||/economica/.test(body)){
                
                }else if(/3 pulgadas/.test(body)||/3in/.test(body)){
                    let g_vidrio;
                    let in_vent_nacional = '3in';
                    let vistas='unavista';
                    let tipoPuertaAluminio= 'solovidrio';
                    
                    if(/doble vista/.test(body)||/dos vistas/.test(body)){
                        vistas='dosvistas'
                    }
                    
                    if(/solo aluminio/.test(body)||/puro aluminio/.test(body)||/solo duela/.test(body)||/enter/.test(body)||/con duela/.test(body)){
                        g_vidrio=0;
                        tipoPuertaAluminio='soloaluminio'
                    }
                    
                    else if(/mitad vidrio/.test(body)||/mitad aluminio/.test(body)||/mitad y mitad/.test(body)||/mitad duela/.test(body)){
                        g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, (alto-10)/2, ancho-10, pelicula, procesPerimetros)
                        tipoPuertaAluminio='mitadaluminio';
                    }
                    else {
                        g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula, procesPerimetros)
                    }

                    return cotizadorPuerta3in(alto, ancho, coloralum, tipoPuertaAluminio, g_vidrio, vistas, in_vent_nacional)
                    
                }else{
                    console.log('entro a puerta una tres cuartos')
                    let g_vidrio;
                    let intermedios=1;
                    let vistas='unavista';
                    let tipoPuertaAluminio= 'solovidrio';
                    
                    if(/doble vista/.test(body)||/dos vistas/.test(body)){
                        vistas='dosvistas'
                    }
                    if(/solo aluminio/.test(body)||/puro aluminio/.test(body)||/solo duela/.test(body)||/enter/.test(body)){
                        g_vidrio=0;
                        tipoPuertaAluminio='soloaluminio'
                    }
                    else if(/mitad vidrio/.test(body)||/mitad aluminio/.test(body)||/mitad y mitad/.test(body)||/mitad duela/.test(body)){
                        g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, (alto-10)/2, ancho-10, pelicula, procesPerimetros)
                        tipoPuertaAluminio='mitadaluminio';
                    }else{
                        g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula, procesPerimetros)
                    }
            
                 return cot_Puertaunatrescuartos(alto, ancho, coloralum, tipoPuertaAluminio, g_vidrio, vistas, intermedios)
                }
                
            }

        }
        else if(/ vidrio templado/i.test(body)){
            if(/ hidrahulica /.test(body)){

            }
            else if(/ pivote /i.test(body)){

            }else{

            }

        }
        else if(/ mosquitero /.test(body)){
            let tipoMalla='mosquitero';
            if(/mosquired/.test(body)){tipoMalla='mosquired'}
            else if(/ tela metalica /.test(body)||(/de metal/.test(body))){tipoMalla='metalica'}
            return cot_puertamosquitero(alto, ancho, coloralum, tipoMalla)  
        }
        
    }//Ventana
    else if(/ventana /i.test(body)||/ventanas /i.test(body)){
        if(/corrediza /i.test(body)){
            if(/serie/.test(body)){
                let serie=body.substring(body.search(/serie/)+6,body.search(/serie/)+10)
                console.log('entro a la serie 4000')
                let mosquitero= false;
        
                if(/mosquitero/.test(body)){
                    mosquitero=true;
                }
                const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-15, ancho-15, pelicula, procesPerimetros)
                console.log('gasto vidrio:', g_vidrio)
                return cot_serie4000(alto, ancho, g_vidrio, mosquitero, hojas, coloralum, serie)

            }else{
                let in_vent_nacional = '3in';
                let mosquitero = false
        
                //define el grueso de la ventana
                if(/2 pulgadas/.test(body)||/2in/.test(body)){in_vent_nacional='2in'}
                else if(/1.5 pulgadas/.test(body)||/1.5in/.test(body)){in_vent_nacional='1.5in'}
    
                if(/ mosquitero corredizo /.test(body)){mosquitero= true}
                console.log('entro a corrediza')
                const gastovidrio = cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula, procesPerimetros)
                return cot_CorredizaNacional(coloralum, alto, ancho, in_vent_nacional, mosquitero, hojas, gastovidrio, body)
            }
        }
        else if(/ fija /i.test(body)){
            if(/ serie /.test(body)){
                console.log('entro a linea española')
                const serie=body.substring(body.search(/serie/)+6,body.search(/serie/)+10)
                if(serie=='1400'){
                    const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula, procesPerimetros);
                    return cot_FijaEspañola(alto, ancho, coloralum, g_vidrio, serie)
                }else if(serie=='3500'){
                    console.log('entro a 3500')
                    console.log('alto:',alto )
                    console.log('ancho:',ancho)
                    console.log('intermedios',intermedios)
                    const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros);
                    return cot_fijoIndalum3500(alto, ancho, coloralum, intermedios, g_vidrio)
                }
            }
            else if(/sifon/.test(body)){
                 const g_vidrio= cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto+8, ancho, pelicula, procesPerimetros);
                 return cot_fijaSifon(alto, ancho, coloralum, g_vidrio)
            }
            else if(/herrajes/.test(body)){

                let cant_herrajes= 4
                if(/herrajes/.test(body)){
                    cant_herrajes=parseFloat(body.substring(body.search(/herrajes/)-2, body.search(/herrajes/-1)))
                }
                
                const g_vidrio= cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros);

                return cot_fijoTemplado(g_vidrio, cant_herrajes)
            }
            else{//fijos nacionales
                console.log('entro a fija simple')
                const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)
                let in_vent_nacional = '3in';
                const divicion = 0;
                
                if(/con divicion/.test(body)||/una divicion/.test(body)){divicion=1;}
                else if(/dos diviciones/.test(body)){divicion=2}

                if(/2 pulgadas/.test(body)||/2in/.test(body)){in_vent_nacional='2in'}
                
                return cot_fija(alto, ancho, coloralum, in_vent_nacional, g_vidrio, divicion)
            }
        }
        else if(/ proyeccion /i.test(body)||/ proyección /i.test(body)){
            if(/serie/.test(body)){
                console.log('entro proyeccion serie')
                const serie=body.substring(body.search(/serie/)+6,body.search(/serie/)+10)
                console.log(serie)
                const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)
                return cot_proyeccionSerie(alto, ancho, coloralum, g_vidrio, serie)
            }
            else{//serie 35
                console.log('entro a serie 35')
                console.log('alto:',alto )
                console.log('ancho:',ancho )
                const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)
                return cot_proyeccion35(alto, ancho, coloralum, g_vidrio)
            }
        }
        else if(/ abatible /){}

    }//Cancel
    else if(/cancel /i.test(body)||/puertitas/.test(body)){
        if(/de baño /.test(body)){
            if(/templado /i.test(body)){
                let tipocanceltemplado='sencillo'
                if(/bacalar/.test){

                }
                else if(/ abatible /i.test(body)){
                    if(/escuadra/.test(body)){tipocanceltemplado='escuadra';}
                }
                else {//estandar sin marco aluminio
                    
                    console.log('entro a cancel templado ')
            
                    //define si el cancel de baño es en escuadra
                    if(/escuadra/.test(body)){
                    tipocanceltemplado='escuadra'}
                 return cotizarcancelbañocorreizo(alto, ancho, coloralum, tipocanceltemplado, pelicula, procesPerimetros)
                }
            }
            else{//estandar con aluminio
                let g_lamina;
                let tipocancel='sencillo'
                if(/escuadra/.test(body)){
                    tipocancel='escuadra';}

                if(/plastico/.test(body)){
                    g_lamina=g_plastico(ancho)
                    return cot_cancelbaño(coloralum, alto, ancho, g_lamina, tipocancel)
                }
                else if(/policarbonato/.test(body)){
                    g_lamina=(alto/100)*(ancho/100)*materiales.laminas.policarbonato
                    return cot_cancelbaño(coloralum, alto, ancho, g_lamina, tipocancel)

                }else if(/vidrio/.test(body)){
                    g_lamina= cot_vidrio('claro','6mm','templado',alto-7,ancho-7,pelicula)
                    return cot_cancelbaño(coloralum, alto, ancho, g_lamina, tipocancel)
                }
                else if(/acrilico/.test(body)){
                    g_lamina=g_acrilico(alto,ancho)
                    return cot_cancelbaño(coloralum, alto, ancho, g_lamina, tipocancel)
                }
                else{
                    return 'Faltó especificar el tipo de recubrimiento o lamina'
                }
            }
        }
        else if(/ almacen /.test){
            let vistas='unavista';
            let tipoPuertaAluminio= 'soloaluminio';
            if(/doble vista/.test(body)||/dos vistas/.test(body)){
                vistas='dosvistas'}
            return cot_puertasduela(alto, ancho, coloralum, tipoPuertaAluminio, vistas)

        }

    }//vitrina
    else if(/vitrina /i.test(body)){

    }//Ventanal
    else if(/ventanal /i.test(body)){
        if(/ corredizo /i.test(body)){
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
            const gastovidrio = cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-10, pelicula, procesPerimetros)
            return cot_CorredizaNacional(coloralum, alto, ancho, in_vent_nacional, mosquitero, hojas, gastovidrio, body)

        }
        else if(/ plegadizo /i.test(body)){
            const gastovidrio = cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto-10, ancho-20, pelicula, procesPerimetros)
            return cot_plegadiza(coloralum, alto, ancho, divi, gastovidrio)
        }
        else if(/ fijo /i.test(body)){
            console.log('entro a fija simple')
            const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)
            let in_vent_nacional = '3in';
            const divicion = 0;
            
            if(/con divicion/.test(body)||/una divicion/.test(body)){divicion=1;}
            else if(/dos diviciones/.test(body)){divicion=2}

            if(/2 pulgadas/.test(body)||/2in/.test(body)){in_vent_nacional='2in'}
            
            return cot_fija(alto, ancho, coloralum, in_vent_nacional, g_vidrio, divicion)
        }
        else if(/ abatible /i.test(body)){}

    }//Espejo
    else if(/espejo /i.test(body)){
        if(/ flotado /i.test(body)){
            console.log('entro a espejo flotado')
            const g_vidrio=cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)
            let esmerilado = false;
            let biselado = false;
            let led= false;
            let touch= false;

            if(/ esmeril/.test(body)){esmerilado=true}

            if(/ bisel/.test(body)){ biselado= true}

            if(/ led/.test(body)){led=true}

            if(/ touch/.test(body)){touch= true}
            return cot_espejoflotado(alto, ancho, g_vidrio, esmerilado, biselado, led, touch)
        }
        else if(/con marco /i.test(body)){
            if(/madera/.test(body)){

            }else{
                return cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)+ (materiales.cancel_baño[coloralum].marco/600)*2*(alto+ancho)
            }
        }
        else{
            return cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)
        }

    }//Domo
    else if(/domo /i.test(body)||(/traga luz/i.test(body))){
        let g_vidrio = 0;
        let lamina = 'policarbonato'
        let tubo='2x1in'

        if(/acrilico/.test(body)){
            lamina='acrilico'}
        else if(/vidrio/.test(body)){   
            g_vidrio= cot_vidrio(tipo_vidrio, grosor_vidrio, 'templado', alto+15, ancho+15, pelicula, procesPerimetros)
            lamina='vidrio' 
        }
        //define el tubular utilizado para los domos
        if(/tubo/.test(body)){
        tubo=body.substring(body.search(/tubo/)+5,body.search(/tubo/)+9)
        }
        return cot_Domo(coloralum, alto, ancho, lamina, tubo, g_vidrio)

    }//Cubierta
    else if(/cubierta /i.test(body)){
        if(/esmerilad/.test(body)){
            pelicula =procesos.esmerilado
        }
        return cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)

    }//fachada
    else if(/fachada /i.test(body)){

    }//Mosquitero
    else if(/mosquitero /i.test(body)){
        if(/corredizo/.test(body)){
            return cot_mosquitero(coloralum,alto,ancho, body)

        }else if(/colgante/.test(body)){

        }else if(/fijo/.test(body)){//mosquitero fijo
            return cot_mosquitero(coloralum, alto, ancho, body)

        }else if(/ z /.test(body)){
            let tipoMalla='mosquitero';
            if(/mosquired/.test(body)){tipoMalla='mosquired'}
            else if(/ tela metalica /.test(body)||(/de metal/.test(body))){tipoMalla='metalica'}
            cot_mosquiteroZ(alto, ancho, coloralum, tipoMalla)

        }else if(/ tela /.test(body)){
            return materiales.mallas.mosquitero*(alto/100)*(ancho/100)
        }
    }//vidrio
    else if(/vidrio /i.test(body)){
        return cot_vidrio(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)
    }
}

module.exports = {composicion_producto}







