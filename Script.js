const formularioUI = document.querySelector('#formulario');
const listaMateriasUI = document.getElementById('ListaMaterias');
//let personas = [];
let arrayMaterias = [];




function CalcularDefinitiva1(Quiz1, Taller1, ParcialPractico1, ParcialTeorico1, PorcentajeQuiz1, PorcentajeTaller1, PorcentajeParcialPractico1, PorcentajeParcialTeorico1) {
    var definitiva1= 0;
    var porcentajetotal=0;
    var ponderado1=0;
   
    porcentajetotal=parseInt(PorcentajeQuiz1) + parseInt(PorcentajeTaller1) +parseInt(PorcentajeParcialPractico1)+parseInt(PorcentajeParcialTeorico1);
   if(porcentajetotal!=100){
       alert('PORCENTAJE EXCEDIDO');
   }else{
    PorcentajeQuiz1=PorcentajeQuiz1/100;
    PorcentajeTaller1=PorcentajeTaller1/100;
    PorcentajeParcialPractico1=PorcentajeParcialPractico1/100;
    PorcentajeParcialTeorico1=PorcentajeParcialTeorico1/100;
    definitiva1 = ((Quiz1 * PorcentajeQuiz1) + (Taller1 * PorcentajeTaller1) + (ParcialPractico1 * PorcentajeParcialPractico1) + (ParcialTeorico1 * PorcentajeParcialTeorico1))
    document.getElementById("definitiva").value = definitiva1;
    
    ponderado1 = 0.30*definitiva1;
    document.getElementById("ponderado").value = ponderado1;
    console.log(ponderado1);
    return definitiva1;
   }


   
}



function CalcularDefinitiva2(Quiz2, Taller2, ParcialPractico2, ParcialTeorico2, PorcentajeQuiz2, PorcentajeTaller2, PorcentajeParcialPractico2, PorcentajeParcialTeorico2) {
    var definitiva2= 0;
    var porcentajetotal=0;
    var ponderado2=0;
   
    porcentajetotal=parseInt(PorcentajeQuiz2) + parseInt(PorcentajeTaller2) +parseInt(PorcentajeParcialPractico2)+parseInt(PorcentajeParcialTeorico2);
   if(porcentajetotal!=100){
       alert('PORCENTAJE EXCEDIDO');
   }else{
    PorcentajeQuiz2=PorcentajeQuiz2/100;
    PorcentajeTaller2=PorcentajeTaller2/100;
    PorcentajeParcialPractico2=PorcentajeParcialPractico2/100;
    PorcentajeParcialTeorico2=PorcentajeParcialTeorico2/100;
    definitiva2 = ((Quiz2 * PorcentajeQuiz2) + (Taller2 * PorcentajeTaller2) + (ParcialPractico2* PorcentajeParcialPractico2) + (ParcialTeorico2 * PorcentajeParcialTeorico2))
    document.getElementById("definitiva2").value = definitiva2;
    
    ponderado2 = 0.30*definitiva2;
    document.getElementById("ponderado2").value = ponderado2;
    console.log(ponderado2);
    return definitiva2;
   }


   
}

function CalcularDefinitiva3(Quiz3, Taller3, ParcialPractico3, ParcialTeorico3, PorcentajeQuiz3, PorcentajeTaller3, PorcentajeParcialPractico3, PorcentajeParcialTeorico3) {
    var definitiva3= 0;
    var porcentajetotal=0;
    var ponderado3=0;
   
    porcentajetotal=parseInt(PorcentajeQuiz3) + parseInt(PorcentajeTaller3) +parseInt(PorcentajeParcialPractico3)+parseInt(PorcentajeParcialTeorico3);
   if(porcentajetotal!=100){
       alert('PORCENTAJE EXCEDIDO');
   }else{
    PorcentajeQuiz3=PorcentajeQuiz3/100;
    PorcentajeTaller3=PorcentajeTaller3/100;
    PorcentajeParcialPractico3=PorcentajeParcialPractico3/100;
    PorcentajeParcialTeorico3=PorcentajeParcialTeorico3/100;
    definitiva3 = ((Quiz3 * PorcentajeQuiz3) + (Taller3 * PorcentajeTaller3) + (ParcialPractico3 * PorcentajeParcialPractico3) + (ParcialTeorico3 * PorcentajeParcialTeorico3))
    document.getElementById("definitiva3").value = definitiva3;
    
    ponderado3 = 0.30*definitiva3;
    document.getElementById("ponderado3").value = ponderado3;
    console.log(ponderado3);
    return definitiva3;
   }


   
}


function ArmarJSON3() {

    /* Sacar los Valores de HTML accediendo al DOM. */
    var quiz3 = document.getElementById("quiz3").value
    var taller3 = document.getElementById("taller3").value;
    var parcialpractico3 = document.getElementById("parcialpractico3").value;
    var parcialteorico3 = document.getElementById("parcialteorico3").value;
    var ponderado3 = document.getElementById("ponderado3").value;
    var porcentajequiz3 = document.getElementById("porcentajequiz3").value;
    var porcentajetaller3 = document.getElementById("porcentajetaller3").value;
    var porcentajeparcialpractico3 = document.getElementById("porcentajeparcialpractico3").value;
    var porcentajeparcialteorico3 = document.getElementById("porcentajeparcialteorico3").value;



    var definitiva3 = CalcularDefinitiva3(quiz3, taller3, parcialpractico3, parcialteorico3, porcentajequiz3, porcentajetaller3, porcentajeparcialpractico3, porcentajeparcialteorico3);/* Calcular la definitiva*/


    /* Armar un JSON con las notas*/
    var nota3 = {
        "NombreMateria": NombreMateria,
        "quiz3": quiz3,
        "taller3": taller3,
        "parcialpractico3": parcialpractico3,
        "parcialteorico3": parcialteorico3,
        "porcentajequiz3": porcentajequiz3,
        "porcentajetaller3": porcentajetaller3,
        "porcentajeparcialpractico3": porcentajeparcialpractico3,
        "porcentajeparcialteorico3": porcentajeparcialteorico3,
        "definitiva": definitiva3,
        "ponderado":ponderado3
    }
    return nota3;
}


function ArmarJSON2() {

    /* Sacar los Valores de HTML accediendo al DOM. */
    var quiz2 = document.getElementById("quiz2").value
    var taller2 = document.getElementById("taller2").value;
    var parcialpractico2 = document.getElementById("parcialpractico2").value;
    var parcialteorico2 = document.getElementById("parcialteorico2").value;
    var ponderado2 = document.getElementById("ponderado2").value;
    var porcentajequiz2 = document.getElementById("porcentajequiz2").value;
    var porcentajetaller2 = document.getElementById("porcentajetaller2").value;
    var porcentajeparcialpractico2 = document.getElementById("porcentajeparcialpractico2").value;
    var porcentajeparcialteorico2 = document.getElementById("porcentajeparcialteorico2").value;



    var definitiva2 = CalcularDefinitiva2(quiz2, taller2, parcialpractico2, parcialteorico2, porcentajequiz2, porcentajetaller2, porcentajeparcialpractico2, porcentajeparcialteorico2);/* Calcular la definitiva*/


    /* Armar un JSON con las notas*/
    var nota2 = {
        "NombreMateria": NombreMateria,
        "quiz2": quiz2,
        "taller2": taller2,
        "parcialpractico2": parcialpractico2,
        "parcialteorico2": parcialteorico2,
        "porcentajequiz2": porcentajequiz2,
        "porcentajetaller2": porcentajetaller2,
        "porcentajeparcialpractico2": porcentajeparcialpractico2,
        "porcentajeparcialteorico2": porcentajeparcialteorico2,
        "definitiva2": definitiva2,
        "ponderado2":ponderado2
    }
    return nota2;
}

function ArmarJSON() {

    /* Sacar los Valores de HTML accediendo al DOM. */
    var quiz1 = document.getElementById("quiz1").value
    var taller1 = document.getElementById("taller1").value;
    var parcialpractico1 = document.getElementById("parcialpractico1").value;
    var parcialteorico1 = document.getElementById("parcialteorico1").value;
    var ponderado = document.getElementById("ponderado").value;
    var porcentajequiz1 = document.getElementById("porcentajequiz1").value;
    var porcentajetaller1 = document.getElementById("porcentajetaller1").value;
    var porcentajeparcialpractico1 = document.getElementById("porcentajeparcialpractico1").value;
    var porcentajeparcialteorico1 = document.getElementById("porcentajeparcialteorico1").value;
    var NombreMateria=document.getElementById("NombreMateria").value;
    
 

    var definitiva = CalcularDefinitiva1(quiz1, taller1, parcialpractico1, parcialteorico1, porcentajequiz1, porcentajetaller1, porcentajeparcialpractico1, porcentajeparcialteorico1);

  

    /* Armar un JSON con las notas*/
    var nota = {
        "NombreMateria": NombreMateria,
        "quiz1": quiz1,
        "taller1": taller1,
        "parcialpractico1": parcialpractico1,
        "parcialteorico1": parcialteorico1,
        "porcentajequiz1": porcentajequiz1,
        "porcentajetaller1": porcentajetaller1,
        "porcentajeparcialpractico1": porcentajeparcialpractico1,
        "porcentajeparcialteorico1": porcentajeparcialteorico1,
        "definitiva": definitiva,
        "ponderado":ponderado
        
        
    }
   return nota;
}
function CalcularNota1(nota) {
    let notas = [];/* array de notas este servira para hacer una copia de los datos del LocalStorage*/
    var cortenota = ArmarJSON();

}

function CalcularNota2(nota2) {
    let notas = [];/* array de notas este servira para hacer una copia de los datos del LocalStorage*/
    var cortenota = ArmarJSON2();

   
}

function CalcularNota3(nota3) {
    let notas = [];/* array de notas este servira para hacer una copia de los datos del LocalStorage*/
    var cortenota = ArmarJSON3();

   
}

const GuardarDB = () => {

    localStorage.setItem('Materias', JSON.stringify(arrayMaterias));
   // PintarDB();
}

function guardarCorte(nota) {
    let personas = [];
    var nota = ArmarJSON();

    if (localStorage.getItem('BDLocal') != null) {
      
        personas = JSON.parse(localStorage.getItem('BDLocal'));
    }
    personas.push(nota);
    localStorage.setItem('BDLocal', JSON.stringify(personas));
    PintarDB();
}




const PintarDB = () => {
    listaMateriasUI.innerHTML = '';
    personas = JSON.parse(localStorage.getItem('BDLocal'));
    if (personas === null) {
        personas = [];
    } else {
        personas.forEach(element => {
        
                listaMateriasUI.innerHTML += `<div class="alert alert-success" role="alert">
                <span class="material-icons"> assignment
                </span> <b>Definitiva:</b> ${element.defi} - <b> Nombre de materia:</b>  ${element.NombreMateria} -<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete_forever</span></span></div>`
            
        });
    }
}


