
// import data from './data/athletes/athletes.js';

// console.log(data);
 
import {Athletes, gender, medals, sports, team} from './data.js';
import athletes from './data/athletes/athletes.js';
 
console.log(Athletes());
console.log(sports());
console.log(medals());
console.log(gender());
console.log(team());
 
 
// Desplegar filtro de deportes
function showSportFilter() {
   let arraySport = sports().sort();
   let selectSport = document.getElementById("selectSport"); //Seleccionamos el select
   for(let i=0; i < arraySport.length; i++){
       let optionSport = document.createElement("option") //Creamos la opcion
       optionSport.innerHTML = arraySport[i];
       optionSport.value = arraySport[i]; //Metemos el texto en la opción
       selectSport.appendChild(optionSport); //Metemos la opción en el select
   }
}
showSportFilter();
 
// Desplegar filtro de Medallas
function showMedalsFilter() {
   let arrayMedal = medals().sort();
   let selectMedal = document.getElementById("selectMedal"); //Seleccionamos el select
   
   let optionMedal2 = document.createElement("option");
   optionMedal2.innerHTML = "Todos";
   optionMedal2.value = "Todos";
   selectMedal.appendChild(optionMedal2);
 
   for(let i=0; i < arrayMedal.length; i++){
       let optionMedal = document.createElement("option"); //Creamos la opcion
       optionMedal.innerHTML = arrayMedal[i];
       optionMedal.value = arrayMedal[i]; //Metemos el texto en la opción
       selectMedal.appendChild(optionMedal); //Metemos la opción en el select
   }
}
showMedalsFilter();
 
// Desplegar filtro de Género
function showGenderFilter() {
   let arrayGender = gender().sort();
   let selectGender = document.getElementById("selectGender"); //Seleccionamos el select
   
   let optionGender2 = document.createElement("option");
   optionGender2.innerHTML = "Todos";
   optionGender2.value = "Todos";
   selectGender.appendChild(optionGender2);
 
   for(let i=0; i < arrayGender.length; i++){
       let optionGender = document.createElement("option"); //Creamos la opcion
       optionGender.innerHTML = arrayGender[i];
       optionGender.value = arrayGender[i]; //Metemos el texto en la opción
       selectGender.appendChild(optionGender); //Metemos la opción en el select
   }
}
showGenderFilter();
 
// Desplegar filtro de Países
function showTeamFilter() {
    let arrayTeam = team().sort();
    let selectTeam = document.getElementById("selectTeam"); //Seleccionamos el select
 
    for(let i=0; i < arrayTeam.length; i++){
        let optionTeam = document.createElement("option"); //Creamos la opcion
        optionTeam.innerHTML = arrayTeam[i];
        optionTeam.value = arrayTeam[i]; //Metemos el texto en la opción
        selectTeam.appendChild(optionTeam); //Metemos la opción en el select
    }
 }
 showTeamFilter();
 
 
    // Activar evento Onclick en botón Buscar
function clickSearch(){
    let chosenSport = document.getElementById("selectSport").value;
    let chosenMedal = document.getElementById("selectMedal").value;
    let chosenGender = document.getElementById("selectGender").value;
    let chosenTeam = document.getElementById("selectTeam").value;
    console.log(chosenSport + chosenMedal + chosenGender + chosenTeam);
 
    let filterData=athletes.athletes;
    if(chosenSport != ""){
        filterData = filterData.filter(function (athlete) {
            return athlete.sport == chosenSport;
        });
    }
    if(chosenMedal != ""){
        filterData = filterData.filter(function (athlete) {
            return athlete.medal == chosenMedal;
        });
    }
    if(chosenGender != ""){
        filterData = filterData.filter(function (athlete) {
            return athlete.gender == chosenGender;
        });        
    }
    if(chosenTeam != ""){
        filterData = filterData.filter(function (athlete) {
            return athlete.team == chosenTeam;
        });
    }
    generateTableContent(filterData);
    return chosenSport + chosenMedal + chosenGender + chosenTeam;
 
   
}
    window.clickSearch=clickSearch;
 
function generateTableContent(filterData){
  let table = document.getElementById("tbOlimpics");
  filterData.forEach((athlete)=>{
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    cell1.innerHTML = athlete.event;
    cell2.innerHTML = athlete.medal;
    cell3.innerHTML = athlete.name;
    cell4.innerHTML = athlete.gender;
    cell5.innerHTML = athlete.age;
    cell6.innerHTML = athlete.weight;
    cell7.innerHTML = athlete.height;
  });
}
 
