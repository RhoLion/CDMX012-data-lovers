import data from './data/athletes/athletes.js';

// export const Athletes = () => {
//   return data;
// };

// Traer set de datos de Deportes
export const sports = () => {
  let arraySport = [];
  data.athletes.forEach((athlete) => {
    arraySport.push(athlete.sport);
  });
  let eraseDuplicate1 = arraySport.filter((item, index) => {
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
  let eraseDuplicate2 = arrayMedal.filter((item, index) => {
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
  let eraseDuplicate3 = arrayGender.filter((item, index) => {
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
  let eraseDuplicate4 = arrayTeam.filter((item, index) => {
    return arrayTeam.indexOf(item) === index;
  });
  return eraseDuplicate4;
}

//Función para ordenar las columnas de la tabla
 export const sortTableByColumn = (table, column, asc = true) => {
  const sortCells = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // ordenar por cada fila
  const sortedRows = rows.sort((a, b) => {
    const aIterateNode = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
    const bIterateNode = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
      return aIterateNode > bIterateNode ? (1 * sortCells) : (-1 * sortCells);
  });
 
  // remover la tabla existente
  while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
  }
  // re agrega la nueva fila ordenada
  tBody.append(...sortedRows);

  // recuerda como estaba ordenada la columna 
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}
