const {materiales} =  require('../precios')

function cot_serie4000(alto, ancho, gastovidrio, mosquitero, cant_hojas, coloralum){

    const cant_hojas=0, cant_riel2=0, cant_riel3=0, cant_mos=0, cant_adapt= 0;

    const viasriel='2'

    if(cant_hojas==2&&mosquitero==false){
        viasriel='2';
    }
    else if(cant_hojas==2&&mosquitero==true){
        viasriel='3';
    }
    else if(cant_hojas==3&&mosquitero==false){
        viasriel='3';
    }
    else if(cant_hojas==3&&mosquitero==true){
        viasriel='3';
    }
}