import Bars from '../../views/Shared/Bars.vue';
//import Paciente from '../../views/_createOrUpdate/Paciente/PacienteView';

export default {
    name: 'PacienteIndex',
    components: {
        Bars,
        //Paciente
        //Usuario
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            search: '',
            headers: [
                {
                  text: 'Nombres',value: 'nombres',
                },
                { text: 'doctipo', value: 'doctipo' },
                { text: 'docnum', value: 'docnum' },
                { text: 'correo', value: 'email' },
                { text: 'Gruposang', value: 'Gruposang' },
                { text: 'telefono', value: 'telefono' },
                { text: 'Fec. nacimiento', value: 'date' },
              ],
            pacientes : [
                {
                    "nombres": "Joseph Morris",
                    "doctipo": "DNI",
                    "docnum": "44797317-0",
                    "email": "femenino",
                    "Gruposang": "O-",
                    "telefono": "967281947",
                    "date": "02/04/2007"
                },
                {
                    "nombres": "Kitra Hendricks",
                    "doctipo": "DNI",
                    "docnum": "6265867-3",
                    "email": "femenino",
                    "Gruposang": "O-",
                    "telefono": "928450707",
                    "date": "02/12/1992"
                },
                {
                    "nombres": "Derek Black",
                    "doctipo": "CE",
                    "docnum": "33522263-6",
                    "email": "masculino",
                    "Gruposang": "O+",
                    "telefono": "948170485",
                    "date": "06/17/2015"
                },
                {
                    "nombres": "Kasimir Blankenship",
                    "doctipo": "CE",
                    "docnum": "29296-6",
                    "email": "masculino",
                    "Gruposang": "O+",
                    "telefono": "964256568",
                    "date": "03/09/1957"
                },
                {
                    "nombres": "Fritz Abbott",
                    "doctipo": "DNI",
                    "docnum": "10451779-K",
                    "email": "femenino",
                    "Gruposang": "A-",
                    "telefono": "971471309",
                    "date": "01/31/2018"
                },
                {
                    "nombres": "Paul Becker",
                    "doctipo": "DNI",
                    "docnum": "47980992-5",
                    "email": "femenino",
                    "Gruposang": "A-",
                    "telefono": "954159405",
                    "date": "06/13/1990"
                },
                {
                    "nombres": "Driscoll Bailey",
                    "doctipo": "CE",
                    "docnum": "2496166-4",
                    "email": "masculino",
                    "Gruposang": "A+",
                    "telefono": "943907966",
                    "date": "02/22/1988"
                },
                {
                    "nombres": "Ryder Castillo",
                    "doctipo": "CE",
                    "docnum": "32704882-1",
                    "email": "masculino",
                    "Gruposang": "A+",
                    "telefono": "941678203",
                    "date": "04/24/1968"
                },
                {
                    "nombres": "Xandra Lindsey",
                    "doctipo": "DNI",
                    "docnum": "6518807-4",
                    "email": "femenino",
                    "Gruposang": "B-",
                    "telefono": "935923694",
                    "date": "07/30/1986"
                },
                {
                    "nombres": "Daryl Sanford",
                    "doctipo": "DNI",
                    "docnum": "1453351-6",
                    "email": "femenino",
                    "Gruposang": "B-",
                    "telefono": "933367094",
                    "date": "12/16/2017"
                },
                {
                    "nombres": "Uta Morrison",
                    "doctipo": "CE",
                    "docnum": "8203901-5",
                    "email": "masculino",
                    "Gruposang": "B+",
                    "telefono": "932549208",
                    "date": "07/13/1961"
                },
                {
                    "nombres": "Clayton Dorsey",
                    "doctipo": "CE",
                    "docnum": "45150121-6",
                    "email": "masculino",
                    "Gruposang": "B+",
                    "telefono": "945467440",
                    "date": "08/01/2016"
                },
                {
                    "nombres": "Jason Terrell",
                    "doctipo": "DNI",
                    "docnum": "39680718-1",
                    "email": "femenino",
                    "Gruposang": "AB+",
                    "telefono": "987581826",
                    "date": "03/20/1992"
                },
                {
                    "nombres": "Dale Pruitt",
                    "doctipo": "DNI",
                    "docnum": "29320419-5",
                    "email": "femenino",
                    "Gruposang": "AB+",
                    "telefono": "951735043",
                    "date": "08/01/1987"
                },
                {
                    "nombres": "Cassidy Reeves",
                    "doctipo": "CE",
                    "docnum": "40599590-5",
                    "email": "masculino",
                    "Gruposang": "AB-",
                    "telefono": "977664867",
                    "date": "08/16/1976"
                },
                {
                    "nombres": "Keelie Levine",
                    "doctipo": "CE",
                    "docnum": "41993806-8",
                    "email": "masculino",
                    "Gruposang": "AB-",
                    "telefono": "951000099",
                    "date": "05/09/1989"
                },
                {
                    "nombres": "Timon Morin",
                    "doctipo": "DNI",
                    "docnum": "354240-8",
                    "email": "femenino",
                    "Gruposang": "O-",
                    "telefono": "979350922",
                    "date": "10/17/1983"
                },
                {
                    "nombres": "Kasimir Leon",
                    "doctipo": "DNI",
                    "docnum": "4596825-1",
                    "email": "femenino",
                    "Gruposang": "O-",
                    "telefono": "943948077",
                    "date": "09/25/2014"
                },
                {
                    "nombres": "Drew Sullivan",
                    "doctipo": "CE",
                    "docnum": "40181906-1",
                    "email": "masculino",
                    "Gruposang": "O+",
                    "telefono": "967069549",
                    "date": "01/11/1936"
                },
                {
                    "nombres": "Nora Steele",
                    "doctipo": "CE",
                    "docnum": "6589717-2",
                    "email": "masculino",
                    "Gruposang": "O+",
                    "telefono": "979941815",
                    "date": "01/30/2018"
                },
                {
                    "nombres": "Herman Snow",
                    "doctipo": "DNI",
                    "docnum": "3750963-9",
                    "email": "femenino",
                    "Gruposang": "A-",
                    "telefono": "939921762",
                    "date": "06/10/2012"
                },
                {
                    "nombres": "Silas Lara",
                    "doctipo": "DNI",
                    "docnum": "26830598-K",
                    "email": "femenino",
                    "Gruposang": "A-",
                    "telefono": "965265180",
                    "date": "07/19/2014"
                },
                {
                    "nombres": "Axel Keller",
                    "doctipo": "CE",
                    "docnum": "10685320-7",
                    "email": "masculino",
                    "Gruposang": "A+",
                    "telefono": "976854510",
                    "date": "06/09/2013"
                },
                {
                    "nombres": "Harrison Hanson",
                    "doctipo": "CE",
                    "docnum": "16321892-5",
                    "email": "masculino",
                    "Gruposang": "A+",
                    "telefono": "973569256",
                    "date": "06/12/1937"
                },
                {
                    "nombres": "Risa Michael",
                    "doctipo": "DNI",
                    "docnum": "39766508-9",
                    "email": "femenino",
                    "Gruposang": "B-",
                    "telefono": "935153676",
                    "date": "04/24/1985"
                },
                {
                    "nombres": "Sybill Pruitt",
                    "doctipo": "DNI",
                    "docnum": "10553891-K",
                    "email": "femenino",
                    "Gruposang": "B-",
                    "telefono": "924581240",
                    "date": "09/17/1940"
                },
                {
                    "nombres": "Sylvia Washington",
                    "doctipo": "CE",
                    "docnum": "14410886-8",
                    "email": "masculino",
                    "Gruposang": "B+",
                    "telefono": "968896472",
                    "date": "06/07/1970"
                },
                {
                    "nombres": "Frances Savage",
                    "doctipo": "CE",
                    "docnum": "15467102-1",
                    "email": "masculino",
                    "Gruposang": "B+",
                    "telefono": "939053555",
                    "date": "01/22/1984"
                },
                {
                    "nombres": "Bianca Morin",
                    "doctipo": "DNI",
                    "docnum": "15941537-6",
                    "email": "femenino",
                    "Gruposang": "AB+",
                    "telefono": "916865787",
                    "date": "11/25/1994"
                },
                {
                    "nombres": "Adele French",
                    "doctipo": "DNI",
                    "docnum": "48719187-6",
                    "email": "femenino",
                    "Gruposang": "AB+",
                    "telefono": "983785855",
                    "date": "07/19/1969"
                },
                {
                    "nombres": "Ursula Reeves",
                    "doctipo": "CE",
                    "docnum": "28293493-0",
                    "email": "masculino",
                    "Gruposang": "AB-",
                    "telefono": "958556718",
                    "date": "04/29/1973"
                },
                {
                    "nombres": "Keefe Hewitt",
                    "doctipo": "CE",
                    "docnum": "42405102-0",
                    "email": "masculino",
                    "Gruposang": "AB-",
                    "telefono": "925872809",
                    "date": "09/29/1932"
                },
                {
                    "nombres": "Charity Leach",
                    "doctipo": "DNI",
                    "docnum": "15340668-5",
                    "email": "femenino",
                    "Gruposang": "O-",
                    "telefono": "917416125",
                    "date": "04/03/2007"
                },
                {
                    "nombres": "Oscar Sears",
                    "doctipo": "DNI",
                    "docnum": "33779869-1",
                    "email": "femenino",
                    "Gruposang": "O-",
                    "telefono": "935038047",
                    "date": "01/12/1951"
                },
                {
                    "nombres": "Ezekiel Baxter",
                    "doctipo": "CE",
                    "docnum": "33677329-6",
                    "email": "masculino",
                    "Gruposang": "O+",
                    "telefono": "915822124",
                    "date": "06/26/1989"
                },
                {
                    "nombres": "Holmes Leach",
                    "doctipo": "CE",
                    "docnum": "35403882-K",
                    "email": "masculino",
                    "Gruposang": "O+",
                    "telefono": "914280697",
                    "date": "09/19/2012"
                },
                {
                    "nombres": "Jeanette Summers",
                    "doctipo": "DNI",
                    "docnum": "38161494-8",
                    "email": "femenino",
                    "Gruposang": "A-",
                    "telefono": "932363265",
                    "date": "06/28/1943"
                },
                {
                    "nombres": "Hunter Knox",
                    "doctipo": "DNI",
                    "docnum": "18491541-3",
                    "email": "femenino",
                    "Gruposang": "A-",
                    "telefono": "983203081",
                    "date": "03/30/1957"
                },
                {
                    "nombres": "Anne Mooney",
                    "doctipo": "CE",
                    "docnum": "24426386-0",
                    "email": "masculino",
                    "Gruposang": "A+",
                    "telefono": "935895410",
                    "date": "04/15/1949"
                },
                {
                    "nombres": "Melissa Frye",
                    "doctipo": "CE",
                    "docnum": "16189709-4",
                    "email": "masculino",
                    "Gruposang": "A+",
                    "telefono": "934114734",
                    "date": "11/17/2005"
                },
                {
                    "nombres": "Ivan Kramer",
                    "doctipo": "DNI",
                    "docnum": "50928596-9",
                    "email": "femenino",
                    "Gruposang": "B-",
                    "telefono": "930858305",
                    "date": "11/07/1944"
                },
                {
                    "nombres": "Jacqueline Howe",
                    "doctipo": "DNI",
                    "docnum": "29181807-2",
                    "email": "femenino",
                    "Gruposang": "B-",
                    "telefono": "968304408",
                    "date": "06/04/1993"
                },
                {
                    "nombres": "Yvonne Sanchez",
                    "doctipo": "CE",
                    "docnum": "39837255-7",
                    "email": "masculino",
                    "Gruposang": "B+",
                    "telefono": "950272915",
                    "date": "07/22/2021"
                },
                {
                    "nombres": "Walker Gilbert",
                    "doctipo": "CE",
                    "docnum": "25596747-9",
                    "email": "masculino",
                    "Gruposang": "B+",
                    "telefono": "936199474",
                    "date": "04/29/2007"
                },
                {
                    "nombres": "Driscoll Mclaughlin",
                    "doctipo": "DNI",
                    "docnum": "983414-1",
                    "email": "femenino",
                    "Gruposang": "AB+",
                    "telefono": "961299539",
                    "date": "05/28/1977"
                },
                {
                    "nombres": "Nehru Alston",
                    "doctipo": "DNI",
                    "docnum": "4511447-3",
                    "email": "femenino",
                    "Gruposang": "AB+",
                    "telefono": "917171697",
                    "date": "04/23/1997"
                },
                {
                    "nombres": "Harrison Oliver",
                    "doctipo": "CE",
                    "docnum": "6616808-5",
                    "email": "masculino",
                    "Gruposang": "AB-",
                    "telefono": "961964912",
                    "date": "01/01/1956"
                },
                {
                    "nombres": "Edan Benson",
                    "doctipo": "CE",
                    "docnum": "37273353-5",
                    "email": "masculino",
                    "Gruposang": "AB-",
                    "telefono": "971400095",
                    "date": "10/19/1992"
                },
                {
                    "nombres": "Alea Bright",
                    "doctipo": "DNI",
                    "docnum": "1388997-K",
                    "email": "femenino",
                    "Gruposang": "O-",
                    "telefono": "967385123",
                    "date": "06/01/1956"
                },
                {
                    "nombres": "Colleen Fleming",
                    "doctipo": "DNI",
                    "docnum": "19554680-0",
                    "email": "femenino",
                    "Gruposang": "O-",
                    "telefono": "930628518",
                    "date": "03/01/2009"
                }
            ]
        }
    }
}