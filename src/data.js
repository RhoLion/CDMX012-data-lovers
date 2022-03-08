import data from './data/athletes/athletes.js';


import data from './data/athletes/athletes.js';
 
export const Athletes = () => {
  return data;
};
 
// Traer set de datos de Deportes
export const sports = () => {
   let arraySport = [];
   data.athletes.forEach((athlete) => {
     arraySport.push(athlete.sport);
   });
   let eraseDuplicate1 = arraySport.filter((item,index)=>{
     return arraySport.indexOf(item) === index;
   });
   return eraseDuplicate1;
 }
 
 // Traer set de datos de Medallas
 export const medals = () => {
  let arrayMedal = [];
  data.athletes.forEach((athlete) => {
    arrayMedal.push(athlete.medal);
  });
  let eraseDuplicate2 = arrayMedal.filter((item,index)=>{
    return arrayMedal.indexOf(item) === index;
  });
  return eraseDuplicate2;
}
 
// Traer set de datos de Género
export const gender = () => {
  let arrayGender = [];
  data.athletes.forEach((athlete) => {
    arrayGender.push(athlete.gender);
  });
  let eraseDuplicate3 = arrayGender.filter((item,index)=>{
    return arrayGender.indexOf(item) === index;
  });
  return eraseDuplicate3;
}
 
// Traer set de datos de Países
export const team = () => {
  let arrayTeam = [];
  data.athletes.forEach((athlete) => {
    arrayTeam.push(athlete.team);
  });
  let eraseDuplicate4 = arrayTeam.filter((item,index)=>{
    return arrayTeam.indexOf(item) === index;
  });
  return eraseDuplicate4;
}

 
        //  let select = document.getElementById('selectSport');
    //  select.addEventListener("change",
    //    function(){
    //      let selectedOption = this.options[select.selectedIndex];
    //      console.log(selectedOption.value + ': ' + selectedOption.text);
    //      return selectedOption.value
    //     });
