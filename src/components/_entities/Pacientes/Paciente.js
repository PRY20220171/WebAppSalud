export default {
    name: 'Paciente',

    components: {
    },
    
    data () {
      return {
        
        model:{
            id:'',
            fec_nac:'',
            anios:null,
            meses:null,
            dias:null,
            edad:'',
            
            nombres:'',
            apellidos:'',
            docnum:'',
            doctipo:'',
            sexo:'',
            gruposang:'',
            rh:'',
            telefono:'',
            gradoinstruccion:'',
            ocupacion:'',
            estadocivil:'',

            lugarnacid:'',
            domicilioactid:'',
            idnino:'',
            idantecedenteperi:'',
            idantecedentefam:'',
            idantecedentepato:'',
        },

        tipo_doc: ['dni', 'Carnet de Extranjería', 'Pasaporte'],
        tipo_sexo: ['masculino','femenino','intersexual'],
        tipo_sangre: ['O','A','B','AB'],
        tipo_rh:['negativo','positivo','nulo'],
        tipo_educ: ['Inicial','Primario','Secundario','Técnica','Superior','Especial'],
        tipo_ecivil: [ 'soltero', 'casado', 'divorciado', 'en separación', 'viudo', 'concubinato']
      }
    },

    validators: {
        'model.Nombres'(value) {
            return this.$validator
                .value(value)
                .required();
        },
        'model.Apellidos'(value) {
            return this.$validator
                .value(value)
                .required();
        },
        'model.Docnum'(value) {
            return this.$validator
                .value(value)
                .required();
        },
    },

    mounted() {
        this.initialize();
    },
    methods:{
        convertTypeSex(val){
            let sexType=''
            switch (val) {
                case 'm':sexType=this.tipo_sexo[0]; break;
                case 'f':sexType=this.tipo_sexo[1]; break;
                case 'i':sexType=this.tipo_sexo[2]; break;
                default:val;
              }
              return sexType;
        },
        convertTypeRH(val){
            let rhType=''
            switch (val) {
                case '-':rhType=this.tipo_rh[0]; break;
                case '+':rhType=this.tipo_rh[1]; break;
                case '0':rhType=this.tipo_rh[2]; break;
                default:val;
              }
              return rhType;
        },
        initialize() {
            let id = this.$route.params.id;
            if (!id) return;
            this.isLoading = true;
            this.$proxies.pacienteProxy.getById(id)
                .then(x => {
                    this.model = x.data;
                    this.model.sexo=this.convertTypeSex(this.model.sexo)
                    this.model.rh=this.convertTypeRH(this.model.rh)
                    this.model.gruposang=this.model.gruposang.toUpperCase()
                    this.isLoading = false;
                })
                .catch(() => {
                    this.isLoading = false; 
                    /* this.$notify({
                        group: "global",
                        type: "is-danger",
                        text: 'Ocurrió un error inesperado'
                    }); */
                });
            
        },

      clacEdad(){
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
      },
      save() {
        console.log("guardar paciente")

              if (this.model.id) {
                  this.$proxies.pacienteProxy.update(this.model.id, this.model)
              } else {
                  this.$proxies.pacienteProxy.register(this.model)
              }
      }
      
    }
  }