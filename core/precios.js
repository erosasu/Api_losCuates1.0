var procesos={
    esmerilado:100,
    biselado:50,
    templado:200,
    cantoboleado:50,
    chaflan:50,

}
var materiales={
    cristal :{
        'claro':{'3mm':{'crudo':156},
                '4mm' :{'crudo':229},
                '6mm':{'crudo' :284,
                        'templado':500
            },'9mm':{'crudo':600,
                        'templado':930}},

        'tintex':{'6mm':{'crudo':385, 
                        'templado':800
                },'9mmm':{'crudo':993,
                        'templado':1570}},

        'filtrasol':{'6mm':{'crudo':330,
                        'templado':730}},

        'espejo':{'3mm':{'crudo':280},
                '4mm':{'crudo':380},
                '6mm':{'crudo':470}},

        'satinado':{'6mm':{'crudo':508,
                        'templado':989},
                    '9mm':{'crudo':899,
                        'templado':1639}}
    },
    selladores:{
        silicon:80,
        acrilastic:55,
        duretan:115,
        fijaset:150,
        norton:300
    },
    herrajes : {
        embutir2pulgadad:50,
        embutir3pulgadas:60,
        gorranapoleon:15,
        carreitlla3:20,
        carre_mosqui:10,
        fleje:12,
        carrecancel:15,
        operador:209,
        bisaeuro:40,
        bisa_temp_desce:200,
        bisa_temp_180:250,
        bisa_temp_90:250,
        escuadra_temp:50,
        kit6mm_120:1000,
        kit6mm_150:1100,
        kit6mm_200:1250,
        tornillo:1,
        plana12:15,
        carrito: 50,
        vinil11:80,
        vinil15:150,
        chapatetra:200,
        doblemanija:300,
        pivote:120,
        embutir4000:120,
        kittemplado6mm:{'natural':{ '120':950, '150':1030, '200':1160},
                        'cromado':{'120':1140, '150':1240, '200':1370},
                        'negro':{'120':1095, '150':1175, '200':1310},
                        'blanco':{'120':1095, '150':1175, '200':1310},
                        'e100':{'120':1095,'150':1175,'200':1310}}
    },
    mosquitero :{
        'natural' : {
            vertical460 : 300,
            vertical610:400,
            horizontal: 400,
            adaptador :142,
            silla:250,
            solera:150,
        },
        'blanco' : {
            vertical460 : 300,
            vertical610:400,
            horizontal: 400,
            adaptador : 200,
            silla:250,
            solera:150
        },
        'negro' : {
            vertical460 : 297,
            vertical610:400,
            horizontal: 384,
            adaptador : 211,
            silla:250,
            solera:150
        },
        'e100' : {
            vertical460 : 300,
            vertical610:400,
            horizontal: 400,
            adaptador : 200,
            silla:250,
            solera: 170
        },
        'griseuropa' : {
            vertical460 : 300,
            vertical610:392,    //act 15-03-2023
            horizontal: 384,    //act 15-03-2023
            adaptador : 213,    //act 15-03-2023
            silla:250,
            solera: 170
        }
    },
    corrediza:{
        '1.5in':{
            'natural':{
                jamba:260,
                traslape:133,
                riel:170},
            'blanco':{
                jamba:260,
                traslape:133,
                riel:170},
            'negro':{
                jamba:260,
                traslape:133,
                riel:170},
        },
        '2in':{
            'natural' : {
                jamba_s_mosq : 395,
                jamba_c_mosq: 524,
                riel_s_mos : 272,
                riel_c_mos: 341,
                cerco460: 180,
                cerco610: 239,
                traslape460: 229,
                traslape610 : 304,
                zoclo2venas: 467,
                cabezal: 185,
            },
            'blanco' : {
                jamba_s_mosq : 395,
                jamba_c_mosq: 524,
                riel_s_mos : 272,
                riel_c_mos: 341,
                cerco460: 180,
                cerco610: 239,
                traslape460: 229,
                traslape610 : 304,
                zoclo2venas: 467,
                cabezal: 185,    
            },
            'negro' :{
                jamba_s_mosq : 395,
                jamba_c_mosq: 524,
                riel_s_mos : 272,
                riel_c_mos: 341,
                cerco460: 180,
                cerco610: 239,
                traslape460: 229,
                traslape610 : 304,
                zoclo2venas: 467,
                cabezal: 185,    
            },
            'e100' : {
                jamba_s_mosq : 500,
                jamba_c_mosq : 600,
                riel_s_mos : 400,
                riel_c_mos: 500,
                cerco460: 350,
                cerco610: 450,
                traslape460: 380,
                traslape610 : 480,
                zoclo2venas: 500,
                cabezal: 250,   
            }},

        '3in':{
            'natural' : {
                jamba_s_mosq : 468,
                jamba_c_mosq : 602,
                riel_s_mos : 347,
                riel_c_mos: 394,
                cerco460: 334,
                cerco610: 314,
                traslape460: 376,
                traslape610 : 500,
                zoclo2venas: 653,
                zoclo1vena: 314,
                cabezal: 302,   
            },
            'blanco' : {
                jamba_s_mosq : 468,
                jamba_c_mosq : 602,
                riel_s_mos : 347,
                riel_c_mos: 394,
                cerco460: 334,
                cerco610: 314,
                traslape460: 376,
                traslape610 : 500,
                zoclo2venas: 653,
                zoclo1vena: 314,
                cabezal: 302,    
            },
            'negro' : {
                jamba_s_mosq : 468,
                jamba_c_mosq : 602,
                riel_s_mos : 347,
                riel_c_mos: 394,
                cerco460: 334,
                cerco610: 314,
                traslape460: 376,
                traslape610 : 500,
                zoclo2venas: 653,
                zoclo1vena: 314,
                cabezal: 302,
            },  
            'e100' : {
                jamba_s_mosq : 500,
                jamba_c_mosq : 600,
                riel_s_mos : 400,
                riel_c_mos: 500,
                cerco460: 350,
                cerco610: 450,
                traslape460: 380,
                traslape610 : 480,
                zoclo2venas: 500,
                zoclo1vena: 400,
                cabezal: 250,   
            },
            'griseuropa' : {
                jamba_s_mosq : 500,
                jamba_c_mosq : 898, //act 15-03-2023-alamo
                riel_s_mos : 498,   //act 15-03-2023-alamo
                riel_c_mos: 700,
                cerco460: 350,
                cerco610: 505,      //act 15-03-2023-alamo
                traslape460: 380,
                traslape610 : 593,  //act 15-03-2023-alamo
                zoclo2venas: 777,   //act 15-03-2023-alamo
                zoclo1vena: 400,
                cabezal: 426,       //act 15-03-2023-alamo
            }
        },
        '4000':{
            'natural':{
                riel:{'2':1200,'3':1500},  
                hojaventana:800,
                hojamosqui:900,
                escuadrahoja:20,
                escuadrariel:25,
                carrehoja:80,
                carremosqui:50,
                traslape:350
            },
            'blanco':{riel:{'2':1200,'3':1500}, 
                hojaventana:800,
                hojamosqui:900,
                escuadrahoja:20,
                escuadrariel:25,
                carrehoja:80,
                carremosqui:50
            },
            'negro':{riel:{'2':1200,'3':1500},  
                hojaventana:800,
                hojamosqui:900,
                escuadrahoja:20,
                escuadrariel:25,
                carrehoja:80,
                carremosqui:50
            },
            'griseuropa':{riel:{'2':1200,'3':1500},  
                hojaventana:800,
                hojamosqui:900,
                escuadrahoja:20,
                escuadrariel:25,
                carrehoja:80,
                carremosqui:50
            },
            'e100':{riel:{'2':1200,'3':1500},   
                hojaventana:800,
                hojamosqui:900,
                escuadrahoja:20,
                escuadrariel:25,
                carrehoja:80,
                carremosqui:50
            }
        }
    },
    proyeccion:{
        'natural':{
            marco:413,
            contramarco:404
        },
        'blanco':{
            marco:413,
            contramarco:404
        },
        'negro':{
            marco:450,
            contramarco:404
        },
        'griseuropa':{
            marco:567,               //act 16-03-23 Alamo
            contramarco:495          //act 16-03-23 Alamo
        },
        'e100':{
            marco:450,
            contramarco:404
        }
    },
    cancel_baño:{
        'natural' : {
            marco_semilujo : 223,
            riel: 415,
            jambabaño : 150,
            guia:202
        },
        'blanco' : {
            marco_semilujo : 223,
            riel: 415,
            jambabaño : 150,
            guia:202
        },
        'negro' :{
            marco_semilujo : 223,
            riel: 415,
            jambabaño : 150,
            guia:202
        }
    },
    laminas:{
        'acrilico':{
            acri90x180:880, 
            acri120x180:1172, 
            acri150x180:1475, 
            acri180x240:2345},
        'plastico':{
            pla60x180:350,
            pla100x180:450,
            pla120x180:550,
            pla150x180:650,},
        'policarbonato':205
    },
    puerta_unatrescuartos:{
        'natural' :{
            cerco460:351,
            cerco610:465,
            zoclo:735,
            cabezal :509,
            junquillo: 120,
            intermedio: 451,
            rielpesado: 1190,
            medioriel:600,
            remate:414
        },
        'blanco' :{
            cerco460:500,
            cerco610:600,
            zoclo:700,
            cabezal :535,
            junquillo: 132,
            intermedio: 600,
            rielpesado: 1700,
            medioriel:825,
            remate:489
        },
        'negro' :{
            cerco460:500,
            cerco610:600,
            zoclo:700,
            cabezal :600,
            junquillo: 150,
            intermedio: 600,
            rielpesado: 1700,
        },
        'e100' :{
            cerco460:500,
            cerco610:600,
            zoclo:700,
            cabezal :600,
            junquillo: 150,
            intermedio: 600,
            rielpesado: 1700,
            remate:600,
        },
        'griseuropa' :{
            cerco460:500,
            cerco610:571,   //act 15-03-2023-alamo
            zoclo:797,      //act 15-03-2023-alamo
            cabezal :608,   //act 15-03-2023-alamo
            junquillo: 187, //act 15-03-2023-alamo
            intermedio: 559,//act 15-03-2023-alamo
            rielpesado: 1700,
            remate:600,
        }
    },
    proyeccion:{
        'natural':{
            marco : 450,
            contramarco : 500
        },
        'blanco':{
            marco : 450,
            contramarco : 500
        },
        'negro':{
            marco : 450,
            contramarco : 500
        },
        'e100':{
            marco : 450,
            contramarco : 500
        },
        'griseuropa':{
            marco : 600,
            contramarco : 650
        }
    },
    fija:{
        '1.5in':{
            'natural':{
                bolsa:294,
                escalonado:256,
                tapabolsa:141,
            },
            'blanco':{
                bolsa:294,
                escalonado:256,
                tapabolsa:141,
            },
            'negro':{
                bolsa:294,
                escalonado:256,
                tapabolsa:141,
            }
        },
        '2in':{
            'natural':{
                tapalisa:128,
                molduraunion:130,
                esquinero:581,
                tapabolsa:193,
                bolsa:343,
                escalonado:324,
                junquillo2:131,
                bolsacorta:440,
            },
            'blanca' :{
                tapalisa:128,
                molduraunion:130,
                esquinero:581,
                tapabolsa:193,
                bolsa:343,
                escalonado:324,
                junquillo2:131,
                bolsacorta:440,
            },
            'negro':{
                tapalisa:128,
                molduraunion:130,
                esquinero:581,
                tapabolsa:193,
                bolsa:343,
                escalonado:324,
                junquillo2:131,
                bolsacorta:440,
            },
            'e100' :{
                tapalisa:150,
                molduraunion:150,
                esquinero:650,
                tapabolsa:240,
                bolsa:400,
                escalonado:380,
                junquillo2:170,
                bolsacorta:490,
            },
            'griseuropa' :{
                tapalisa:150,
                molduraunion:150,
                esquinero:650,
                tapabolsa:240,
                bolsa:400,
                escalonado:380,
                junquillo2:170,
                bolsacorta:490,
            }
        },
        '3in':{
            'natural' :{
                tapalisa:185,
                molduraunion:150,
                esquinero:828,
                tapabolsa:295,
                bolsa:553,
                escalonado:497,
                junquillo2:148,
                bolsacorta:521,
                bolsalisa:421,
            },
            'blanco' :{
                tapalisa:185,
                molduraunion:150,
                esquinero:828,
                tapabolsa:295,
                bolsa:553,
                escalonado:497,
                junquillo2:148,
                bolsacorta:521,
                bolsalisa:421,
            },
            'negro' :{
                tapalisa:185,
                molduraunion:150,
                esquinero:828,
                tapabolsa:295,
                bolsa:553,
                escalonado:497,
                junquillo2:148,
                bolsacorta:521,
                bolsalisa:421,
            },
            'e100' :{
                tapalisa:185,
                molduraunion:150,
                esquinero:828,
                tapabolsa:295,
                bolsa:553,
                escalonado:497,
                junquillo2:148,
                bolsacorta:521,
                bolsalisa:421,
            },
            'griseuropa' :{
                tapalisa:366,           //act 16-03-23 Alamo
                molduraunion:150,
                esquinero:828,
                tapabolsa:295,
                bolsa:797,              //act 16-03-23 Alamo
                escalonado:716,         //act 16-03-23 Alamo
                junquillo2:246,         //act 16-03-23 Alamo
                bolsacorta:521,
                bolsalisa:421,
            },
        },
        '1400':{
            'natural':{
                marcobatiente:626,
                hojaventana:720,
                junquillo:247,
                fijotubular:900,
                junquilloredon:200,
                escuadra:25,
            },
            'blanco':{
                marcobatiente:626,
                hojaventana:720,
                junquillo:247,
                fijotubular:900,
                junquilloredon:200,
                escuadra:25,
            },
            'negro':{
                marcobatiente:626,
                hojaventana:720,
                junquillo:247,
                fijotubular:900,
                junquilloredon:200,
                escuadra:25,
            },
            'griseuropa':{
                marcobatiente:626,  //act 15-03-2023-alamo
                hojaventana:720,    //act 15-03-2023-alamo
                junquillo:247,      //act 15-03-2023-alamo
                fijotubular:900,
                junquilloredon:200,
                escuadra:25,
            },
        }
    },
    tubular:
        {'natural' :{
            '3/4':137,
            '1.5':291,
            '1.75':494,
            '1.25':260,
            '1x1':192,
            '2x1':305,
            '2x2':417,
            '3x1':484,
            '3x1.5':472,
            '1.5x.75':206,
            '4x1.75':930,
            '2.5x1.25':490,
            '3x1.75':623
        },
        'blanco' : {
            '3/4':137,
            '1.5':291,
            '1.75':494,
            '1.25':260,
            '1x1':192,
            '2x1':305,
            '2x2':417,
            '3x1':484,
            '3x1.5':472,
            '1.5x.75':206,
            '4x1.75':930,
            '2.5x1.25':490,
            '3x1.75':623
        },
        'negro' : {
            '3/4':137,
            '1.5':291,
            '1.75':494,
            '1.25':260,
            '1x1':192,
            '2x1':305,
            '2x2':417,
            '3x1':484,
            '3x1.5':472,
            '1.5x.75':206,
            '4x1.75':930,
            '2.5x1.25':490,
            '3x1.75':623
        },
        'griseuropa' :{
            '3/4':180,
            '1.5':350,
            '1.75':500,
            '1.25':320,
            '1x1':270,
            '2x1':400,
            '2x2':480,
            '3x1':560,
            '3x1.5':580,
            '1.5x.75':270,
            '4x1.75':1150,
            '2.5x1.25':570,
            '3x1.75':700
        }
    },
    peliculas :{
        peliculaesmeril:100,
        pelicureflecta :100,
        pelicupolarizada :100,
        esmerilado :100
        },
    duela:{
        'natural':{'unavista':370,'dosvistas':630},
        'blanco':{'unavista':370,'dosvistas':630},
        'negro':{'unavista':370,'dosvistas':630},
        'e100':{'unavista':370,'dosvistas':630},
        'griseuropa':{'unavista':500,'dosvistas':800},
    },
    perfilesvarios:{
                'natural':{silla:150,
                            batientedoble:250,
                            batientetrescuartos:100},
                'blanco':{silla:150,
                    batientedoble:250,
                    batientetrescuartos:100},
                'negro':{silla:150,
                    batientedoble:250,
                    batientetrescuartos:100},
                'e100':{silla:150,
                    batientedoble:250,
                    batientetrescuartos:100},
                'griseuropa':{silla:150,
                    batientedoble:250,
                    batientetrescuartos:100},
                },
}


module.exports= {materiales, procesos}







