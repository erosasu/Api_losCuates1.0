const { connect } = require('mongoose');
const {materiales} = require('../precios.js')


const cot_vidrio=(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)=>{

    return (alto/100*ancho/100)*(materiales.cristal[tipo_vidrio][grosor_vidrio][proceso_vidrio]+pelicula)
    
}

const cot_mosquitero=(coloralum, alto, ancho, body)=>{
    
    let total;
    if(/mosquitero fijo/.test(body)){
        console.log('entro a mosquitero fijo')   
        return ((materiales.mosquitero[coloralum].solera/600)*(alto*2+ancho)+materiales.mallas.mosquitero*((alto/100)*(ancho/100)))
    }
    if(/sin rieles/.test(body)||/con mosquitero/.test(body)){
        let gastoverticales, gastohorizontales, gastotela, gastoherrajes;
        if(/ mosquitero doble /.test(body)){
             gastoverticales =((materiales.mosquitero[coloralum].vertical460)/4.60)*(alto/100)*4
             gastohorizontales=((materiales.mosquitero[coloralum].horizontal)/6.05)*(ancho/100)
             gastotela= (alto/100)*(ancho/100)*materiales.mallas.mosquitero
             gastoherrajes = 4*materiales.herrajes.carre_mosqui+4*materiales.herrajes.fleje+2*materiales.herrajes.plana12
        }
        else{
             gastoverticales =((materiales.mosquitero[coloralum].vertical460)/4.60)*(alto/100)*2
             gastohorizontales=((materiales.mosquitero[coloralum].horizontal)/6.05)*(ancho/100)
             gastotela= (alto/100)*(ancho/100)*materiales.mallas.mosquitero
             gastoherrajes = 2*materiales.herrajes.carre_mosqui+2*materiales.herrajes.fleje+2*materiales.herrajes.plana12
        }
    
    total = gastohorizontales+gastoverticales+gastotela+gastoherrajes
    return total
    }else{
    let gastorieles=(materiales.mosquitero[coloralum].adaptador/6.05)*(ancho/100)*2+materiales.mosquitero[coloralum].silla/605*(ancho/100)*2
    let gastoverticales =((materiales.mosquitero[coloralum].vertical460)/4.60)*(alto/100)*2
    let gastohorizontales=((materiales.mosquitero[coloralum].horizontal)/6.05)*(ancho/100)*2
    let gastotela= (alto/100)*(ancho/100)*40
    let gastoherrajes = 2*materiales.herrajes.carre_mosqui+2*materiales.herrajes.fleje+2*materiales.herrajes.plana12
    
    total= gastohorizontales+gastoverticales+gastotela+gastoherrajes+gastorieles
   
    return total
    } 
}

const cot_plegadiza=(coloralum, alto, ancho, divi, gastovidrio)=>{
    let gastoverticales
    let gastohorizontales
    let gastosjuquillos
    let gastocontrmarco
    let gastoherrajes
    let total
    if(alto>205&&alto<305){
        gastoverticales=materiales.puerta_unatrescuartos[coloralum].remate*divi
    }
    else if(alto<205){
        gastoverticales=materiales.puerta_unatrescuartos[coloralum].remate*(divi*2/3)
    }else{
        gastoverticales=materiales.puerta_unatrescuartos[coloralum].remate*divi*2
    }

    gastohorizontales=materiales.puerta_unatrescuartos[coloralum].cabezal*((ancho-(5*divi*2))*2/607)
    gastosjuquillos=(((ancho-(5*divi*2))*2+(alto*divi*2))*2/607)*materiales.puerta_unatrescuartos[coloralum].junquillo
    gastoherrajes=materiales.herrajes.carrito*divi*2+materiales.herrajes.chapatetra+materiales.herrajes.vinil11*3+materiales.selladores.acrilastic*2
    if(ancho<305){
    gastocontrmarco=materiales.puerta_unatrescuartos[coloralum].medioriel+materiales.tubular[coloralum].tub2x1}
    else{
    gastocontrmarco=materiales.puerta_unatrescuartos[coloralum].rielpesado+materiales.tubular[coloralum].tub2x1} 
    total=gastocontrmarco+gastoherrajes+gastohorizontales+gastosjuquillos+gastoverticales+gastovidrio
    return total
}

const cot_CorredizaNacional = (coloralum, alto, ancho, tipo, mosquitero, divi, g_vidrio, body )=>{
    let g_perimetros
    let g_hojas
    let g_herrajes
    let g_mosquitero = 0
    let total

    if(tipo=='1.5in'){
        g_perimetros=(materiales.corrediza['1.5in']['natural'].jamba/601)*(alto*2+ancho)+(materiales.corrediza['1.5in']['natural'].riel/605)*ancho
        g_hojas=(materiales.corrediza['1.5in'][coloralum].traslape/605)*(alto*3)+(materiales.corrediza['2in'][coloralum].cabezal/605)*(ancho*1.5)
        g_herrajes=materiales.selladores.acrilastic+100
        g_mosquitero=(materiales.mosquitero[coloralum].solera/605)*(ancho+largo)+50

        total= g_herrajes+g_hojas+g_mosquitero+g_perimetros
        return total;
    }
    
   
    if(mosquitero==true){
        g_mosquitero=cot_mosquitero(coloralum, alto, ancho, body)
        console.log('gasto mosquitero:', g_mosquitero)
        if((alto*2+ancho)>607){
            g_perimetros= materiales.corrediza[tipo][coloralum].jamba_c_mosq*1.5+materiales.corrediza[tipo][coloralum].riel_c_mos*(ancho/607)
            console.log('perimetros 1')
            if(alto<230){
                if(divi==3){
                    g_hojas=materiales.corrediza[tipo][coloralum].cerco460+materiales.corrediza[tipo][coloralum].traslape460*2+((ancho-20)/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*4+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }else if(divi==4){
                    g_hojas=(materiales.corrediza[tipo][coloralum].cerco460*2)+(materiales.corrediza[tipo][coloralum].traslape460*2)+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }else{
                    g_hojas=(materiales.corrediza[tipo][coloralum].cerco460)+(materiales.corrediza[tipo][coloralum].traslape460)+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }
            }else{

                if(divi==3){
                    g_hojas=materiales.corrediza[tipo][coloralum].cerco610+materiales.corrediza[tipo][coloralum].traslape610*2+((ancho-20)/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*4+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }else if(divi==4){
                    g_hojas=(materiales.corrediza[tipo][coloralum].cerco610*2)+(materiales.corrediza[tipo][coloralum].traslape610*2)+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }else{
                    g_hojas=(materiales.corrediza[tipo][coloralum].cerco610)+(materiales.corrediza[tipo][coloralum].traslape610)+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }   
            }
        
        }else{
            g_perimetros=((alto*2+ancho)/607)*materiales.corrediza[tipo][coloralum].jamba_c_mosq+(ancho/607)*materiales.corrediza[tipo][coloralum].riel_c_mos
            console.log('perimetros 2')
            if(divi==3){
            g_hojas=(alto/607)*((materiales.corrediza[tipo][coloralum].cerco610*2)+(materiales.corrediza[tipo][coloralum].traslape610*4))+((ancho-20)/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
            g_herrajes= materiales.herrajes.carreitlla3*4+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic
            }else{
            g_hojas=(alto/607)*((materiales.corrediza[tipo][coloralum].cerco610*divi)+(materiales.corrediza[tipo][coloralum].traslape610*divi))+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
            g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic
            }
        }
    }else{
        g_mosquitero=cot_mosquitero(coloralum, alto, ancho, body)
        if((alto*2+ancho)>607){
            g_perimetros= materiales.corrediza[tipo][coloralum].jamba_s_mosq*1.5+materiales.corrediza[tipo][coloralum].riel_s_mos*(ancho/607)
            console.log('perimetros 3')
            if(alto<230){
                if(divi==3){
                    g_hojas=materiales.corrediza[tipo][coloralum].cerco460+materiales.corrediza[tipo][coloralum].traslape460*2+((ancho-20)/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*4+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }else if(divi==4){
                    g_hojas=(materiales.corrediza[tipo][coloralum].cerco460*2)+(materiales.corrediza[tipo][coloralum].traslape460*2)+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }else{
                    g_hojas=(materiales.corrediza[tipo][coloralum].cerco460)+(materiales.corrediza[tipo][coloralum].traslape460)+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }
            }else{
                if(divi==3){
                    g_hojas=materiales.corrediza[tipo][coloralum].cerco610+materiales.corrediza[tipo][coloralum].traslape610*2+((ancho-20)/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*4+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }else if(divi==4){
                    g_hojas=(materiales.corrediza[tipo][coloralum].cerco610*2)+(materiales.corrediza[tipo][coloralum].traslape610*2)+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }else{
                    g_hojas=(materiales.corrediza[tipo][coloralum].cerco610)+(materiales.corrediza[tipo][coloralum].traslape610)+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
                    g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2
                }   
            } 
        }else{      
            g_perimetros=((alto*2+ancho)/607)*materiales.corrediza[tipo][coloralum].jamba_s_mosq+(ancho/607)*materiales.corrediza[tipo][coloralum].riel_s_mos
            console.log('perimetros 4')
            if(divi==3){
            g_hojas=(alto/607)*((materiales.corrediza[tipo][coloralum].cerco610*2)+(materiales.corrediza[tipo][coloralum].traslape610*4))+((ancho-20)/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
            g_herrajes= materiales.herrajes.carreitlla3*4+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic
            }else{
            g_hojas=(alto/607)*((materiales.corrediza[tipo][coloralum].cerco610*divi)+(materiales.corrediza[tipo][coloralum].traslape610*divi))+((ancho-(divi*5))/607)*(materiales.corrediza[tipo][coloralum].zoclo2venas+materiales.corrediza[tipo][coloralum].cabezal)
            g_herrajes= materiales.herrajes.carreitlla3*2+materiales.herrajes.embutir3pulgadas+materiales.herrajes.vinil11+materiales.selladores.acrilastic
            }
        }
        
    }
   
    total= g_perimetros+g_hojas+g_herrajes+g_mosquitero+g_vidrio
    return total;
}



const cot_Domo=(coloralum, largo, ancho, lamina, tubo, g_vidrio)=>{

    let largueros = 2
    let ancheros= 2

    let g_aluminio
    let g_lamina
    let g_herrajes
    let total=0
    
    largueros+=(Math.round(ancho/90)-1)
    ancheros+=(Math.round(largo/90)-1)

    console.log('el tubo es '+tubo)
    

    if(lamina=='vidrio'){
        g_lamina=g_vidrio
    }else{
    g_lamina=materiales.laminas['policarbonato']*((largo+15)/100)*((ancho+15)/100)}

    g_aluminio=materiales.tubular[coloralum][tubo]*(largo/607)*largueros+materiales.tubular[coloralum][tubo]*(ancho/607)*ancheros
    
    if(lamina=='policarbonato'){
    g_herrajes=50+materiales.selladores.duretan
    }else{
    g_herrajes=(largo/100)*largueros*(materiales.selladores.norton/30)+(ancho/100)*ancheros*(materiales.selladores.norton/30)+materiales.selladores.duretan
    }

    console.log('gasto aluminio:'+g_aluminio)
    console.log('gasto lamina:'+g_lamina)
    console.log('gasto herrajes'+g_herrajes)
    total=g_aluminio+g_lamina+g_herrajes

    return total

}



module.exports = {cot_vidrio, cot_mosquitero, cot_plegadiza, cot_CorredizaNacional, cot_Domo}
