export default {
    name: 'Acompanante',

    components: {
    },
    
    data () {
      return {
        
        model:{
            idacompanante: '',
            nombres: '',
            apellidos: '',
            docnum: '',
            doctipo: '',
            fecnac: '',
            telefono: '',
            gradoinstruccion: '',
            ocupacion: '',
            parentezco: '',
        },

        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        tipo_educ: ['Inicial','Primario','Secundario','Técnica','Superior','Especial'],
        tipo_parentezco: ['Padre', 'Madre','Hermano(a)','Tío(a)','Primo(a)','Hijo(a)','Nieto(a)','Sobrino(a)','Ninguno'],

      }
    },
    
    methods:{
      clacEdad: function(){
        var fecha=this.model.fec_nac;
        var ultimoDiaMes = new Date();
        
        var values = fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];

        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth() + 1;
        var ahora_dia = fecha_hoy.getDate();

        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if (ahora_mes < mes) {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia)) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }

        // calculamos los meses
        var meses = 0;

        if (ahora_mes > mes && dia > ahora_dia)
            meses = ahora_mes - mes - 1;
        else if (ahora_mes > mes)
            meses = ahora_mes - mes
        if (ahora_mes < mes && dia < ahora_dia)
            meses = 12 - (mes - ahora_mes);
        else if (ahora_mes < mes)
            meses = 12 - (mes - ahora_mes + 1);
        if (ahora_mes == mes && dia > ahora_dia)
            meses = 11;

        // calculamos los dias
        var dias = 0;
        if (ahora_dia > dia)
            dias = ahora_dia - dia;
        if (ahora_dia < dia) {
            ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
            dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
        }
        if(edad < 0)
            this.model.edad = 'ERROR'
        else{
            this.model.anios=edad;
            this.model.meses=meses;
            this.model.dias=dias;
            this.model.edad = edad + " años, " + meses + " meses y " + dias + " días";
        }
      }
    }
  }