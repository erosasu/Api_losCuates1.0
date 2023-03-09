const { composicion_producto } = require("./index_cotizador")


function descomponerMensaje(msg){
    let porcganacia=2.5;
    let alto
    let ancho
    let submsg = [];
    let preciocliente = 0;
    let gasto = 0;
    let gastos_unitarios = []; 
    
    submsg = msg.split(/, /)
   
    
for(i=0;i<submsg.length;i++){
    
    let cantidad = 1;
   
    let medidas;
    
    if(/\d+.?\d? x \d+.?\d?/.test(submsg[i])){
        //define el grosor del vidrio
       
        alto=parseFloat(submsg[i].substring(submsg[i].search(/\d+.?\d? x \d+.?\d?/),submsg[i].search(/ x /)))
        console.log('el alto es de: '+alto)
        ancho=parseFloat(submsg[i].substring(submsg[i].search(/ x /)+3,submsg[i].search(/ x /)+8))
        console.log('el ancho es de:'+ancho)
        medidas = submsg[i].match(/\d+.?\d?/g)

        if(submsg[i].search(/\d{1,2}/)==0){
          cantidad = medidas.shift()   
        }
        console.log('la cantidad es: '+cantidad)
        
        
    gastos_unitarios.length= 0;
    
        //añadir gastos unitarios a lista de costos de materiales
    gastos_unitarios.push(composicion_producto(submsg[i], alto, ancho)*cantidad)
    

    
}  }
//sumar gastos unitarios
for(let i=0;i< gastos_unitarios.length;i++){
    gasto+=gastos_unitarios[i]
}


    if(/cancel de baño/i.test(msg)){
        porcganacia=2;
    }
    else if(/ventana/i.test(msg)&&!/sin instalacion/.test(msg)){
        porcganacia=2.4
    }
    else if (/puerta/i.test(msg)&&/aluminio/.test(msg)){
        porcganacia=2.3
    }

    if(/instalado/.test(msg)&&gasto<200){
        porcganacia = 4.5
    }
    else if(/instalado/.test(msg)&&gasto>200&&gasto<1000){
        porcganacia = 3.7
    }
    else if(/cubierta/.test(msg)){
        porcganacia=3.2
    }
    else if(/instalado/.test(msg)&&gasto>1000&&gasto<4000){
        porcganacia = 3
    }
    else if(/instalado/.test(msg)&&gasto>4000&&gasto<15000){
        porcganacia = 2.4
    }
    else if(/instalado/.test(msg)&&gasto>15000){
        porcganacia = 2
    }
    else if((/sin instalacion/.test(msg)||/al corte/.test(msg)||/sin instalar/.test(msg))){
        porcganacia = 2.5
    }
    else if((/sin instalacion/.test(msg)||/al corte/.test(msg)||/sin instalar/.test(msg))&&gasto>1000){
        porcganacia = 2
    }

    preciocliente = gasto*porcganacia

   const cotizacion ={
    g_unitarios: gastos_unitarios,
    g_total: gasto,
    subdescripciones: submsg,
    precio: preciocliente,
    por_ganancia: porcganacia
   }

    return cotizacion;

}

module.exports={descomponerMensaje}