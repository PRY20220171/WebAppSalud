
 import TopBar from "../../../views/Bars/TopBar.vue";
// import TopBar from '../Bars/TopBar.vue';
  export default {
    name: 'RegistrarPaciente',
    components: {
    TopBar,
   // TopBar,
   // TopBar
},
    data () {
      return {
        e1: 1,
        fec_nac:'',
        edad:'',
        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        sexo: ['masculino','femenino'],
        tipo_sangre: ['O','A','B','AB'],
        tipo_rh:['negativo','positivo','nulo'],
        tipo_educ: ['Inicial','Primario','Secundario','Técnica','Superior','Especial'],
        tipo_ecivil: [ 'soltero', 'casado', 'divorciado', 'en separación', 'viudo', 'concubinato']
      }
    },
    methods:{
      clacEdad: function(){
        var fecha=this.fec_nac;
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
          this.edad = 'ERROR'
        else
          this.edad = edad + " años, " + meses + " meses y " + dias + " días";
      }
    }
  }